import React from "react";
import { 
  FaVideo, 
  FaTrophy, 
  FaBolt, 
  FaFootballBall, 
  FaPlayCircle, 
  FaStar 
} from 'react-icons/fa';
import ComponentHeader from "../Reuseable/Header";
import Container from "../shared/Container";

const cardData = [
  {
    icon: <FaVideo className="text-4xl text-blue-500" />,
    title: "Professional Editing",
    description: "Transform raw game footage into polished highlight reels that capture coaches' attention in seconds."
  },
  {
    icon: <FaTrophy className="text-4xl text-purple-500" />,
    title: "Recruiting-Focused",
    description: "Videos optimized for college recruitment with your best plays showcased first to maximize impact."
  },
  {
    icon: <FaBolt className="text-4xl text-green-500" />,
    title: "Fast Turnaround",
    description: "Get your highlight reel delivered in 24-72 hours. Rush delivery available for urgent deadlines."
  },
  {
    icon: <FaFootballBall className="text-4xl text-orange-500" />,
    title: "All Sports Covered",
    description: "Expert editing for football, basketball, soccer, volleyball, lacrosse, and all major sports."
  },
  {
    icon: <FaPlayCircle className="text-4xl text-red-500" />,
    title: "Hudl & Veo Ready",
    description: "Seamlessly work with footage from Hudl, Veo, or any recording source you provide."
  },
  {
    icon: <FaStar className="text-4xl text-cyan-500" />,
    title: "Unlimited Revisions",
    description: "We'll perfect your video together until you're 100% satisfied and ready to send to coaches."
  }
];
export default function ChooseUs() {
  return (
    <Container className="mx-auto">   
    <section className="relative py-20 overflow-hidden ">
      {/* Background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
       */}
     
        <div className="relative z-10 container mx-auto">

           <ComponentHeader title="Why Choose Us" />
         
      

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container with animation */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center p-4 bg-blue-50 group-hover:bg-white rounded-2xl transition-all duration-500 group-hover:scale-110">
                    {card.icon}
                  </div>
                  <div className="absolute -inset-4 bg-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 group-hover:scale-110 transition-all duration-500"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative">
                  {card.description}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

        
        </div>
   
    </section>
     </Container>
  );
}