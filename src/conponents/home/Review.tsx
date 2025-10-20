import Link from "next/link";
import { FC } from "react";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  rating: number;
  comment: string;
  name: string;
  company: string;
  date: string;
}

const leftColumnReviews: Testimonial[] = [
  {
    rating: 5,
    comment: "Their strategic input changed our approach to digital entirely.",
    name: "Alice Morgan",
    company: "Visionary Ltd.",
    date: "Oct 2, 2025",
  },
  {
    rating: 4,
    comment: "Excellent turnaround and support — will definitely come back.",
    name: "James Carter",
    company: "BrightCode Inc.",
    date: "Sep 14, 2025",
  },
  {
    rating: 5,
    comment: "Their creativity and commitment were beyond expectations.",
    name: "Nina Patel",
    company: "SparkX",
    date: "Aug 30, 2025",
  },
  {
    rating: 5,
    comment:
      "Our collaboration was smooth and results-driven. Highly recommend!",
    name: "Daniel Kim",
    company: "NextPath",
    date: "Aug 21, 2025",
  },
  {
    rating: 4,
    comment: "Solid work and great people to work with throughout the process.",
    name: "Lana Torres",
    company: "GrowLabs",
    date: "Jul 12, 2025",
  },
];

const rightColumnReviews: Testimonial[] = [
  {
    rating: 5,
    comment:
      "Our collaboration was smooth and results-driven. Highly recommend!",
    name: "Daniel Kim",
    company: "NextPath",
    date: "Aug 21, 2025",
  },
  {
    rating: 4,
    comment: "Solid work and great people to work with throughout the process.",
    name: "Lana Torres",
    company: "GrowLabs",
    date: "Jul 12, 2025",
  },
  {
    rating: 5,
    comment: "Their strategic input changed our approach to digital entirely.",
    name: "Alice Morgan",
    company: "Visionary Ltd.",
    date: "Oct 2, 2025",
  },
  {
    rating: 4,
    comment: "Excellent turnaround and support — will definitely come back.",
    name: "James Carter",
    company: "BrightCode Inc.",
    date: "Sep 14, 2025",
  },
  {
    rating: 5,
    comment: "Their creativity and commitment were beyond expectations.",
    name: "Nina Patel",
    company: "SparkX",
    date: "Aug 30, 2025",
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className=" pt-12  px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6 overflow-y-auto max-h-[500px] pr-2 scroll-smooth scroll-p-4 relative">
            <div className="flex items-center justify-between bg-white sticky top-0 w-full px-4 py-3 shadow-md z-10">
              <h1 className="text-black text-2xl font-semibold">
                Noyan&apos;s Review
              </h1>
              <Link
                href="https://www.fiverr.com/nayan_1997?source=gig_cards&referrer_gig_slug=edit-your-player-recruiting-video-sports-highlight-video&ref_ctx_id=89425b285e39469593e76b38f3948fdd&imp_id=f8d17b6b-865d-4ee1-bf47-66bfd490effe"
                className="text-sm bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </Link>
            </div>
            {leftColumnReviews.map((review, index) => (
              <TestimonialCard key={index} testimonial={review} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 overflow-y-auto max-h-[500px] pl-2 scroll-smooth scroll-p-4">
            <div className="flex items-center justify-between bg-white sticky top-0 w-full px-4 py-3 shadow-md z-10">
              <h1 className="text-black text-2xl font-semibold">
                Apu&lsquo;s Review
              </h1>
              <Link
                href="https://www.fiverr.com/apuroy56?public_mode=true"
                className="text-sm bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </Link>
            </div>

            {rightColumnReviews.map((review, index) => (
              <TestimonialCard key={index} testimonial={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  const { rating, comment, name, company, date } = testimonial;

  return (
    <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      {/* Rating */}
      <div className="flex items-center mb-3 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "fill-current" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-700 italic mb-6">&quot;{comment}&quot;</p>

      {/* Footer: Name, Company, Date */}
      <div className="flex justify-between items-end text-sm text-gray-600">
        <div>
          <div className="font-semibold text-gray-800">{name}</div>
          <div>{company}</div>
        </div>
        <div>
          <h1>{"USA"}</h1>
          <div className="text-gray-400 text-right">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
