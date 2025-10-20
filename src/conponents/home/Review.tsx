import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

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
    comment: 'Their strategic input changed our approach to digital entirely.',
    name: 'Alice Morgan',
    company: 'Visionary Ltd.',
    date: 'Oct 2, 2025',
  },
  {
    rating: 4,
    comment: 'Excellent turnaround and support — will definitely come back.',
    name: 'James Carter',
    company: 'BrightCode Inc.',
    date: 'Sep 14, 2025',
  },
  {
    rating: 5,
    comment: 'Their creativity and commitment were beyond expectations.',
    name: 'Nina Patel',
    company: 'SparkX',
    date: 'Aug 30, 2025',
  },
   {
    rating: 5,
    comment: 'Our collaboration was smooth and results-driven. Highly recommend!',
    name: 'Daniel Kim',
    company: 'NextPath',
    date: 'Aug 21, 2025',
  },
  {
    rating: 4,
    comment: 'Solid work and great people to work with throughout the process.',
    name: 'Lana Torres',
    company: 'GrowLabs',
    date: 'Jul 12, 2025',
  },
];

const rightColumnReviews: Testimonial[] = [
  {
    rating: 5,
    comment: 'Our collaboration was smooth and results-driven. Highly recommend!',
    name: 'Daniel Kim',
    company: 'NextPath',
    date: 'Aug 21, 2025',
  },
  {
    rating: 4,
    comment: 'Solid work and great people to work with throughout the process.',
    name: 'Lana Torres',
    company: 'GrowLabs',
    date: 'Jul 12, 2025',
  },
    {
    rating: 5,
    comment: 'Their strategic input changed our approach to digital entirely.',
    name: 'Alice Morgan',
    company: 'Visionary Ltd.',
    date: 'Oct 2, 2025',
  },
  {
    rating: 4,
    comment: 'Excellent turnaround and support — will definitely come back.',
    name: 'James Carter',
    company: 'BrightCode Inc.',
    date: 'Sep 14, 2025',
  },
  {
    rating: 5,
    comment: 'Their creativity and commitment were beyond expectations.',
    name: 'Nina Patel',
    company: 'SparkX',
    date: 'Aug 30, 2025',
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className="bg-gray-50 pt-12 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
      

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6 overflow-y-auto max-h-[500px] pr-2 scroll-smooth scroll-p-4">
            <h1 className='text-black text-2xl font-semibold'>Noyan's Review</h1>
            {leftColumnReviews.map((review, index) => (
              <TestimonialCard key={index} testimonial={review} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 overflow-y-auto max-h-[500px] pl-2 scroll-smooth scroll-p-4">
                        <h1 className='text-black text-2xl font-semibold'>Apu's Review</h1>

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
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      {/* Rating */}
      <div className="flex items-center mb-3 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className={i < rating ? 'fill-current' : 'text-gray-300'} />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-700 italic mb-6">"{comment}"</p>

      {/* Footer: Name, Company, Date */}
      <div className="flex justify-between items-end text-sm text-gray-600">
        <div>
          <div className="font-semibold text-gray-800">{name}</div>
          <div>{company}</div>
        </div>
        <div className="text-gray-400 text-right">{date}</div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
