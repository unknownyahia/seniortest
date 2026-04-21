import { List, Map as MapIcon, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ResultsHeader({
  resultCount = 997,
  onViewChange,
}: {
  resultCount?: number;
  onViewChange?: (view: "list" | "map") => void;
}) {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [sortBy, setSortBy] = useState("Recommended");

  const handleViewChange = (view: "list" | "map") => {
    setViewMode(view);
    onViewChange?.(view);
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
      {/* Left: Results info */}
      <div className="text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{resultCount}</span> results in Qatar
      </div>

      {/* Right: Sort, View Toggle */}
      <div className="flex items-center gap-4">
        {/* Sort dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-600">Sort by</span>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-900 hover:border-coral hover:text-coral transition-colors bg-white">
            {sortBy}
            <ArrowUpDown size={14} />
          </button>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-2 ml-4">
          {/* Map view button */}
          <button
            onClick={() => handleViewChange("map")}
            className={cn(
              "p-2 rounded-lg transition-colors border",
              viewMode === "map"
                ? "bg-coral text-white border-coral"
                : "border-slate-300 text-slate-700 hover:border-coral hover:text-coral bg-white"
            )}
            title="Map view"
          >
            <MapIcon size={18} />
          </button>

          {/* List view button */}
          <button
            onClick={() => handleViewChange("list")}
            className={cn(
              "p-2 rounded-lg transition-colors border",
              viewMode === "list"
                ? "bg-coral text-white border-coral"
                : "border-slate-300 text-slate-700 hover:border-coral hover:text-coral bg-white"
            )}
            title="List view"
          >
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
