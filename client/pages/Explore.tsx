import Navigation from "@/components/Navigation";

export default function Explore() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeTab="explore" />
      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Explore</h1>
          <p className="text-slate-600 text-lg mb-6">
            Browse all spots in Qatar
          </p>
          <p className="text-slate-500 text-base">
            Continue building out this page by asking me to implement the explore functionality.
          </p>
        </section>
      </main>
    </div>
  );
}
