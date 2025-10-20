"use client";
import React from "react";
import ComponentHeader from "../Reuseable/Header";

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
    <section className="w-full container py-32 bg-white text-black ">
      <div className="container mx-auto px-4 text-center">
        <ComponentHeader title="Works Gallery" text="Check out top works"/>
        {/* Sports Filter Buttons */}
        {/* <div className="flex flex-wrap justify-start gap-3 my-10">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300
              ${
                selectedSport === sport
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {sport}
            </button>
          ))}
        </div> */}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
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
              <div className="px-4 py-2 text-left">
                <h3 className="text-md font-semibold text-nowrap">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{video.sport}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <button className="px-8 py-3 border border-black text-black cursor-pointer hover:text-white hover:border-primary transition  font-medium hover:bg-primary">
            View All Works
          </button>
        </div>
      </div>
    </section>
  );
}
