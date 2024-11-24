import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4 border-b-2">
      <p className="font-bold text-white px-4 py-1 bg-black">munichmotoclub</p>
      <Link href="/" className="py-1">Home</Link>
      <Link href="/counter" className="py-1">Counter</Link>
      <Link href="/tours" className="py-1">Tours</Link>
      <Link href="/actions" className="py-1">Actions</Link>
    </nav>
  );
}
