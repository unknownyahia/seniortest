import { AlertCircle, CheckCircle, Users, TrendingUp, Settings } from "lucide-react";

export default function PostingAccess() {
  return (
    <div className="space-y-6">
      {/* Posting Access */}
      <div className="border border-slate-200 rounded-lg p-4 bg-white">
        <h3 className="font-semibold text-slate-900 text-sm mb-4">Posting access</h3>
        
        {/* Quota */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-blue-600">0/0</span>
          </div>
          <p className="text-xs text-slate-600">Local posting quota free.</p>
          <p className="text-xs text-slate-600">Event publishing is available, but quieter.</p>
        </div>

        {/* User section */}
        <div className="space-y-2 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-600"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">You</p>
              <p className="text-xs text-slate-500">Pro</p>
            </div>
          </div>
        </div>

        {/* Note about organization */}
        <div className="flex gap-2 text-xs text-slate-600 pt-2">
          <AlertCircle size={14} className="flex-shrink-0 mt-0.5 text-slate-400" />
          <p>Only selected organization accounts can create promoted events</p>
        </div>
      </div>

      {/* Promote Events */}
      <div className="border border-slate-200 rounded-lg p-4 bg-white">
        <h3 className="font-semibold text-slate-900 text-sm mb-4">
          Promote events (organization accounts)
        </h3>
        <p className="text-xs text-slate-600 mb-4">
          Unlock more ways to reach your community.
        </p>

        <div className="space-y-3">
          {/* Create promoted events */}
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <TrendingUp size={18} className="text-coral" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">
                Create promoted events
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Reach more people with event promotions
              </p>
            </div>
          </div>

          {/* Track performance */}
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <TrendingUp size={18} className="text-coral" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">
                Track performance
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                See detailed reports and analytics
              </p>
            </div>
          </div>

          {/* Invite and manage */}
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <Users size={18} className="text-coral" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">
                Invite and manage
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Collaborate with your team
              </p>
            </div>
          </div>
        </div>

        <a href="#" className="text-xs text-coral font-medium hover:text-orange-600 mt-4 block">
          Learn more about organization accounts →
        </a>
      </div>
    </div>
  );
}
