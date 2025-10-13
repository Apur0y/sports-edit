// components/Banner.tsx
"use client";
import Image from "next/image";
import { FaFutbol, FaBasketballBall, FaGolfBall, FaFootballBall } from "react-icons/fa";

export default function Banner() {
  const sports = [
  { name: "Soccer", icon: <FaFutbol /> },
  { name: "Basketball", icon: <FaBasketballBall /> },
  { name: "Golf", icon: <FaGolfBall /> },
  { name: "Rugby", icon: <FaFootballBall /> },
];

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

   <div className="absolute bottom-0  w-full flex justify-around gap-4 bg-neutral-900 px-6">
      {sports.map((sport) => (
        <div key={sport.name} className="flex items-center gap-3 hover:bg-blue-600/20 p-3 transition-all duration-300">
          {/* Icon */}
          <div className="text-3xl text-white">{sport.icon}</div>

          {/* Button */}
          <button className="px-5 py-2 rounded-lg cursor-pointer  transition text-start">
            <h1 className="text-xl font-semibold">{sport.name}</h1>
            <p className="text-sm text-gray-300">Check out this sports video</p>
          </button>
        </div>
      ))}
    </div>
    </section>
  );
}
