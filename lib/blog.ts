import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
  readingTime: string;
}

const contentDir = path.join(process.cwd(), 'content', 'blog');

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '');
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data, content } = matter(raw);
    const wordCount = content.split(/\s+/).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || 'Robert Wallace',
      category: data.category || 'lead-generation',
      tags: data.tags || [],
      image: data.image || '/blog/default.jpg',
      content,
      readingTime,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export function getCategories(): string[] {
  const posts = getBlogPosts();
  const cats = [...new Set(posts.map((p) => p.category))];
  return cats.sort();
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const posts = getBlogPosts().filter((p) => p.slug !== currentSlug);
  return posts.slice(0, limit);
}
