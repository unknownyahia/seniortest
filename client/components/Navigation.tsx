import { Link } from "react-router-dom";
import { Bell, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation({ activeTab = "home" }: { activeTab?: string }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-coral">Spots</div>
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors relative pb-1",
                activeTab === "home"
                  ? "text-coral border-b-2 border-coral"
                  : "text-slate-700 hover:text-slate-900"
              )}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={cn(
                "text-sm font-medium transition-colors relative pb-1",
                activeTab === "explore"
                  ? "text-coral border-b-2 border-coral"
                  : "text-slate-700 hover:text-slate-900"
              )}
            >
              Explore
            </Link>
            <Link
              to="/post"
              className={cn(
                "text-sm font-medium transition-colors relative pb-1",
                activeTab === "post"
                  ? "text-coral border-b-2 border-coral"
                  : "text-slate-700 hover:text-slate-900"
              )}
            >
              Post
            </Link>
            <Link
              to="/profile"
              className={cn(
                "text-sm font-medium transition-colors relative pb-1",
                activeTab === "profile"
                  ? "text-coral border-b-2 border-coral"
                  : "text-slate-700 hover:text-slate-900"
              )}
            >
              Profile
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell size={20} className="text-slate-700" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Heart size={20} className="text-slate-700" />
            </button>
            <button className="flex items-center gap-2 p-1 hover:bg-slate-100 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
