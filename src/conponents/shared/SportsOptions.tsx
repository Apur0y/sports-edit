// components/SportsOptions.tsx
import {
  FaFutbol,
  FaBasketballBall,
  FaGolfBall,
  FaFootballBall,
} from "react-icons/fa";

const sports = [
  {
    name: "Soccer",
    icon: <FaFutbol />,
    image:
      "https://images.pexels.com/photos/50713/football-ball-sport-soccer-50713.jpeg",
  },
  {
    name: "Basketball",
    icon: <FaBasketballBall />,
    image: "https://images.pexels.com/photos/5275003/pexels-photo-5275003.jpeg",
  },
  {
    name: "Golf",
    icon: <FaGolfBall />,
    image: "https://images.pexels.com/photos/1325662/pexels-photo-1325662.jpeg",
  },
  {
    name: "Rugby",
    icon: <FaFootballBall />,
    image: "https://images.pexels.com/photos/2207/red-people-outside-sport.jpg",
  },
  {
    name: "lacrosse",
    icon: <FaFootballBall />,
    image:
      "https://images.pexels.com/photos/159573/lacrosse-lax-lacrosse-game-game-159573.jpeg",
  },
  {
    name: "Racing",
    icon: <FaFootballBall />,
    image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg",
  },
];

export default function SportsOptions() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-6 bg-[#0d1117] text-white w-full ">
      {sports.map((s) => (
        <div
          key={s.name}
          className="relative group h-40 sm:h-48 cursor-pointer"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-cover opacity-30 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundImage: `url(${s.image})` }}
          ></div>

          {/* Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full  gap-3 overflow-hidden">
            {/* Icon */}
            <div className="text-3xl sm:text-5xl mb-1 transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:opacity-0">
              {s.icon}
            </div>

            {/* Name */}
            <h3 className="text-md sm:text-xl uppercase font-semibold transition-all duration-500 ease-in-out group-hover:translate-y-10 group-hover:opacity-0">
              {s.name}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
}
