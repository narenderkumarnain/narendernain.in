import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type paramsType = Promise<{ slug: string }>;

type Props = {
  params: paramsType;
};

// This is a server-side API route, so we can use fs here
// @ts-ignore
export async function GET(
  // @ts-ignore
  request: NextRequest,
  // @ts-ignore
  // { params }: { params: tParams }
  { params }: Props
) {
  try {
    // @ts-ignore
    // Get the slug from params
    // @ts-ignore
    // const params = await context.params;
    // @ts-ignore
    // const pms =  context.params;
    const {slug} = await params;
    // @ts-ignore
    const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
    
    try {
      // Check if file exists before reading
      await fs.access(filePath);
      
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Enhanced markdown processing
      const processedContent = await remark()
        .use(html, { sanitize: false }) // Allow HTML in markdown
        .process(content);
      
      // Convert to string and enhance with additional processing
      let contentHtml = processedContent.toString();
      
      // Add target="_blank" to external links
      contentHtml = contentHtml.replace(
        /<a href="(https?:\/\/[^"]+)">/g, 
        '<a href="$1" target="_blank" rel="noopener noreferrer">'
      );
      
      // Enhance tables with responsive wrapper
      contentHtml = contentHtml.replace(
        /<table>/g,
        '<div class="overflow-x-auto"><table>'
      ).replace(
        /<\/table>/g,
        '</table></div>'
      );
      
      // Add syntax highlighting classes to code blocks
      contentHtml = contentHtml.replace(
        /<pre><code>([^<]+)<\/code><\/pre>/g,
        '<pre><code class="language-text">$1</code></pre>'
      );
      
      // Try to detect language in code blocks
      contentHtml = contentHtml.replace(
        /```(\w+)\n([^`]+)```/g,
        (_, lang, code) => `<pre><code class="language-${lang}">${code}</code></pre>`
      );
      
      return NextResponse.json({
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content: contentHtml,
        tags: data.tags || [],
      });
    } catch (error) {
      console.error(`Error reading post ${slug}:`, error);
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}