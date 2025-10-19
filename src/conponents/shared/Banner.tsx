"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css/navigation";
import { useState } from "react";
import {
  FaFutbol,
  FaBasketballBall,
  FaGolfBall,
  FaFootballBall,
} from "react-icons/fa";

export default function Banner() {
  const slides = [
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    "https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/rugby.jpg",
    "https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/swim-bg.jpg",
    "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
    "https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/para-surf.jpg",
  ];

  const sports = [
    { name: "Soccer", icon: <FaFutbol /> },
    { name: "Basketball", icon: <FaBasketballBall /> },
    { name: "Golf", icon: <FaGolfBall /> },
    { name: "Rugby", icon: <FaFootballBall /> },
  ];

  // Track current slide index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
        navigation={true}
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                className="object-cover transition-transform duration-[3s] scale-105 hover:scale-110"
              />

              {/* Zoom-out border animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`border-${activeIndex}`} // re-trigger on slide change
                  initial={{ scale: 1.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.6, opacity: 0 }} // zoom-out disappearance
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-10 border-4 border-white/50 rounded-2xl pointer-events-none"
                />
              </AnimatePresence>

              {/* Dark overlay */}
              {/* <div className="absolute inset-0 bg-black/40"></div> */}

              {/* Text animation */}
              <div className="absolute  flex flex-col items-center justify-center text-center text-white px-6 left-0 bottom-1/2 top-70">
                <motion.h1
                  key={`title-${activeIndex}`} // re-trigger animation per slide
                  initial={{ rotateX: 90, x: 100, opacity: 0 }} // start flipped & right-shifted
                  animate={{ rotateX: 0, x: 0, opacity: 1 }} // move into center & unflip
                  exit={{ rotateX: -90, x: -100, opacity: 0 }} // optional flip-out
                  transition={{
                    duration: 0.9,
                    delay: 1,
                    ease: "easeOut",
                  }}
                  style={{
                    transformOrigin: "center",
                    perspective: 1000,
                    backfaceVisibility: "hidden",
                  }}
                  className="text-6xl md:text-7xl font-bold tracking-wide uppercase"
                >
                  Make the Play <br />{" "}
                  <span className="text-blue-500">At Its Best</span>
                </motion.h1>

                <motion.p
                  key={`para-${activeIndex}`} // re-trigger paragraph animation
                  initial={{ y: 50, opacity: 0, scale: 0.9 }} // ⬅️ start slightly smaller
                  animate={{ y: 0, opacity: 1, scale: 1 }} // ⬅️ grow to normal size
                  transition={{ duration: 0.3, delay: 2 }}
                  className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
                >
                  Experience next-level sports highlights crafted with passion
                  and precision.
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sports category bar */}
      <div className="absolute bottom-0 w-full flex justify-around gap-4 bg-emerald-950/90 px-6 py-3">
        {sports.map((sport) => (
          <Link key={sport.name} href="/works-preview">
            <div className="flex items-center gap-3 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer">
              <div className="text-3xl text-white">{sport.icon}</div>
              <button className="text-start">
                <h1 className="text-lg font-semibold text-white">
                  {sport.name}
                </h1>
                <p className="text-sm text-gray-300">
                  Check out this sport’s video
                </p>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
