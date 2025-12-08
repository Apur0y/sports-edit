"use client"
import { useState } from "react"

export function FAQSection() {
const faqs = [
{ q: 'How long is delivery?', a: 'Standard delivery is 48 hours. Rush delivery available.' },
{ q: 'Can you focus on one player?', a: 'Yes — tell us the jersey number and timestamps if available.' },
{ q: 'What footage formats do you accept?', a: 'MP4, MOV, GoPro files, and raw camera footage via cloud links.' },
]
const [open, setOpen] = useState(null)


return (
<section id="faq" className="py-16">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-extrabold mb-6">FAQ</h2>
<div className="space-y-4 max-w-3xl">
{faqs.map((f, i) => (
<div key={f.q} className="border rounded-lg overflow-hidden">
<button
onClick={() => setOpen(open === i ? null : i)}
className="w-full text-left px-4 py-3 flex items-center justify-between"
>
<span className="font-medium">{f.q}</span>
<span className="text-gray-500">{open === i ? '−' : '+'}</span>
</button>
<div className={`px-4 pb-4 ${open === i ? 'block' : 'hidden'}`}>
<p className="text-gray-600">{f.a}</p>
</div>
</div>
))}
</div>
</div>
</section>
)
}