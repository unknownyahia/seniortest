import { Heart, MessageCircle, Pin, Clock } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "like",
    icon: Heart,
    action: "You liked",
    place: "Lusail Boulevard Bites Lunch Crowd Reset",
    time: "5h ago",
    category: "Food Halt",
  },
  {
    id: 2,
    type: "save",
    icon: Pin,
    action: "You saved",
    place: "Katara Family Lawn After Dinner Loop",
    time: "3d ago",
    category: "Outdoors • Katara Cultural Village",
  },
  {
    id: 3,
    type: "comment",
    icon: MessageCircle,
    action: 'You commented on',
    place: "Msheireb Downtown Heritage Walk",
    time: "1w ago",
    category: '"Great walk through history and culture"',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
        <a href="#" className="text-coral hover:text-orange-600 font-medium text-xs">
          View all activity
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex gap-4 p-3 rounded-lg border border-slate-200 hover:border-coral/30 hover:bg-coral-50/30 transition-all group cursor-pointer"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-coral-50 flex items-center justify-center group-hover:bg-coral/20 transition-colors">
                <Icon size={18} className="text-coral" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-900">
                  <span className="font-medium">{activity.action}</span>{" "}
                  <span className="text-slate-700 group-hover:text-coral transition-colors font-medium">
                    {activity.place}
                  </span>
                </p>
                <p className="text-xs text-slate-600 mt-1">{activity.category}</p>
              </div>

              {/* Time */}
              <div className="flex-shrink-0 text-right">
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock size={12} />
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
