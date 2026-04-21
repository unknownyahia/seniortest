import { Eye, Clock } from "lucide-react";

export default function LivePreview() {
  return (
    <div className="border border-slate-200 rounded-lg p-4 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Eye size={16} className="text-slate-600" />
        <h3 className="font-semibold text-slate-900 text-sm">Live preview</h3>
      </div>

      {/* Preview card */}
      <div className="rounded-lg border border-slate-200 overflow-hidden bg-white">
        {/* Preview image */}
        <div className="w-full h-32 bg-gradient-to-br from-orange-200 via-orange-100 to-yellow-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504674900787-a1c41e92a2fa?w=400&h=300&fit=crop"
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Preview content */}
        <div className="p-3 space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-900">
                Lusail Boulevard Bites and coffee
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Busy lunch crowd, variety of cuisines & quick service
              </p>
            </div>
          </div>

          {/* Time and area */}
          <div className="flex items-center gap-1 text-xs text-slate-600 pl-8">
            <Clock size={12} />
            Today 12:00 PM
          </div>

          {/* Crowded badge */}
          <div className="pl-8">
            <span className="inline-block text-xs px-2 py-0.5 rounded bg-coral text-white font-medium">
              Crowded
            </span>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-4 space-y-2 text-xs">
        <p className="font-semibold text-slate-900">Tips for great updates:</p>
        <ul className="space-y-1 text-slate-600 ml-3">
          <li>✓ Be specific and helpful</li>
          <li>✓ Add a clear photo</li>
          <li>✓ Keep it focused and on topic</li>
        </ul>
      </div>
    </div>
  );
}
