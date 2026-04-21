import { Star, MapPin, Bookmark } from "lucide-react";

const trendingItems = [
  {
    id: 1,
    title: "Sahara Walk Coffee Quiet Desk Hours",
    area: "Al Sadd",
    category: "Coffee Shop",
    rating: 4.7,
    reviews: 98,
    distance: "3.4 km",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    title: "West Bay Evening Promenade",
    area: "West Bay",
    category: "Outdoors",
    rating: 4.3,
    reviews: 75,
    distance: "6.3 km",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop",
  },
];

export default function TrendingNearby() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900">Trending Nearby</h3>
        <a href="/explore" className="text-coral hover:text-orange-600 font-medium text-xs">
          View all
        </a>
      </div>

      <div className="space-y-3">
        {trendingItems.map((item) => (
          <div key={item.id} className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-coral/30 hover:bg-coral-50/30 transition-all group cursor-pointer">
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-slate-900 text-sm line-clamp-1 group-hover:text-coral transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-600 text-xs mt-1">
                {item.area} • {item.category}
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs">
                <div className="flex items-center gap-0.5">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-slate-900">
                    {item.rating}
                  </span>
                  <span className="text-slate-500">({item.reviews})</span>
                </div>
                <span className="text-slate-500">{item.distance}</span>
              </div>
            </div>

            {/* Bookmark */}
            <button className="flex-shrink-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Bookmark size={16} className="text-slate-400 hover:text-coral transition-colors" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
