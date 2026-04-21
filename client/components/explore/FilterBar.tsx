import { Coffee, Users, Trees, Utensils, Book, Sparkles, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "food", label: "Food & Drinks", icon: Utensils },
  { id: "coffee", label: "Coffee", icon: Coffee },
  { id: "study", label: "Study & Work", icon: Book },
  { id: "outdoors", label: "Outdoors", icon: Trees },
  { id: "events", label: "Events", icon: Sparkles },
  { id: "family", label: "Family", icon: Users },
  { id: "sights", label: "Sights", icon: null },
];

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex gap-2 flex-wrap items-center border-b border-slate-200 pb-4">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeFilter === category.id;

        return (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all border",
              isActive
                ? "bg-coral text-white border-coral"
                : "border-slate-300 text-slate-700 hover:border-coral hover:text-coral bg-white"
            )}
          >
            {Icon && <Icon size={16} />}
            {category.label}
          </button>
        );
      })}

      {/* More Filters */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:border-coral hover:text-coral transition-all bg-white font-medium text-sm ml-2">
        <MoreHorizontal size={16} />
        More Filters
      </button>
    </div>
  );
}
