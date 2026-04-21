import { Star, MapPin, Clock, Bookmark, MoreVertical } from "lucide-react";

const results = [
  {
    id: 1,
    title: "Lusail Boulevard Bites Lunch Crowd Reset",
    area: "Lusail",
    category: "Busy lunch crowd, variety of cuisines & quick service",
    rating: 4.8,
    reviews: 156,
    distance: "2.3 km",
    time: "Today 11:30 AM - 2:00 PM",
    tag: "Crowded",
    image: "https://images.unsplash.com/photo-1504674900787-a1c41e92a2fa?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Sahara Walk Coffee Quiet Desk Hours",
    area: "Al Sadd",
    category: "Coffee Shop",
    rating: 4.7,
    reviews: 98,
    distance: "3.4 km",
    time: "Today 7:00 AM - 8:00 PM",
    tag: null,
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Minaretein Study Lounge Conditions + Coffee",
    area: "Education City",
    category: "Study Lounge",
    rating: 4.8,
    reviews: 201,
    distance: "5.3 km",
    time: "Open until 11:00 PM",
    tag: "Good for studying",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Katara Family Lawn After Dinner Loop",
    area: "Katara Cultural Village",
    category: "Outdoors",
    rating: 4.7,
    reviews: 87,
    distance: "7.7 km",
    time: "Daily 4:00 PM - 11:00 PM",
    tag: null,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "West Bay Evening Promenade",
    area: "West Bay",
    category: "Outdoors",
    rating: 4.3,
    reviews: 75,
    distance: "8.3 km",
    time: "Open daily",
    tag: null,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Msheireb Downtown Heritage Walk",
    area: "Msheireb",
    category: "Heritage architecture, museums & local cafes",
    rating: 4.6,
    reviews: 120,
    distance: "9.1 km",
    time: "Open until 11:00 PM",
    tag: null,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
  },
];

export default function ResultsList() {
  return (
    <div className="space-y-3">
      {results.map((result) => (
        <div
          key={result.id}
          className="flex gap-4 p-3 rounded-lg border border-slate-200 hover:border-coral/50 hover:shadow-md transition-all group cursor-pointer bg-white"
        >
          {/* Image */}
          <div className="relative w-24 h-24 rounded-lg flex-shrink-0 overflow-hidden">
            <img
              src={result.image}
              alt={result.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            {result.tag && (
              <div className="absolute top-2 left-2 bg-coral text-white text-xs px-2 py-1 rounded font-medium">
                {result.tag}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 py-1">
            <h3 className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-coral transition-colors">
              {result.title}
            </h3>
            <p className="text-slate-600 text-xs mt-1">{result.area} • {result.category}</p>

            {/* Rating and distance */}
            <div className="flex items-center gap-3 mt-2 text-xs">
              <div className="flex items-center gap-1">
                <Star size={13} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-slate-900">{result.rating}</span>
                <span className="text-slate-500">({result.reviews})</span>
              </div>
              <span className="text-slate-600 font-medium">{result.distance}</span>
            </div>

            {/* Time info */}
            <div className="flex items-center gap-1 mt-1 text-xs text-slate-600">
              <Clock size={12} />
              {result.time}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 items-center justify-between py-1">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
              <Bookmark size={16} className="text-slate-700" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
              <MoreVertical size={16} className="text-slate-700" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
