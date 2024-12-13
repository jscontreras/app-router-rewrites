import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const dynamic = 'force-static';

async function getPost(slug: string[]) {
  const postId = slug.join(' ');
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.length}`, {
    next: { tags: ['blog-post'] }
  })
  if (!res.ok) return undefined
  return res.json()
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const {slug} =  await params;
  const post = await getPost(slug)
  if (!post) {
    return { title: 'Post Not Found' }
  }
  return { title: post.title }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const generatedDate = new Date().toLocaleString()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{slug.join(' ').replaceAll('-', ' ').toLocaleUpperCase()}</h1>
      <h2 className="text-xl font-bold mb-4">{post.title}</h2>
      <p className="mb-4">{post.body}</p>
      <p className="text-sm text-gray-500">Post ID: {post.id}</p>
      <p className="text-sm text-gray-500">Tag: blog-post</p>
      <p className="text-sm text-gray-500 mt-4">Generated on: {generatedDate}</p>
    </div>
  )
}

