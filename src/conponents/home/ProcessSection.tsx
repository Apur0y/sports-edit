export function ProcessSection() {
const steps = [
{ id: 1, title: 'Upload Footage', desc: 'Share your footage via Google Drive or Dropbox.' },
{ id: 2, title: 'Mark Player', desc: 'Tell us the player number(s) and timestamp if any.' },
{ id: 3, title: 'Edit & Review', desc: 'We edit and send a draft for your review.' },
{ id: 4, title: 'Delivery', desc: 'Final HD/4K delivery and optional social cuts.' },
]


return (
<section id="process" className="py-16">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-extrabold mb-6">How It Works</h2>
<div className="space-y-6">
{steps.map((s, idx) => (
<div key={s.id} className={`flex items-start gap-4 ${idx % 2 ? 'md:flex-row-reverse' : ''}`}>
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center font-bold">{s.id}</div>
<div>
<h3 className="font-semibold">{s.title}</h3>
<p className="text-gray-600">{s.desc}</p>
</div>
</div>
))}
</div>
</div>
</section>
)
}