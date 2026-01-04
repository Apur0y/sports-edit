// components/SportsOptions.tsx
import {
  FaFutbol,
  FaBasketballBall,
  FaGolfBall,
  FaFootballBall,
} from "react-icons/fa";
import { GiBugNet } from "react-icons/gi";
import { PiPersonSimpleBikeBold } from "react-icons/pi";

const sports = [
  {
    name: "Soccer",
    icon: <FaFutbol />,
    image:
      "https://images.pexels.com/photos/50713/football-ball-sport-soccer-50713.jpeg?auto=compress&cs=tinysrgb&w=300",
    hoverImage:
      "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Basketball",
    icon: <FaBasketballBall />,
    image:
      "https://images.pexels.com/photos/5275003/pexels-photo-5275003.jpeg?auto=compress&cs=tinysrgb&w=300",
    hoverImage:
      "https://images.pexels.com/photos/110376/pexels-photo-110376.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Golf",
    icon: <FaGolfBall />,
    image:
      "https://images.pexels.com/photos/1325662/pexels-photo-1325662.jpeg?auto=compress&cs=tinysrgb&w=300",
    hoverImage:
      "https://images.pexels.com/photos/1318501/pexels-photo-1318501.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Rugby",
    icon: <FaFootballBall />,
    image:
      "https://images.pexels.com/photos/2207/red-people-outside-sport.jpg?auto=compress&cs=tinysrgb&w=300",
    hoverImage:
      "https://images.pexels.com/photos/209928/pexels-photo-209928.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Lacrosse",
    icon: <GiBugNet />,
    image:
      "https://cdn.pixabay.com/photo/2018/05/28/22/45/lacrosse-3437409_1280.jpg",
    hoverImage:
      "/lac2.jpg",
  },
  {
    name: "Racing",
    icon: <PiPersonSimpleBikeBold />,
    image:
      "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=300",
    hoverImage:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export default function SportsOptions() {
  return (
    <div className="h-screen flex items-center justify-center">
      <section className="grid grid-cols-3 grid-rows-2 w-full h-full bg-[#0d1117] text-white">
        {sports.map((s) => (
          <div
            key={s.name}
            className="relative group h-full cursor-pointer"
          >
            {/* Default Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover opacity-30 transition-opacity duration-300"
              style={{ backgroundImage: `url(${s.image})` }}
            ></div>

            {/* Hover Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundImage: `url(${s.hoverImage})` }}
            ></div>

            {/* Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3 overflow-hidden">
              {/* Icon */}
              <div className="text-5xl mb-1 transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:opacity-0">
                {s.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl uppercase font-semibold transition-all duration-500 ease-in-out group-hover:translate-y-10 group-hover:opacity-0">
                {s.name}
              </h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
