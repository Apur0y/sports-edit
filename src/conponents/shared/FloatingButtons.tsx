// components/FloatingButtons.tsx
"use client";
import Link from "next/link";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Link href="/order" className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700">
        Order Now
      </Link>
      <Link href="/contact" className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700">
        Contact Us
      </Link>
    </div>
  );
}
