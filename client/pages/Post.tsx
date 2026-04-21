import Navigation from "@/components/Navigation";
import CategorySelector from "@/components/post/CategorySelector";
import PostForm from "@/components/post/PostForm";
import LocationSelector from "@/components/post/LocationSelector";
import PhotoUpload from "@/components/post/PhotoUpload";
import PostingAccess from "@/components/post/PostingAccess";
import LivePreview from "@/components/post/LivePreview";
import { Send } from "lucide-react";

export default function Post() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeTab="post" />

      <main className="bg-slate-50">
        {/* Header */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex items-start gap-3">
              <div className="text-coral text-2xl">+</div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Create a local update
                </h1>
                <p className="text-slate-600 text-sm mt-1">
                  Share what's happening in your community. Local first, always.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-3 gap-8">
              {/* Left: Form */}
              <div className="col-span-2 space-y-8">
                {/* Category Selector */}
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <CategorySelector />
                </div>

                {/* Post Form */}
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <PostForm />
                </div>

                {/* Location Selector */}
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <LocationSelector />
                </div>

                {/* Photo Upload */}
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <PhotoUpload />
                </div>

                {/* Publish Button */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-coral hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Send size={18} />
                    Publish Local Update
                  </button>
                </div>

                {/* Note */}
                <div className="text-center text-xs text-slate-500">
                  <p>⚖️ Your post will be reviewed to keep Spots helpful and safe.</p>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="space-y-6">
                <PostingAccess />
                <LivePreview />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
