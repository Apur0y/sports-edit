import React from 'react';
import { RotateCcw } from 'lucide-react';
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';

interface RevisionSelectorProps {
  selectedRevisions: 1 | 3 | 5;
  onSelect: (revisions: 1 | 3 | 5) => void;
}

export function RevisionSelector({ selectedRevisions, onSelect }: RevisionSelectorProps) {
  const options = [
    { value: 1 as const, label: '1 Revision', tag: '+0$' },
    { value: 3 as const, label: '3 Revisions',tag: '+10$' },
    { value: 5 as const, label: '5 Revisions', tag: '+20$' },
  ];

  return (
    <section className=" p-8 ">
      <div className="mb-6 flex items-center gap-3">
       
        <div>
          <h2 className="font-bold text-slate-900">Number of Revisions</h2>
                    <p className="text-slate-600 text-sm">Select visual effects to enhance your videos</p>

     
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const isSelected = selectedRevisions === option.value;

          return (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={`p-2 border transition-all duration-200 cursor-pointer text-slate-900  ${
                isSelected
                  ? 'border-orange-500 bg-orange-50 shadow-lg  shadow-orange-100'
                  : 'border-gray-100 bg-white  hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-2">
                    { isSelected?<MdOutlineRadioButtonChecked className='text-black' />: <MdOutlineRadioButtonUnchecked /> } <span className="">{option.label}</span>
                {option.tag && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-green-200 text-cyan-800'
                        : option.tag === 'Premium'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {option.tag}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
