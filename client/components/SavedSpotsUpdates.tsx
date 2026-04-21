import { Clock, Dot } from "lucide-react";

const updates = [
  {
    id: 1,
    placeName: "21 High Street Dessert Bar",
    update: "New photos added",
    time: "2 min ago",
    isUnread: true,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    placeName: "Minaretein Study Lounge",
    update: "Conditions updated",
    time: "1 hour ago",
    isUnread: false,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop",
  },
];

export default function SavedSpotsUpdates() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900">Saved Spots Updates</h3>
        <a href="/explore" className="text-coral hover:text-orange-600 font-medium text-xs">
          View all
        </a>
      </div>

      <div className="space-y-3">
        {updates.map((update) => (
          <div
            key={update.id}
            className={`flex gap-3 p-3 rounded-lg border transition-all group cursor-pointer ${
              update.isUnread
                ? "border-coral/30 bg-coral-50/30 hover:border-coral hover:bg-coral-50/50"
                : "border-slate-200 hover:border-coral/30 hover:bg-coral-50/30"
            }`}
          >
            {/* Image */}
            <img
              src={update.image}
              alt={update.placeName}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-slate-900 text-sm line-clamp-1 group-hover:text-coral transition-colors">
                {update.placeName}
              </h4>
              <p className="text-slate-600 text-xs mt-1">{update.update}</p>
              <p className="text-slate-500 text-xs mt-1 flex items-center gap-1">
                <Clock size={12} />
                {update.time}
              </p>
            </div>

            {/* Unread indicator */}
            {update.isUnread && (
              <div className="flex items-center justify-center flex-shrink-0">
                <Dot size={24} className="fill-coral text-coral" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
