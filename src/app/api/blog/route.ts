import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/utils/blog';

export async function GET(request: NextRequest) {
  try {
    // Get all posts
    const posts = getAllPosts();
    
    // Return the posts
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
} 