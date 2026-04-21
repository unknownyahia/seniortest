import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SearchModule from "@/components/SearchModule";
import CategoryPills from "@/components/CategoryPills";
import ForYouShelf from "@/components/ForYouShelf";
import TrendingNearby from "@/components/TrendingNearby";
import PopularEvents from "@/components/PopularEvents";
import SavedSpotsUpdates from "@/components/SavedSpotsUpdates";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navigation activeTab="home" />

      {/* Main content */}
      <main className="bg-white">
        {/* Hero Section */}
        <HeroSection />

        {/* Search Module */}
        <SearchModule />

        {/* Category Pills */}
        <CategoryPills />

        {/* For You Shelf */}
        <ForYouShelf />

        {/* Three Column Section */}
        <section className="bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-3 gap-8">
              <TrendingNearby />
              <PopularEvents />
              <SavedSpotsUpdates />
            </div>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="bg-white border-t border-slate-200 py-12">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-slate-500 text-sm">
              © 2024 Spots. Discover Qatar, one great spot at a time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
