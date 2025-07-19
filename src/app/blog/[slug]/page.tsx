// src/app/blog/[slug]/page.tsx

import { client } from "@/../sanity/lib/client"; // Adjust import path
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { PortableTextBlock } from 'sanity';

interface Post {
  title: string;
  mainImageUrl: string; // This now matches the name from your GROQ query
   body: PortableTextBlock[];
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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: Post = await getPost(params.slug);

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
      
      <div className="prose prose-lg dark:prose-invert">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}