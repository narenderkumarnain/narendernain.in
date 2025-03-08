"use client";

import Link from 'next/link';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { BlogPost, getAllPosts } from '@/lib/mdx';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);
  
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Blog
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Thoughts, ideas, and insights on software development, machine learning, and building products.
          </p>
        </header>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-xl">Loading posts...</div>
          </div>
        ) : posts.length === 0 ? (
          <div className="card p-6 text-center">
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              Coming Soon!
            </h2>
            <p className="text-foreground-muted">
              I'm currently working on some interesting articles. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="card p-6 hover:translate-y-[-4px] transition-all"
              >
                <p className="text-sm text-foreground-subtle mb-2">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </p>
                <h2 className="text-xl font-semibold mb-3 text-foreground">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-foreground-muted mb-4">
                  {post.excerpt}
                </p>
                
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-background-lighter text-foreground-muted text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary-hover"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 