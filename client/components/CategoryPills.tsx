import { Coffee, Users, Trees, Utensils, Book, Sparkles, MoreHorizontal } from "lucide-react";

const categories = [
  { label: "Coffee", icon: Coffee },
  { label: "Family", icon: Users },
  { label: "Outdoors", icon: Trees },
  { label: "Food & Drinks", icon: Utensils },
  { label: "Study", icon: Book },
  { label: "Events", icon: Sparkles },
  { label: "More", icon: MoreHorizontal },
];

export default function CategoryPills() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 border-b border-slate-200">
        <div className="flex gap-3 flex-wrap">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.label}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:border-coral hover:text-coral transition-colors bg-white hover:bg-coral-50 font-medium text-sm"
              >
                <Icon size={16} />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
