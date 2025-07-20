// src/app/blog/page.tsx

import Link from "next/link";
import { client } from "@/../sanity/lib/client";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  categories: { title: string }[]; 
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "categories": categories[]->{title}
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8" style={{fontFamily: "var(--font-press-start-2p)"}}>
        Dev Log
      </h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="p-6 rounded-lg border bg-card">
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-2xl font-semibold hover:text-primary transition-colors">{post.title}</h2>
            </Link>
          
            <div className="flex flex-wrap gap-2 mt-4">
              {post.categories?.map((category) => (
                 <Link key={category.title} href={`/blog/category/${category.title}`}>
      <span className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-primary/20 transition-colors">
        {category.title}
      </span>
    </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}