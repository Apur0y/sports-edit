export function PortfolioSection() {
const projects = new Array(6).fill(0).map((_, i) => ({
id: i,
sport: ['Soccer', 'Basketball', 'Football', 'Tennis', 'Padel', 'Volleyball'][i % 6],
length: `${45 + i * 10}s`,
}))


return (
<section id="portfolio" className="py-16">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-extrabold mb-6">Portfolio</h2>
<p className="text-gray-600 mb-8">Selected edits across different sports — click to preview.</p>


<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{projects.map((p) => (
<div key={p.id} className="relative rounded-lg overflow-hidden border">
<div className="h-44 bg-gray-200 flex items-center justify-center">
<span className="text-gray-500">Thumbnail — {p.sport}</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<h3 className="font-semibold">{p.sport} Highlight</h3>
<p className="text-sm text-gray-500">Length: {p.length}</p>
</div>
<button className="px-3 py-1 border rounded">Preview</button>
</div>
</div>
</div>
))}
</div>
</div>
</section>
)
}