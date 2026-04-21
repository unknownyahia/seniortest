import { MapPin, Compass, ZoomIn, ZoomOut } from "lucide-react";

const mapPins = [
  { id: 1, name: "Lusail", x: "65%", y: "45%", color: "bg-coral" },
  { id: 2, name: "West Bay", x: "72%", y: "52%", color: "bg-orange-500" },
  { id: 3, name: "The Pearl", x: "70%", y: "38%", color: "bg-orange-500" },
  { id: 4, name: "Education City", x: "45%", y: "62%", color: "bg-orange-500" },
  { id: 5, name: "Msheireb", x: "55%", y: "48%", color: "bg-orange-500" },
  { id: 6, name: "Doha", x: "58%", y: "52%", color: "bg-orange-500" },
  { id: 7, name: "Aspire Zone", x: "50%", y: "65%", color: "bg-orange-500" },
];

export default function MapView() {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-slate-200 bg-blue-50">
      {/* Map background (placeholder) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
        {/* Simple map-like pattern */}
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        {/* Decorative text */}
        <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
          <div className="text-slate-400 space-y-2">
            <MapPin size={48} className="mx-auto opacity-20" />
            <p className="text-sm font-medium opacity-40">Map View</p>
          </div>
        </div>
      </div>

      {/* Location pins */}
      {mapPins.map((pin) => (
        <div
          key={pin.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
          style={{ left: pin.x, top: pin.y }}
        >
          {/* Pin circle */}
          <div className={`w-8 h-8 ${pin.color} rounded-full border-2 border-white shadow-lg flex items-center justify-center transform group-hover:scale-125 transition-transform`}>
            <MapPin size={16} className="text-white" fill="white" />
          </div>

          {/* Tooltip on hover */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {pin.name}
          </div>
        </div>
      ))}

      {/* Map controls */}
      <div className="absolute right-4 top-4 flex flex-col gap-2 z-20">
        <button className="p-2 bg-white rounded-lg border border-slate-200 hover:border-coral hover:text-coral transition-colors text-slate-700 shadow-sm">
          <Compass size={18} />
        </button>
        <button className="p-2 bg-white rounded-lg border border-slate-200 hover:border-coral hover:text-coral transition-colors text-slate-700 shadow-sm">
          <ZoomIn size={18} />
        </button>
        <button className="p-2 bg-white rounded-lg border border-slate-200 hover:border-coral hover:text-coral transition-colors text-slate-700 shadow-sm">
          <ZoomOut size={18} />
        </button>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-slate-500 bg-white bg-opacity-80 px-2 py-1 rounded">
        © Mapbox © OpenStreetMap
      </div>
    </div>
  );
}
