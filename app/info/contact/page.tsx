import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/" className="text-xl text-blue-500 inline-block">
        Contact Page
      </Link>
      Back Home
    </div>
  );
}
