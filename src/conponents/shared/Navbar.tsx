
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white z-50 flex justify-between items-center px-8 py-4 shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">Apu Sports Edit</h1>
      <ul className="flex gap-6 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#packages">Packages</Link></li>
        <li><Link href="#reviews">Reviews</Link></li>
        <li><Link href="#faq">FAQ</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
