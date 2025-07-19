// src/app/blog/[slug]/page.tsx

import { client } from "@/../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { PortableTextBlock } from 'sanity';

// This Props type is correct and we will keep it
type Props = {
  params: {
    slug: string;
  };
};

interface Post {
  title: string;
  mainImageUrl: string;
  body: PortableTextBlock[];
}

// This new function tells Next.js which pages to build
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);

  // We return an array of objects, where each object has a 'slug' property
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "mainImageUrl": mainImage.asset->url,
    body
  }`;
  const data = await client.fetch(query, { slug });
  return data;
}

export default async function PostPage({ params }: Props) {
  const post: Post = await getPost(params.slug);

  // It's good practice to handle the case where a post might not be found
  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-20 px-4 font-sans">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      {post.mainImageUrl && (
        <Image 
          src={post.mainImageUrl} 
          alt={post.title} 
          width={800} 
          height={400} 
          className="my-8 rounded-lg object-cover" 
        />
      )}
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}