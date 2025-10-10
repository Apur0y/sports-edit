// components/Banner.tsx
"use client";
import Image from "next/image";

export default function Banner() {
  const sports = ["Soccer", "Rugby", "Golf", "Basketball", "Baseball"];
  
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/banner-sports.jpg"
          alt="Sports Banner"
          fill
          className="object-cover brightness-75 animate-pulse"
        />
      </div>

      <div className="absolute bottom-8 w-full flex justify-center gap-4">
        {sports.map((sport) => (
          <button key={sport} className="px-5 py-2 bg-white/20 text-white border border-white rounded-lg hover:bg-white hover:text-black transition">
            {sport}
          </button>
        ))}
      </div>
    </section>
  );
}
