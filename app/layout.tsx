import Link from "next/link";

export const metadata = {
  title: {
    default: "Keystatic",
    template: "%s | Keystatic",
  },
  description: "Keystatic is a static site generator for React.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900 dark:text-white">
        <header>
          <nav className=" flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="my-4">{children}</main>
      </body>
    </html>
  );
}
