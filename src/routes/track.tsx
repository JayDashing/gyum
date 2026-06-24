import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { CheckCircle2, Flame, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/track")({
  head: () => ({ meta: [{ title: "Track Workout — GyUM" }] }),
  component: TrackPage,
});

const initialActivity = [
  { name: "Cardio Training", date: "12/16/2025", info: "30 min • 250 cal" },
  { name: "Strength Training", date: "12/14/2025", info: "45 min • 320 cal" },
  { name: "Core Workout", date: "12/12/2025", info: "30 min • 180 cal" },
  { name: "Yoga Flow", date: "12/10/2025", info: "40 min • 150 cal" },
];

function TrackPage() {
  const [activity, setActivity] = useState(initialActivity);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", duration: "", cal: "" });

  function logWorkout(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name) return;
    setActivity((a) => [
      { name: form.name, date: new Date().toLocaleDateString("en-US"), info: `${form.duration || "0"} min • ${form.cal || "0"} cal` },
      ...a,
    ]);
    setForm({ name: "", duration: "", cal: "" });
    setShowForm(false);
  }

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold tracking-tight">Track Workout</h1>
      <p className="mt-1 text-sm text-muted-foreground">Monitor your fitness journey</p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { icon: CheckCircle2, big: "2/5", lbl: "Workouts" },
          { icon: Flame, big: "750", lbl: "Workouts" },
          { icon: Clock, big: "105", lbl: "Minutes" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="card-soft p-4 text-center">
              <Icon className="mx-auto h-5 w-5 text-primary" />
              <div className="mt-2 text-2xl font-bold">{s.big}</div>
              <div className="text-xs text-muted-foreground">{s.lbl}</div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setShowForm((v) => !v)}
        className="mt-5 w-full rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-brand)]"
      >
        {showForm ? "Cancel" : "Log Workout"}
      </button>

      {showForm && (
        <form onSubmit={logWorkout} className="card-soft mt-4 space-y-3 p-5">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Workout name (e.g. HIIT)"
            className="w-full rounded-lg border border-border bg-muted px-3 py-2.5 text-sm outline-none focus:border-primary focus:bg-background"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              placeholder="Duration (min)"
              className="rounded-lg border border-border bg-muted px-3 py-2.5 text-sm outline-none focus:border-primary focus:bg-background"
            />
            <input
              value={form.cal}
              onChange={(e) => setForm({ ...form, cal: e.target.value })}
              placeholder="Calories"
              className="rounded-lg border border-border bg-muted px-3 py-2.5 text-sm outline-none focus:border-primary focus:bg-background"
            />
          </div>
          <button type="submit" className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground">
            Save Workout
          </button>
        </form>
      )}

      <h2 className="mt-8 text-lg font-bold">Recent Activity</h2>
      <ul className="mt-3 space-y-3">
        {activity.map((a, i) => (
          <li key={i} className="card-soft flex items-center gap-3 p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary">
              <CheckCircle2 className="h-4 w-4" />
            </span>
            <div>
              <div className="font-semibold">{a.name}</div>
              <div className="text-xs text-muted-foreground">{a.date} • {a.info}</div>
            </div>
          </li>
        ))}
      </ul>
    </AppLayout>
  );
}
