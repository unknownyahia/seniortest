import { Heart, MessageCircle, Bell } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8">
      <div className="flex items-start gap-8">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex-shrink-0"></div>

        {/* User Info */}
        <div className="flex-1">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-slate-900">Spots QA User</h1>
            <p className="text-sm text-slate-600">qa-user@spots.demo</p>
          </div>
          <div className="flex gap-4 mt-3">
            <span className="inline-block px-3 py-1 rounded-full bg-coral-50 text-coral font-semibold text-xs">
              Plan: Free
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-12">
          {/* Favorites */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Heart size={20} className="fill-coral text-coral" />
              <span className="text-2xl font-bold text-slate-900">0</span>
            </div>
            <p className="text-xs text-slate-600">Keep exploring!</p>
          </div>

          {/* Saves */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <div className="text-2xl font-bold text-slate-900">3</div>
            </div>
            <p className="text-xs text-slate-600">Saved places</p>
          </div>

          {/* Unread */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Bell size={20} className="text-slate-400" />
              <span className="text-2xl font-bold text-slate-900">2</span>
            </div>
            <p className="text-xs text-slate-600">Unread notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
