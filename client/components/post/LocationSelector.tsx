import { MapPin, Navigation2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const locations = [
  { id: "me", label: "Map Me", icon: Navigation2 },
  { id: "local", label: "Local", icon: null },
  { id: "pearl", label: "The Pearl", icon: null },
  { id: "westbay", label: "West Bay", icon: null },
  { id: "msheireb", label: "Msheireb", icon: null },
  { id: "education", label: "Education City", icon: null },
  { id: "aspire", label: "Aspire Zone", icon: null },
];

export default function LocationSelector() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-coral font-bold text-lg">2.</span>
        <label className="text-sm font-semibold text-slate-900">
          Where is this happening?
        </label>
      </div>

      {/* Search input */}
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input
          type="text"
          placeholder="Search for a place, neighborhood, or area"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent bg-white"
        />
      </div>

      {/* Quick location buttons */}
      <div className="flex gap-2 flex-wrap pt-2">
        {locations.map((location) => {
          const Icon = location.icon;
          const isSelected = selectedLocation === location.id;

          return (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium text-xs transition-all border",
                isSelected
                  ? "bg-coral text-white border-coral"
                  : "border-slate-300 text-slate-700 hover:border-coral hover:text-coral bg-white"
              )}
            >
              {Icon && <Icon size={14} />}
              {location.label}
            </button>
          );
        })}
      </div>

      {/* Map preview */}
      <div className="mt-4 w-full h-48 rounded-lg border border-slate-200 bg-blue-50 overflow-hidden relative">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-post" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-post)" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
          <div className="text-slate-400 space-y-2">
            <MapPin size={32} className="mx-auto opacity-30" />
            <p className="text-xs font-medium opacity-50">Map Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}
