import Navigation from "@/components/Navigation";
import ProfileHeader from "@/components/profile/ProfileHeader";
import SavedSpots from "@/components/profile/SavedSpots";
import RecentActivity from "@/components/profile/RecentActivity";
import AccountSettings from "@/components/profile/AccountSettings";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeTab="profile" />

      <main className="bg-slate-50">
        {/* Profile Header */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <ProfileHeader />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-3 gap-8">
              {/* Left: Saved Spots & Activity */}
              <div className="col-span-2 space-y-8">
                <SavedSpots />
                <RecentActivity />
              </div>

              {/* Right: Settings */}
              <div>
                <AccountSettings />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
