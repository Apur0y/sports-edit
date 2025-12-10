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

export function PortfolioSection() {
 

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-6">Portfolio</h2>
        <p className="text-gray-600 mb-8">
          Selected edits across different sports — click to preview.
        </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {videos.map((video) => {

    return (
      <div key={video.id} className="rounded-lg overflow-hidden border">
        {/* Thumbnail */}
        <div className="aspect-video bg-gray-200">
          <iframe
                  src={video.videoUrl}
                  title={video.title}
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
        </div>

        {/* Info */}
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
    );
  })}
</div>


      </div>
    </section>
  );
}
