import { Edit2, Settings } from "lucide-react";

export default function AccountSettings() {
  return (
    <div className="space-y-6">
      {/* Account Settings Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="font-bold text-slate-900 text-sm mb-6">Account Settings</h3>

        <div className="space-y-4">
          {/* Username */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-900">Username</p>
              <p className="text-xs text-slate-600 mt-1">qa-user@spots.demo</p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700">
              <Edit2 size={16} />
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-900">Email</p>
              <p className="text-xs text-slate-600 mt-1">qa-user@spots.demo</p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700">
              <Edit2 size={16} />
            </button>
          </div>

          {/* Plan */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-900">Plan</p>
              <p className="text-xs text-coral font-semibold mt-1">Free</p>
            </div>
            <button className="text-xs text-coral hover:text-orange-600 font-medium">
              View plans
            </button>
          </div>

          {/* Language */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-900">Language</p>
              <p className="text-xs text-slate-600 mt-1">English</p>
            </div>
            <button className="text-xs text-coral hover:text-orange-600 font-medium">
              Change
            </button>
          </div>

          {/* Privacy mode */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900">Privacy mode</p>
              <p className="text-xs text-slate-600 mt-1">Reduce profile visibility for future social features.</p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700">
              <Settings size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="font-bold text-slate-900 text-sm mb-6">Preferences</h3>

        <div className="space-y-4">
          {/* Email notifications */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-900">Email notifications</p>
              <p className="text-xs text-slate-600 mt-1">Get updates about activity, news and more.</p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Settings size={18} className="text-coral" />
            </button>
          </div>

          {/* Marketing emails */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-900">Marketing emails</p>
              <p className="text-xs text-slate-600 mt-1">Receive special offers and promotions.</p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700">
              <Settings size={18} />
            </button>
          </div>

          {/* Unread notifications */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900">Unread notifications</p>
              <p className="text-xs text-slate-600 mt-1">2 new</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-xs text-slate-600 hover:text-slate-900 font-medium">
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <button className="w-full bg-coral hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors">
        Save Settings
      </button>

      <button className="w-full border border-slate-300 text-slate-700 hover:text-slate-900 font-medium py-3 rounded-lg transition-colors">
        Sign Out
      </button>
    </div>
  );
}
