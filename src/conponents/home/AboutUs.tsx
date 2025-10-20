import Image from 'next/image';
import TestimonialsSection from './Review';
interface Owner {
  name: string;
  title: string;
  message: string;
  imageUrl: string;
}
const owners: Owner[] = [
  {
    name: 'Nayan',
    title: 'Video Editor',
    message:
      "Our mission is to empower communities through innovative solutions and strong partnerships. We're proud of the journey so far and excited for what's ahead.",
    imageUrl: '/noyan.png',
  },
  {
    name: 'Apu Roy',
    title: 'Video Editor',
    message:
      "Technology drives everything we do, but it's the people who make it matter. We’re building something meaningful — together.",
    imageUrl: '/apu-roy.png',
  },
];


export default function AboutUs() {
  return (
    <div className=" bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/multisports.png')" }}>
      <div className="h-full w-full flex items-center justify-center bg-black/70 text-white pt-32">
          <div className="max-w-6xl mx-auto text-center text-white">
          <div className="grid gap-10 md:grid-cols-2">
            {owners.map((owner, index) => (
              <div key={index} className="bg-primary/20 bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                    <Image
                      src={owner.imageUrl}
                      alt={owner.name}
                      height={300}
                      width={300}
                      
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{owner.name}</h3>
                  <p className="text-sm  italic mb-4">{owner.title}</p>
                  <p className="">{owner.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center bg-black/70 text-white pb-32">
      <TestimonialsSection/>
      </div>
    </div>
  );
}
