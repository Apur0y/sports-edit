// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0d1117] text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="space-y-4 text-center">
        <p>📱 WhatsApp: +8801XXXXXXXXX</p>
        <p>🎥 Fiverr: <a href="https://fiverr.com/yourprofile" className="text-blue-400 underline">Visit Profile</a></p>
        <p>📸 Instagram: <a href="https://instagram.com/yourhandle" className="text-pink-400 underline">@yourhandle</a></p>
        <button className="bg-white text-black px-6 py-2 rounded-lg mt-4 hover:bg-gray-200">
          Book a Call
        </button>
      </div>
    </section>
  );
}
