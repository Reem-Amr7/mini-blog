export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-stone-200 px-6 py-4 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-stone-800" style={{ fontFamily: "Lora, serif" }}>
        mini blog<span className="text-amber-500">.</span>
      </a>
      <div className="flex gap-6 text-sm text-stone-500 font-medium">
        <a href="/" className="hover:text-amber-500 transition-colors">Home</a>
        <a href="/blog" className="hover:text-amber-500 transition-colors">Blog</a>
        <a href="/about" className="hover:text-amber-500 transition-colors">About</a>
      </div>
    </nav>
  );
}