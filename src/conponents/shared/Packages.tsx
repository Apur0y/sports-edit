import { FaStar } from "react-icons/fa";

export default function Packages() {
  const packages = [
    { 
      name: "Basic", 
      price: "$50", 
      desc: "Short highlight reel (1–2 min)", 
      features: ["High-quality editing", "Simple transitions", "Quick delivery"], 
      popular: false 
    },
    { 
      name: "Standard", 
      price: "$100", 
      desc: "Full game highlights (3–5 min)", 
      features: ["All Basic features", "Advanced effects", "Intro & outro included"], 
      popular: true 
    },
    { 
      name: "Premium", 
      price: "$150", 
      desc: "Full edit with effects and intro", 
      features: ["All Standard features", "Custom animations", "Priority support"], 
      popular: false 
    },
  ];

  return (
    <section id="packages" className="py-20 bg-emerald-950/20 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Packages</h2>

      <div className="flex flex-wrap justify-center gap-10">
        {packages.map((pkg) => (
          <div 
            key={pkg.name} 
            className={`relative w-72 md:w-80 bg-gray-900 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105`}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                <FaStar /> Popular
              </div>
            )}

            <div className="p-8 flex flex-col gap-4">
              <h3 className="text-2xl font-bold">{pkg.name}</h3>
              <p className="text-gray-300">{pkg.desc}</p>

              <ul className="flex flex-col gap-2 mt-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-400 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <p className="text-3xl font-extrabold mt-6">{pkg.price}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
