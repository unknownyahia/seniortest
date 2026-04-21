export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                Discover Qatar,
              </h1>
              <h2 className="text-5xl font-bold text-coral leading-tight">
                one great spot at a time
              </h2>
            </div>
            <p className="text-slate-600 text-base leading-relaxed max-w-md">
              Local eats, study corners, outdoor escapes and live events. Find what matters near you.
            </p>
          </div>

          {/* Right image */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
              alt="Qatar waterfront"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
