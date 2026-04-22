import { Bookmark, MoreVertical } from "lucide-react";

const savedSpots = [
  {
    id: 1,
    title: "West Bay Evening Promenade",
    area: "West Bay",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    savedDate: "Saved 3d ago",
  },
  {
    id: 2,
    title: "Sahara Walk Coffee",
    area: "Coffee Shop • Al Sadd",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop",
    savedDate: "Saved 1w ago",
  },
  {
    id: 3,
    title: "Minaretein Study Lounge",
    area: "Study Lounge • Education City",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
    savedDate: "Saved 2w ago",
  },
];

export default function SavedSpots() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-900">Saved Spots</h2>
        <a href="/explore" className="text-coral hover:text-orange-600 font-medium text-xs">
          View all spots
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {savedSpots.map((spot) => (
          <div
            key={spot.id}
            className="group rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
              <img
                src={spot.image}
                alt={spot.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Bookmark size={16} className="fill-coral text-coral" />
              </button>
            </div>

            {/* Content */}
            <div className="p-3 space-y-2">
              <h3 className="font-semibold text-slate-900 text-sm line-clamp-1 group-hover:text-coral transition-colors">
                {spot.title}
              </h3>
              <p className="text-slate-600 text-xs">{spot.area}</p>
              <p className="text-slate-500 text-xs">{spot.savedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
