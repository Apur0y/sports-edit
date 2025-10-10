// components/Packages.tsx
export default function Packages() {
  const packages = [
    { name: "Basic", price: "$50", desc: "Short highlight reel (1–2 min)" },
    { name: "Standard", price: "$100", desc: "Full game highlights (3–5 min)" },
    { name: "Premium", price: "$150", desc: "Full edit with effects and intro" },
  ];
  
  return (
    <section id="packages" className="py-16 text-center bg-white">
      <h2 className="text-3xl font-bold mb-10">Our Packages</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {packages.map((pkg) => (
          <div key={pkg.name} className="w-64 bg-gray-100 p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{pkg.name}</h3>
            <p className="text-gray-700 mt-2">{pkg.desc}</p>
            <p className="text-2xl font-bold mt-4">{pkg.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
