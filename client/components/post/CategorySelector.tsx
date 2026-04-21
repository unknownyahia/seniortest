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
  { id: "more", label: "More", icon: MoreHorizontal },
];

export default function CategorySelector({
  selectedCategory,
  onSelect,
}: {
  selectedCategory?: string;
  onSelect?: (category: string) => void;
}) {
  const [selected, setSelected] = useState(selectedCategory || "all");

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-coral font-bold text-lg">1.</span>
        <label className="text-sm font-semibold text-slate-900">
          What's happening?
        </label>
      </div>
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selected === category.id;

          return (
            <button
              key={category.id}
              onClick={() => handleSelect(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all border",
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
      </div>
    </div>
  );
}
