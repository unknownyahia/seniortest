import Navigation from "@/components/Navigation";

export default function Post() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeTab="post" />
      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Create a Local Update</h1>
          <p className="text-slate-600 text-lg mb-6">
            Share what's happening in your community
          </p>
          <p className="text-slate-500 text-base">
            Continue building out this page by asking me to implement the post creation functionality.
          </p>
        </section>
      </main>
    </div>
  );
}
