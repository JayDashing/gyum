import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { ChevronRight, Trophy, Flame } from "lucide-react";

export const Route = createFileRoute("/home")({
  head: () => ({ meta: [{ title: "Home — GyUM" }] }),
  component: HomePage,
});

const workouts = [
  { name: "Full Body Workout", date: "01/16/2025", duration: "1 hr", cal: "250 cal" },
  { name: "Chest Workout", date: "01/16/2025", duration: "30 min", cal: "100 cal" },
  { name: "Back Workout", date: "01/16/2025", duration: "20 min", cal: "100 cal" },
  { name: "Leg Day", date: "01/17/2025", duration: "45 min", cal: "320 cal" },
];

function HomePage() {
  return (
    <AppLayout>
      <section className="brand-gradient animate-slide-up rounded-2xl p-6 shadow-[var(--shadow-brand)]">
        <h1 className="text-2xl font-bold">Welcome back, 'Ga!</h1>
        <p className="mt-1 text-sm opacity-90">Let's achieve your fitness goals today</p>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="card-soft lift animate-pop-in p-5" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
            <Trophy className="h-4 w-4 text-primary" /> Total University Rank
          </div>
          <div className="mt-2 text-2xl font-bold">244 / 25,000</div>
          <p className="mt-1 text-xs text-muted-foreground">328 workouts completed</p>
        </div>
        <div className="card-soft lift animate-pop-in p-5" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
            <Flame className="h-4 w-4 text-primary" /> Personal Best
          </div>
          <div className="mt-2 text-2xl font-bold">7 day streak</div>
          <p className="mt-1 text-xs text-muted-foreground">1,502 calories burned</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold">Upcoming Workout Classes Today</h2>
        <ul className="mt-4 space-y-3">
          {workouts.map((w, i) => (
            <li key={w.name} className="animate-slide-up" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              <Link
                to="/track"
                className="card-soft lift flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary transition-transform group-hover:rotate-12">
                    <Flame className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-semibold">{w.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {w.date} • {w.duration} • {w.cal}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </AppLayout>
  );
}
