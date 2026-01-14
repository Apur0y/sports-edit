import React from 'react';
import { Clock, Zap, Rocket } from 'lucide-react';
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';

interface DeliverySelectorProps {
  selectedDays: 5 | 2 | 1;
  onSelect: (days: 5 | 2 | 1) => void;
}

export function DeliverySelector({ selectedDays, onSelect }: DeliverySelectorProps) {
  const options = [
    {
      days: 5 as const,
      label: 'Regular',
      time: '5 Days',
      icon: Clock,
      color: 'slate',
    },
    {
      days: 2 as const,
      label: 'Fast',
      time: '2 Days',
      icon: Zap,
      color: 'blue',
    },
    {
      days: 1 as const,
      label: 'Express',
      time: '24 Hours',
      icon: Rocket,
      color: 'orange',
      badge: 'Urgent',
    },
  ];

  return (
    <section className=" p-8   ">
      <div className="mb-6">
        <h2 className="font-bold text-slate-900 mb-2">Delivery Speed</h2>
                  <p className="text-slate-600 text-sm">Select visual effects to enhance your videos</p>

      </div>

      <div className=" flex flex-col gap-3">
        {options.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedDays === option.days;

          return (
            <button
              key={option.days}
              onClick={() => onSelect(option.days)}
              className={`relative p-1  border  transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-orange-500 bg-orange-50 shadow-lg  shadow-orange-100'
                  : 'border-gray-100 bg-white hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {/* {option.badge && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {option.badge}
                </div>
              )} */}
              <div className="flex gap-3 items-center text-center">
                <div
                
                >
                               { isSelected?<MdOutlineRadioButtonChecked className='text-black' />: <MdOutlineRadioButtonUnchecked /> }
                 
                </div>

                <div className='flex items-center gap-2'>
                <div className=" text-slate-900 mb-1">{option.label}</div>
                <div className="text-sm  text-slate-500">{option.time}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
