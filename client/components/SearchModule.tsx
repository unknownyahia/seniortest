import { Search, MapPin } from "lucide-react";
import { useState } from "react";

export default function SearchModule() {
  const [searchWhat, setSearchWhat] = useState("");
  const [searchWhere, setSearchWhere] = useState("");

  return (
    <section className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-6">
            {/* What are you looking for */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-900">
                What are you looking for?
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Coffee, study spots, events, ..."
                  value={searchWhat}
                  onChange={(e) => setSearchWhat(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                />
              </div>
            </div>

            {/* Where in Qatar */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-900">
                Where in Qatar?
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="City, area, or landmark"
                  value={searchWhere}
                  onChange={(e) => setSearchWhere(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <button className="flex-1 bg-coral hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Search size={18} />
              Search
            </button>
            <button className="flex-1 border-2 border-coral text-coral hover:bg-coral-50 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Open Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
