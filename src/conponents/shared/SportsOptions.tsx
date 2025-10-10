// components/SportsOptions.tsx
import { FaFutbol, FaBasketballBall, FaGolfBall, FaFootballBall } from "react-icons/fa";

const sports = [
  { name: "Soccer", icon: <FaFutbol /> },
  { name: "Basketball", icon: <FaBasketballBall /> },
  { name: "Golf", icon: <FaGolfBall /> },
  { name: "Rugby", icon: <FaFootballBall /> },
];

export default function SportsOptions() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 bg-[#0d1117] text-white w-f">
      {sports.map((s) => (
        <div key={s.name} className="flex flex-col items-center justify-center p-6 bg-[#161b22] rounded-xl hover:bg-[#1f2937] cursor-pointer transition">
          <div className="text-4xl mb-2">{s.icon}</div>
          <h3 className="text-lg font-semibold">{s.name}</h3>
        </div>
      ))}
    </section>
  );
}
