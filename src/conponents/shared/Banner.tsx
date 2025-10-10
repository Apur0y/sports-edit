// components/Banner.tsx
"use client";
import Image from "next/image";
import { GiHumanTarget } from "react-icons/gi";

export default function Banner() {
  const sports = ["Soccer", "Rugby", "Golf", "Basketball", "Baseball"];

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg"
          alt="Sports Banner"
          fill
          className="object-cover "
        />
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-1/2 -left-80 w-full flex justify-center gap-4">
        <h1 className="text-7xl font-semibold">
          Make the Play <br /> At It&apos;s Best
        </h1>
      </div>

      <div className="absolute bottom-0 py-4 w-full flex justify-around gap-4 bg-neutral-900 space-x-3">
        {sports.map((sport) => (
          <div key={sport} className="flex items-center">
            <p><GiHumanTarget className="size-8"/></p>
            <button className="px-5 py-2  rounded-lg cursor-pointer hover:text-blue-700 transition text-start">
              <h1 className="text-xl font-semibold">{sport}</h1>
              <p>Check out this sports video</p>
            </button>
          </div>
        ))}
        
      </div>
    </section>
  );
}
