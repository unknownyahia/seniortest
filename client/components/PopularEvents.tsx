import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    date: "24",
    month: "May",
    title: "Katara Family Lawn After Dinner Loop",
    venue: "Katara Cultural Village",
    time: "Today - 10:30 PM",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    date: "25",
    month: "May",
    title: "Lusail Boulevard Bites",
    venue: "Lusail Boulevard",
    time: "Tomorrow - 7:00 PM",
    image: "https://images.unsplash.com/photo-1540575467063-178dd50f0caf?w=150&h=150&fit=crop",
  },
];

export default function PopularEvents() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900">Popular Events</h3>
        <a href="/explore" className="text-coral hover:text-orange-600 font-medium text-xs">
          View all
        </a>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div key={event.id} className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-coral/30 hover:bg-coral-50/30 transition-all group cursor-pointer">
            {/* Date tile */}
            <div className="w-14 h-14 bg-coral/10 rounded-lg flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-coral/20 transition-colors">
              <span className="font-bold text-coral text-lg">{event.date}</span>
              <span className="text-coral text-xs font-medium">{event.month}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-slate-900 text-sm line-clamp-1 group-hover:text-coral transition-colors">
                {event.title}
              </h4>
              <p className="text-slate-600 text-xs mt-1 flex items-center gap-1">
                <MapPin size={12} />
                {event.venue}
              </p>
              <p className="text-slate-500 text-xs mt-1 flex items-center gap-1">
                <Calendar size={12} />
                {event.time}
              </p>
            </div>

            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
