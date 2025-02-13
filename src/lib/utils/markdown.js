import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';  
import rehypeStringify from 'rehype-stringify';  
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';  

const postsDir = path.join(process.cwd(), 'content');

function getMarkdownFiles(dir) {
  return fs.readdirSync(dir).flatMap((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      return getMarkdownFiles(fullPath);
    }
    if (file.endsWith('.md')) {
      return fullPath;
    }
    return [];
  });
}

function generateSlug(filePath) {
  const slug = path
    .relative(postsDir, filePath)
    .replace(/\\/g, '/')        
    .replace(/ /g, '-')        
    .replace(/[^a-zA-Z0-9-_./]/g, '') 
    .replace(/\.md$/, '');
  return slug;
}

export function getPostSlugs() {
  const markdownFiles = getMarkdownFiles(postsDir);
  return markdownFiles.map(generateSlug);
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDir, `${slug.replace(/\//g, path.sep)}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`❌ Markdown file not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = remark().use(html).processSync(content).toString();

  return {
    slug,
    frontMatter: data,
    contentHtml: htmlContent,
  };
}

export function getAllPosts() {
  const posts = getPostSlugs().map(getPostBySlug);
  return posts;
}



export async function getPostData(slug) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)                                 
    .use(remarkMath)                                
    .use(remarkRehype, { allowDangerousHtml: true }) 
    .use(rehypeRaw)                                 
    .use(rehypeMathjax)                             
    .use(rehypeStringify)                           
    .process(content);

  return {
    ...data,                
    contentHtml: processedContent.toString(), 
  };
}

