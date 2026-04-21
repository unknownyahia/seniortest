import { Search, MapPin, Sliders } from "lucide-react";
import { useState } from "react";

export default function ExploreSearchBar() {
  const [searchWhat, setSearchWhat] = useState("Coffee, study spots, events, ...");
  const [searchWhere, setSearchWhere] = useState("Qatar City, or area");

  return (
    <div className="flex gap-3 items-end">
      {/* What field */}
      <div className="flex-1 space-y-1">
        <label className="block text-xs font-medium text-slate-700">What</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Coffee, study spots, events, ..."
            value={searchWhat}
            onChange={(e) => setSearchWhat(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* Where field */}
      <div className="flex-1 space-y-1">
        <label className="block text-xs font-medium text-slate-700">Where</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Qatar City, or area"
            value={searchWhere}
            onChange={(e) => setSearchWhere(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* Search button */}
      <button className="bg-coral hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 h-fit">
        <Search size={18} />
        Search
      </button>

      {/* Advanced filters button */}
      <button className="p-2.5 border border-slate-300 rounded-lg hover:border-coral hover:text-coral transition-colors text-slate-700 h-fit">
        <Sliders size={18} />
      </button>
    </div>
  );
}
