import React, { useState } from 'react';
import { Circle, Sparkles, Target, Droplet, ArrowRight, Check } from 'lucide-react';
import { Effect } from '../CumtomizePackages';


interface EffectSelectorProps {
  selectedEffects: Effect[];
  onToggle: (effect: Effect) => void;
}

const effects: Effect[] = [
  { id: 'circle', name: 'Circle Highlight', price: 2 },
  { id: 'spotlight', name: 'Spotlight', price: 3 },
  { id: 'motion', name: 'Motion Circle', price: 2 },
  { id: 'shadow', name: 'Shadow', price: 2 },
  { id: 'arrow', name: 'Arrow', price: 2 },
];

const effectIcons = {
  circle: Circle,
  spotlight: Target,
  motion: Sparkles,
  shadow: Droplet,
  arrow: ArrowRight,
};

export function EffectSelector({ selectedEffects, onToggle }: EffectSelectorProps) {
  const [previewEffect, setPreviewEffect] = useState<string | null>("circle");

  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Video Effects</h2>
        <p className="text-slate-600">Select visual effects to enhance your videos</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Effect Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {effects.map((effect) => {
              const Icon = effectIcons[effect.id as keyof typeof effectIcons];
             const isSelected = selectedEffects[0]?.id === effect.id;

              return (
                <button
                  key={effect.id}
                  onClick={() => onToggle(effect)}
                  onMouseEnter={() => setPreviewEffect(effect.id)}
                  
                  className={`relative p-5 rounded-xl border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-50 shadow-lg shadow-cyan-100'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        isSelected
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-sm text-slate-900 mb-1">
                      {effect.name}
                    </div>
                    <div className="text-cyan-600 font-bold text-sm">
                      +${effect.price}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Preview Area */}
        {previewEffect && (
          <div className="lg:w-64 bg-slate-900 rounded-xl p-6 flex items-center justify-center animate-in fade-in slide-in-from-right-2 duration-300">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center mx-auto">
                {React.createElement(
                  effectIcons[previewEffect as keyof typeof effectIcons],
                  { className: 'w-16 h-16 text-white' }
                )}
              </div>
              <p className="text-white font-semibold">
                {effects.find((e) => e.id === previewEffect)?.name}
              </p>
              <p className="text-slate-400 text-sm mt-1">Effect Preview</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}