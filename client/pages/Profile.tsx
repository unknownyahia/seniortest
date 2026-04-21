import Navigation from "@/components/Navigation";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeTab="profile" />
      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Your Profile</h1>
          <p className="text-slate-600 text-lg mb-6">
            Manage your account and saved spots
          </p>
          <p className="text-slate-500 text-base">
            Continue building out this page by asking me to implement the profile functionality.
          </p>
        </section>
      </main>
    </div>
  );
}
