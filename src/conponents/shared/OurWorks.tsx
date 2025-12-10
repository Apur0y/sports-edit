"use client";
import React from "react";
import ComponentHeader from "../Reuseable/Header";
import Link from "next/link";

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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    sport: "Basketball",
    title: "College Basketball Highlights",
    thumbnail: "/videos/thumb2.jpg",
    videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
  {
    id: 3,
    sport: "Football",
    title: "Recruiting Highlights 2024",
    thumbnail: "/videos/thumb3.jpg",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
  {
    id: 4,
    sport: "Baseball",
    title: "Baseball Montage",
    thumbnail: "/videos/thumb4.jpg",
    videoUrl: "https://www.youtube.com/embed/V-_O7nl0Ii0",
  },
];

export default function OurWorks() {
  return (
    <section className="w-full container py-32  text-white mx-auto">
      <div className="container mx-auto px-4 ">
        <ComponentHeader title="Works Gallery" text="Check out top works" />
        

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-blue-900/20 rounded- shadow hover:shadow-lg transition overflow-hidden h-full"
            >
              <div className="aspect-video">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.sport}</p>
                  </div>

                  {/* Preview Button */}
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 border rounded"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=o7c5LxzmZvs&list=RDo7c5LxzmZvs&index=1"
            className="px-8 py-3 border border-black text-black cursor-pointer hover:text-white hover:border-primary transition font-medium hover:bg-primary"
          >
            View All Works
          </Link>
        </div>
      </div>
    </section>
  );
}
