// src/app/blog/page.tsx

import Link from "next/link";
import { client } from "@/../sanity/lib/client"; // Adjust import path if needed

// Define the type for a Post
interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  // Add other fields you want to display on the list page
}

// Create a function to fetch the data
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug
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
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <div className="p-4 rounded-lg border bg-card hover:bg-secondary transition-colors">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}