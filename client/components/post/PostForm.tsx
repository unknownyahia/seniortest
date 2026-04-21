import { useState } from "react";

export default function PostForm() {
  const [content, setContent] = useState("");
  const maxChars = 280;

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-900">
        Describe the scene, context, weather, or what you found...
      </label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value.slice(0, maxChars))}
        placeholder="Describe the scene, context, weather, or what you found..."
        className="w-full h-32 px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
      />
      <div className="flex justify-end">
        <span className="text-xs font-medium text-slate-500">
          {content.length} / {maxChars}
        </span>
      </div>
    </div>
  );
}
