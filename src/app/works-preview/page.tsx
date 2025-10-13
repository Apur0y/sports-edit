"use client";
import React, { useState } from "react";

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

export default function Page() {
  const [selectedSport, setSelectedSport] = useState("All");
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const sports = ["All", "Football", "Basketball", "Baseball"];
  const filteredVideos =
    selectedSport === "All"
      ? videos
      : videos.filter((v) => v.sport === selectedSport);

  return (
    <div className="w-full min-h-screen ">
      {/* Main Video Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* Left Side - Playing Video */}
        <div className="flex-1">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={currentVideo.videoUrl}
              title={currentVideo.title}
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold  mt-4">
            {currentVideo.title}
          </h2>
          <p className=" mt-1">{currentVideo.sport}</p>
        </div>

        {/* Right Side - Suggested Videos */}
        <div className="w-full lg:w-80 flex flex-col">
          {/* Filter Dropdown */}
          <div className="mb-4">
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2  focus:ring-2 focus:ring-blue-500"
            >
              {sports.map((sport) => (
                <option key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>
          </div>

          {/* Suggested Video List */}
          <div className="space-y-3 overflow-y-auto max-h-[70vh]">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setCurrentVideo(video)}
                className={`flex gap-3 items-center p-2 rounded-lg cursor-pointer transition ${
                  currentVideo.id === video.id
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-24 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium  line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs ">{video.sport}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Similar Works */}
      <div className="mt-12 border-t border-gray-200">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <h3 className="text-3xl font-bold  mb-8">
            Similar Works You May Like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(0, 3).map((video) => (
              <div
                key={video.id}
                onClick={() => setCurrentVideo(video)}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
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
                  <h4 className="text-lg font-semibold ">
                    {video.title}
                  </h4>
                  <p className="text-sm  mt-1">{video.sport}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
