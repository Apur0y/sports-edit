export function PricingSection() {
const plans = [
{ name: 'Basic', price: '$49', bullets: ['30-45s', '10 clips', '1 revision'] },
{ name: 'Standard', price: '$99', bullets: ['60-90s', '20 clips', '2 revisions', 'Nameplate'] },
{ name: 'Premium', price: '$179', bullets: ['2-4min', 'Full scouting', 'Custom motion graphics'] },
]


return (
<section id="pricing" className="py-16 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-extrabold mb-6">Pricing</h2>
<p className="text-gray-600 mb-8">Transparent pricing — need a custom package? Contact us.</p>


<div className="grid gap-6 md:grid-cols-3">
{plans.map((p) => (
<div key={p.name} className="p-6 rounded-2xl bg-white border shadow-sm">
<h3 className="text-xl font-bold">{p.name}</h3>
<div className="text-3xl font-extrabold mt-4">{p.price}</div>
<ul className="mt-4 space-y-2 text-gray-600">
{p.bullets.map((b) => (
<li key={b} className="flex items-center">
<span className="mr-2">•</span>
<span>{b}</span>
</li>
))}
</ul>
<button className="mt-6 w-full py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg">Order {p.name}</button>
</div>
))}
</div>
</div>
</section>
)
}