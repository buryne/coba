import Link from "next/link";
import { reader } from "./reader";
import "./styles.css";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div>
      <section className="my-4">
        <h1 className="text-3xl font-bold leading-relaxed">Keystatic ⚡️</h1>
        <div className="dark:text-gray-400">
          <p>This homepage shows how to load a collection from the reader API.</p>
          <p>
            <Link href="/keystatic" target="_blank">
              Click here to visitt the <span className="underline">Admin UI</span>
            </Link>
            , or the link below to view a post in the collection.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold leading-relaxed">Posts</h2>
        <ul className="dark:text-gray-400">
          {posts.map((post) => (
            <li key={post.slug}>
              <h1>
                <Link href={`/${post.slug}`}>{post.entry.title}</Link>
              </h1>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
