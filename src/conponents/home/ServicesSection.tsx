import ComponentHeader from "../Reuseable/Header"

export function ServicesSection() {
const services = [
{ title: 'Highlight Editing', desc: 'Fast, clean highlight reels that showcase the athlete\'s best moments.', icon: '⚡' },
{ title: 'Recruiting Videos', desc: 'Recruiting-ready edits with stats, nameplate and coach-friendly pacing.', icon: '🎯' },
{ title: 'Social Reels', desc: 'Short-form, vertical edits optimized for Instagram & TikTok.', icon: '🎬' },
]


return (
<section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50 text-black">
<div className="container mx-auto px-6">
        <ComponentHeader title="Pick a Service" text="That fits your needs" />



<div className="grid gap-6 md:grid-cols-3">
{services.map((s) => (
<div key={s.title} className="p-6 border rounded-xl hover:shadow-lg transition">
<div className="text-4xl mb-4">{s.icon}</div>
<h3 className="text-xl font-semibold">{s.title}</h3>
<p className=" mt-2">{s.desc}</p>
<button className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg">View Sample</button>
</div>
))}
</div>
</div>
</section>
)
}