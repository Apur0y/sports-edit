"use client";
import React from "react";
import ComponentHeader from "../Reuseable/Header";
import Link from "next/link";
import WorksCard from "../shared/WorksCard";

type Video = {
  id: number;
  sport: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
};

const videos: Video[] = [
  {
    id: 1,
    sport: "Football",
    title: "High School Football Highlights",
    thumbnail: "/videos/thumb1.jpg",
    videoUrl: "https://www.youtube.com/embed/O__cpWn2mPY?si=AyhXaWCQ1_D_z3Ck",
  },
  {
    id: 2,
    sport: "Basketball",
    title: "College Basketball Highlights",
    thumbnail: "/videos/thumb2.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/4OcFQBwh1N8?si=cr5M3iMAoZjJ0xqX&amp;start=1",
  },
  {
    id: 3,
    sport: "Football",
    title: "Recruiting Highlights 2024",
    thumbnail: "/videos/thumb3.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/UWrobmt0ge8?si=fbxPhS6UdNbOmcaV&amp;start=1",
  },
  {
    id: 4,
    sport: "Baseball",
    title: "Baseball Montage",
    thumbnail: "/videos/thumb4.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/4OcFQBwh1N8?si=cr5M3iMAoZjJ0xqX&amp;start=1",
  },
];

export default function OurWorks() {
  return (
    <section className="w-full container py-32  text-white mx-auto">
      <div className="container mx-auto px-4 ">
        <ComponentHeader title="Works Gallery" />
        

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {videos.map((video) => <WorksCard key={video.id} video={video}/>)}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Link
            target="_blank"
            href="https://www.youtube.com/@PlayPickerltd/playlists"
            className="px-8 py-3 border border-black text-black cursor-pointer hover:text-white hover:border-primary transition font-medium hover:bg-primary"
          >
            View All Works
          </Link>
        </div>
      </div>
    </section>
  );
}

