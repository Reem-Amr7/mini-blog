import Link from "next/link";
import PostCard from "./PostCard"; // تعديل المسار نسبي

const allPosts = [
  {
    title: "Getting Started with Next.js App Router",
    excerpt:
      "A deep dive into the new App Router paradigm and how it changes the way we build React applications at scale.",
    date: "2024-01-15",
    category: "Next.js",
    slug: "getting-started-nextjs-app-router",
  },
  {
    title: "Mastering Tailwind CSS in 2024",
    excerpt:
      "Tips, tricks, and patterns for building beautiful UIs with Tailwind CSS without losing your mind.",
    date: "2024-01-10",
    category: "CSS",
    slug: "mastering-tailwind-css-2024",
  },
  {
    title: "TypeScript Best Practices for React Developers",
    excerpt:
      "How to leverage TypeScript to write safer, more maintainable React components.",
    date: "2024-01-05",
    category: "TypeScript",
    slug: "typescript-best-practices-react",
  },
  {
    title: "Git Flow in Real Projects",
    excerpt:
      "How to structure your branching strategy for teams that ship fast without breaking things.",
    date: "2023-12-28",
    category: "Git",
    slug: "git-flow-real-projects",
  },
  {
    title: "React Server Components Explained",
    excerpt:
      "What RSC actually means for your architecture, data fetching patterns, and bundle size.",
    date: "2023-12-20",
    category: "React",
    slug: "react-server-components-explained",
  },
  {
    title: "Building a Design System from Scratch",
    excerpt:
      "A practical guide to tokens, components, and documentation that your team will actually use.",
    date: "2023-12-15",
    category: "Design",
    slug: "design-system-from-scratch",
  },
];

const categories = ["All", ...Array.from(new Set(allPosts.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900"> {/* ألوان فاتحة */}
    

      {/* ─── HEADER ─── */}
      <section className="border-b border-gray-200 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-amber-600">
            All Articles
          </span>
          <h1 className="text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">
            The Blog
          </h1>
        </div>
      </section>

      {/* ─── CATEGORY FILTER (static / visual only) ─── */}
      <section className="border-b border-gray-200 px-6 py-4">
        <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`whitespace-nowrap rounded-none border px-4 py-1.5 font-mono text-xs transition-colors ${
                cat === "All"
                  ? "border-amber-600 bg-amber-600 text-white"
                  : "border-gray-300 text-zinc-600 hover:border-gray-400 hover:text-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── POSTS GRID ─── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          {/* count */}
          <p className="mb-8 font-mono text-xs text-zinc-500">
            {allPosts.length} articles
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}