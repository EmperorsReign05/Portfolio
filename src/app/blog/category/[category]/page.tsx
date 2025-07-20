import Link from "next/link";
import { client } from "@/../sanity/lib/client";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
}
type Props = { params: { category: string }; };

async function getPostsByCategory(category: string) {
  const query = `*[_type == "post" && $category in categories[]->title] {
    _id,
    title,
    slug
  }`;
  const data = await client.fetch(query, { category });
  return data;
}

export default async function CategoryPage({ params }: Props) {
  const posts: Post[] = await getPostsByCategory(decodeURIComponent(params.category));

  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8" style={{fontFamily: "var(--font-press-start-2p)"}}>
        Category: {decodeURIComponent(params.category)}
      </h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <div className="p-4 rounded-lg border bg-card hover:bg-secondary transition-colors">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
            </div>
          </Link>
        ))}
        {posts.length === 0 && <p>No posts found in this category.</p>}
      </div>
    </main>
  );
}