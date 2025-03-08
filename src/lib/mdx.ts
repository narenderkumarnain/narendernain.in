// Client-safe blog post utility
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

// Define blog posts metadata (without content)
const blogPostsMetadata = [
  {
    slug: "building-portfolio-with-cursor",
    title: "Building My Portfolio with Cursor AI",
    date: "2024-03-15",
    excerpt: "How I leveraged Cursor AI to build this portfolio website efficiently and what I learned along the way.",
    tags: ["AI", "Web Development", "Next.js", "Developer Tools"],
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js and TypeScript",
    date: "2024-03-08",
    excerpt: "An introduction to building modern web applications with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Web Development", "React"],
  },
  {
    slug: "backend-development-best-practices",
    title: "Best Practices for Backend Development",
    date: "2024-03-01",
    excerpt: "Exploring the best practices and patterns for building robust backend systems.",
    tags: ["Backend", "API Design", "Software Architecture", "Performance"],
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  // For the blog listing, we only need metadata
  return [...blogPostsMetadata].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ) as BlogPost[];
}

export async function getPostBySlug(slug: string) {
  try {
    // For server-side rendering, we need to use a relative URL
    // This will work both in development and production
    // const url = `/api/blog/${slug}`;

    // Simplified URL construction that works in all environments
    // Using relative URL is more reliable across environments
    const url = `/api/blog/${slug}`;
    
    // Use absolute URL for fetch
    const response = await fetch(url, { 
      next: { revalidate: 60 },
      // Remove credentials which might cause auth issues
      // credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    
    const post = await response.json();
    return post;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

export async function getLatestPosts(count: number = 2): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
} 