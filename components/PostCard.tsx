import Link from "next/link";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export default function PostCard({ title, excerpt, date, category, slug }: PostCardProps) {
  return (
    <article className="border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4 flex items-center gap-2">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-600">
          {category}
        </span>
        <time className="text-xs text-zinc-500">{date}</time>
      </div>
      <h2 className="mb-3 text-xl font-bold text-zinc-900">
        <Link href={`/blog/${slug}`} className="hover:text-amber-600 transition-colors">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-zinc-600 leading-relaxed">{excerpt}</p>
    </article>
  );
}