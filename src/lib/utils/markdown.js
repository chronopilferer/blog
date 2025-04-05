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
  if (!fs.existsSync(dir)) return [];

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

function getFullPathFromSlug(slug) {
  return path.join(postsDir, `${slug.replace(/\//g, path.sep)}.md`);
}

export function getPostBySlug(slug) {
  const fullPath = getFullPathFromSlug(slug);

  try {
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Markdown file not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = remark().use(html).processSync(content).toString();

    return {
      slug,
      frontMatter: data,
      contentHtml: htmlContent,
    };
  } catch (error) {
    console.error(`Error processing file ${fullPath}:`, error);
    return null;
  }
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs
    .map(getPostBySlug)
    .filter((post) => post !== null);
}

export async function getPostData(slug) {
  const fullPath = getFullPathFromSlug(slug);

  try {
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Markdown file not found: ${fullPath}`);
      return {
        title: 'Not Found',
        date: '',
        contentHtml: '<p>This post could not be found.</p>',
      };
    }

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
  } catch (error) {
    console.error(`Error processing markdown for slug ${slug}:`, error);
    return {
      title: 'Error',
      date: '',
      contentHtml: `<p>Error processing the post: ${error.message}</p>`,
    };
  }
}
