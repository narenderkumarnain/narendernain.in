import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export function getAllPosts(): BlogPost[] {
  // Check if the directory exists
  if (!fs.existsSync(contentDirectory)) {
    console.warn('Blog content directory does not exist:', contentDirectory);
    return [];
  }
  
  try {
    // Get all files from the blog directory
    const files = fs.readdirSync(contentDirectory);
    
    // Get the posts data
    const posts = files
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
      .map((file) => {
        // Get the slug from the filename
        const slug = file.replace(/\.mdx?$/, '');
        
        // Get the file path
        const filePath = path.join(contentDirectory, file);
        
        // Get the file content
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        // Parse the frontmatter
        const { data, content } = matter(fileContent);
        
        return {
          slug,
          title: data.title || slug,
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          content,
          tags: data.tags || [],
        };
      })
      // Sort posts by date in descending order
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  // Check if the directory exists
  if (!fs.existsSync(contentDirectory)) {
    console.warn('Blog content directory does not exist:', contentDirectory);
    return null;
  }
  
  try {
    // Try both .md and .mdx extensions
    let filePath = path.join(contentDirectory, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(contentDirectory, `${slug}.md`);
      if (!fs.existsSync(filePath)) {
        console.warn(`Blog post not found for slug: ${slug}`);
        return null;
      }
    }
    
    // Get the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse the frontmatter
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content,
      tags: data.tags || [],
    };
  } catch (error) {
    console.error(`Error getting blog post for slug ${slug}:`, error);
    return null;
  }
} 