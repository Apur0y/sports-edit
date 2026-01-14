import React, { useState } from "react";
import { Effect } from "../CumtomizePackages";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import Image from "next/image";

interface EffectSelectorProps {
  selectedEffects: Effect[];
  onToggle: (effect: Effect) => void;
}

const effects: Effect[] = [
  { id: "circle", name: "Circle Highlight", price: 2 },
  { id: "spotlight", name: "Spotlight", price: 3 },
  { id: "motion", name: "Motion Circle", price: 2 },
  { id: "shadow", name: "Shadow", price: 2 },
  { id: "arrow", name: "Arrow", price: 2 },
];

const effectIcons = {
  circle: (
    <Image
      src="/circle.png"
      alt="Motion"
      width={500}
      height={400}
      className="object-contain rounded-md"
    />
  ),
  spotlight: (
    <Image
      src="/lac3.jpg"
      alt="Motion"
      width={500}
      height={400}
      className="object-contain rounded-md"
    />
  ),
  motion: (
    <Image
      src="/motion.png"
      alt="Motion"
      width={500}
      height={400}
      className="object-contain rounded-md"
    />
  ),
  shadow: (
    <video
      src="/Arrowv.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-60 object-contain rounded-md"
    />
  ),

  arrow: (
    <Image
      src="/arrow.png"
      alt="Motion"
      width={500}
      height={400}
      className="object-contain rounded-md"
    />
  ),
};

export function EffectSelector({
  selectedEffects,
  onToggle,
}: EffectSelectorProps) {
  const [previewEffect, setPreviewEffect] = useState<string | null>(effects[0].id);

  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Video Effects
        </h2>
        <p className="text-slate-600">
          Select visual effects to enhance your videos
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Effect Grid */}
        <div className="lg:w-96">
          <div className="flex flex-col  gap-4">
            {effects.map((effect) => {
             
              const isSelected = selectedEffects[0]?.id === effect.id;

              return (
                <button
                  key={effect.id}
                  onClick={() => {
                    onToggle(effect);
                    setPreviewEffect(effect.id);
                  }}
                  // onMouseDown={() => setPreviewEffect(effect.id)}
                  // onMouseLeave={() => setPreviewEffect(selectedEffects[0]?.id)}
                  className={`relative p-2  border transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-100"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )} */}
                  {isSelected ? (
                    <MdOutlineRadioButtonChecked className="text-black" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked />
                  )}
                  <div className="flex  items-center text-center gap-3">
                    {/* <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        isSelected
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div> */}
                    <div className="font-semibold text-sm text-slate-900 ">
                      {effect.name}
                    </div>
                    {/* <div className="text-cyan-600 font-bold text-sm">
                      +${effect.price}/clip
                    </div> */}
                    {effect.price && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-green-200 text-cyan-800"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        ${effect.price}/per clip
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Preview Area */}
        {previewEffect && (
          <div className="flex-1 bg-primary  rounded-xl p-1 flex items-center justify-center animate-in fade-in slide-in-from-right-2 duration-300">
            {effectIcons[previewEffect as keyof typeof effectIcons]}
            <div className="text-center">
              {/* 
              <p className="text-white font-semibold">
                {effects.find((e) => e.id === previewEffect)?.name}
              </p>
              <p className="text-slate-400 text-sm mt-1">Effect Preview</p> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
