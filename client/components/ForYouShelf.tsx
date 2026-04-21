import { Bookmark, MapPin, Clock } from "lucide-react";

const forYouItems = [
  {
    id: 1,
    title: "21 High Street Dessert Bar",
    location: "West Bay",
    distance: "2.3 km",
    updated: "1 hour ago",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "North Marina Padel Fuel Tonight",
    location: "North Marina",
    distance: "3.2 km",
    updated: "1 hour ago",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Minaretein Study Lounge Conditions",
    location: "Education City",
    distance: "7.8 km",
    updated: "1 hour ago",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Katara Family Lawn After Dinner Loop",
    location: "Katara Cultural Village",
    distance: "3.9 km",
    updated: "1 hour ago",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Lusail Boulevard Bites",
    location: "Lusail",
    distance: "12 km",
    updated: "1 hour ago",
    image: "https://images.unsplash.com/photo-1504674900787-a1c41e92a2fa?w=400&h=300&fit=crop",
  },
];

export default function ForYouShelf() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">For You</h2>
          <a href="/explore" className="text-coral hover:text-orange-600 font-medium text-sm">
            View all
          </a>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-2 -mx-2 px-2">
          {forYouItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-72 group">
              {/* Image container */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                {/* Bookmark button */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
                  <Bookmark size={18} className="text-slate-700" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 line-clamp-2 hover:text-coral transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm flex items-center gap-1">
                  <MapPin size={14} />
                  {item.location} • {item.distance}
                </p>
                <p className="text-slate-500 text-xs flex items-center gap-1">
                  <Clock size={12} />
                  Updated {item.updated}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
