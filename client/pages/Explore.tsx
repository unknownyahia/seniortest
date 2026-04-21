import { useState } from "react";
import Navigation from "@/components/Navigation";
import ExploreSearchBar from "@/components/explore/ExploreSearchBar";
import FilterBar from "@/components/explore/FilterBar";
import ResultsHeader from "@/components/explore/ResultsHeader";
import ResultsList from "@/components/explore/ResultsList";
import MapView from "@/components/explore/MapView";

export default function Explore() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeTab="explore" />

      <main className="bg-white">
        {/* Search Section */}
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <ExploreSearchBar />
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <FilterBar />
          </div>
        </section>

        {/* Results Section */}
        <section className="flex-1">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <ResultsHeader onViewChange={setViewMode} />
          </div>

          {/* List/Map Layout */}
          <div className="mx-auto max-w-7xl px-6 pb-8">
            {viewMode === "list" ? (
              <ResultsList />
            ) : (
              <div className="h-96">
                <MapView />
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
