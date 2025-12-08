"use client"
import { useState } from "react"

export function TestimonialsSection() {
const list = [
{ id: 1, name: 'amahds_creation', text: 'Very good work. Apu fixed anything I wanted changed and he always did it within 24 hours most times 12hrs !! He also price matched an offer I received from another service. Great work Apu' },
{ id: 2, name: 'jeffeldridge (Parent)', text: 'This was an excellent project. Incredibly polished and even with complex edits and iterations, it was perfect at each step of the way. I am about to start my next project with Apu and cant recommend him more.' },
{ id: 3, name: 'Club Director', text: 'This was a great project and they were easy to work with.  Apu fixed anything I wanted changed and make the perfect video for me. We loved the video and we look forward to working together again' },
]
const [index, setIndex] = useState(0)


return (
<section id="testimonials" className=" ">
<div className="container mx-auto px-6 text-center">
<div className="max-w-2xl mx-auto">
<div className="p-6 bg-white rounded-xl shadow">
<p className="text-gray-700">“{list[index].text}”</p>
<div className="text-gray-700 mt-4 font-semibold">— {list[index].name}</div>
</div>


<div className="mt-4 flex items-center justify-center gap-3">
{list.map((_, i) => (
<button
key={i}
onClick={() => setIndex(i)}
className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
/>
))}
</div>
</div>
</div>
</section>
)
}