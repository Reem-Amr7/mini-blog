import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-32">
      <div className="max-w-2xl text-center">
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-zinc-500">
          Welcome to the blog
        </span>

        <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-zinc-900 md:text-6xl">
          Ideas worth{" "}
          <span className="text-amber-600">building.</span>
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-zinc-600">
          Articles about web development, design systems, and the tools that help us ship better software.
        </p>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 border border-amber-600 bg-amber-600 px-6 py-3 font-mono text-sm font-bold text-white transition-all hover:bg-transparent hover:text-amber-600"
        >
          Read the blog →
        </Link>
        
      </div>
    </section>
  );
}