"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ComponentHeader from "../Reuseable/Header";
import PackageCard from "../shared/PlanCard";


export default function Packages() {
  const router = useRouter();
  
const user ="Apu"
  // Static package data
  const packages = [
    {
      name: "Basic",
      price: "$50",
      desc: "Short highlight reel (1–2 min)",
      features: ["High-quality editing", "Simple transitions", "Quick delivery"],
      popular: false,
    },
    {
      name: "Standard",
      price: "$100",
      desc: "Full game highlights (3–5 min)",
      features: ["All Basic features", "Advanced effects", "Intro & outro included"],
      popular: true,
    },
    {
      name: "Premium",
      price: "$150",
      desc: "Full edit with effects and intro",
      features: ["All Standard features", "Custom animations", "Priority support"],
      popular: false,
    },
  ];

  const handleClick = (planName: string) => {
    if (!user) {
      router.push("/signIn");
      return;
    }

    // You can modify this to go to checkout or another page
    router.push(`/checkout/${planName}`);
  };

  return (
    <div className="bg-emerald-950/20 py-20 text-white">
     
        <ComponentHeader
          title="Our Packages"
          text="Choose the Right Plan for Your Needs."
        />

        <div className="flex justify-center flex-wrap mt-12 gap-10">
          {packages.map((pkg, idx) => (
            <PackageCard
              key={idx}
              price={pkg.price}
              planType={pkg.popular ? "Popular" : ""}
              packageName={pkg.name}
              permissions={pkg.features}
              // buttonText={user?.data?.planName === pkg.name ? "Active" : "Choose Plan"}
              onButtonClick={() => handleClick(pkg.name)}
            />
          ))}
        </div>

    </div>
  );
}
