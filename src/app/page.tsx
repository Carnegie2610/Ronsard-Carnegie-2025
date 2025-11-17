import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <h1>Hello World</h1>
      <Link href="/about">About</Link>
      <Link href="/articles">Articles</Link>
      <Link href="/education">Education</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
}

