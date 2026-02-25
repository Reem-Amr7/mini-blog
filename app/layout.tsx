import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | dev.blog",
  },
  description: "Articles about web development, design systems, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-zinc-900"> {/* غيرنا الألوان هنا */}
        <Navbar />
        <HomePage/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}