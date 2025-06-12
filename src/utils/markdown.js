import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';

const postsDir = path.join(process.cwd(), 'content');

function getMdxFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir).flatMap((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      return getMdxFiles(fullPath);
    }
    if (file.endsWith('.mdx')) {
      return [fullPath];
    }
    return [];
  });
}

function generateSlug(filePath) {
  return path
    .relative(postsDir, filePath)
    .replace(/\\/g, '/')                  
    .replace(/ /g, '-')                   
    .replace(/[^a-zA-Z0-9-_./]/g, '')     
    .replace(/\.mdx$/, '');             
}

export function getPostSlugs() {
  const mdxFiles = getMdxFiles(postsDir);
  return mdxFiles.map(generateSlug);
}

function getFullPathFromSlug(slug) {
  return path.join(postsDir, `${slug.replace(/\//g, path.sep)}.mdx`);
}

export async function getPostData(slug) {
  const fullPath = getFullPathFromSlug(slug);

  if (!fs.existsSync(fullPath)) {
    return {
      title: 'Not Found',
      date: '',
      code: null,
    };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  }

  const result = await bundleMDX({
    source: content,
    cwd: postsDir,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeKatex, rehypeHighlight];
      return options;
    },
  });

  return {
    ...data,
    slug,
    code: result.code,
  };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(getPostData));
  return posts.filter((post) => post.code !== null);
}
