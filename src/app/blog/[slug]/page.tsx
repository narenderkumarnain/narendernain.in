import Link from 'next/link';
import { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  context: { params: { slug: string } }
): Promise<Metadata> {
  const parameters = await context.params;
  const post = await getPostBySlug(parameters.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Narender Nain`,
    description: post.excerpt,
  };
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const parameters = await params;
  const slug = parameters.slug;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="py-16 max-w-3xl mx-auto">
      <article>
        <header className="mb-12">
          <p className="text-sm text-foreground-subtle mb-2">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {post.title}
          </h1>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-background-lighter text-foreground-muted text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-foreground-muted prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-hover prose-code:text-foreground-muted prose-code:bg-background-lighter prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
      
      <div className="mt-16 pt-8 border-t border-border">
        <Link 
          href="/blog"
          className="text-primary hover:text-primary-hover"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
} 