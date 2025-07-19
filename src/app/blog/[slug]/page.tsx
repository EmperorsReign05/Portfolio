import { client } from "@/../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "sanity";

interface Post {
  title: string;
  mainImageUrl?: string;
  body: PortableTextBlock[];
}

// ✅ Generate static paths (dynamic routes)
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts: { slug: string }[] = await client.fetch(query);
  return posts.map((post) => ({ slug: post.slug }));
}

// ✅ Fetch individual post
async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "mainImageUrl": mainImage.asset->url,
    body
  }`;
  const data = await client.fetch(query, { slug });
  return data ?? null;
}

// ✅ Page component with inline typing to avoid Vercel TS error
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound(); // Triggers Next.js 404 page
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
          priority
        />
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
