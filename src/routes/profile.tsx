import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { Mail, IdCard, Target, Phone } from "lucide-react";
import avatar from "@/assets/avatar-robert.png";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — GyUM" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <section className="card-soft p-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <img src={avatar} alt="Robert" width={96} height={96} className="h-24 w-24 rounded-full border-4 border-accent object-cover" />
          <div className="flex-1 text-center sm:text-left">
            <div className="text-xl font-bold">Robert Dodong</div>
            <div className="text-sm text-muted-foreground">Student • Computer Science</div>
          </div>
          <div className="flex gap-6 text-center">
            <Stat n="48" l="Workouts" />
            <Stat n="2.5k" l="Calories" />
            <Stat n="12" l="Badges" />
          </div>
        </div>
      </section>

      <section className="mt-4 space-y-3">
        <InfoRow icon={Mail} label="Email" value="r.dodong@umindanao.edu.ph" />
        <InfoRow icon={IdCard} label="Student ID" value="546969" />
        <InfoRow icon={Target} label="Fitness Goal" value="General Fitness" />
      </section>

      <div className="mt-6 space-y-3">
        <button className="w-full rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-brand)]">
          Edit Profile
        </button>
        <Link
          to="/hotline"
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary bg-background py-3 text-base font-semibold text-primary"
        >
          <Phone className="h-4 w-4" /> GSTC Hotline
        </Link>
        <button
          onClick={() => navigate({ to: "/" })}
          className="w-full rounded-xl border-2 border-primary bg-background py-3 text-base font-semibold text-primary"
        >
          Log out
        </button>
      </div>
    </AppLayout>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-lg font-bold">{n}</div>
      <div className="text-xs text-muted-foreground">{l}</div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="card-soft flex items-center gap-3 p-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}
