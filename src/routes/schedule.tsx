import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { useState } from "react";

export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [{ title: "Schedule — GyUM" }] }),
  component: SchedulePage,
});

const workoutSchedule = [
  {
    day: "Monday",
    time: "Afternoon (3:00-5:00 PM)",
    title: "Strength Training • 45 minutes",
    items: [
      ["Push-ups", "3 × 10-15"],
      ["Squats", "3 × 12-15"],
      ["Lunges", "3 × 10 each leg"],
      ["Plank", "45 min"],
      ["Dumbbell Rows", "3 × 10-15"],
    ],
  },
  {
    day: "Monday",
    time: "Evening (6:00-8:00 PM)",
    title: "Cardio Training • 30 minutes",
    items: [
      ["Jumping Jacks", "2 min"],
      ["High Knees", "2 min"],
      ["Burpees", "3 × 10"],
      ["Mountain Climbers", "3 × 30s"],
    ],
  },
  {
    day: "Wednesday",
    time: "Afternoon (4:00-5:30 PM)",
    title: "Core & Flexibility • 60 minutes",
    items: [
      ["Sit-ups", "3 × 20"],
      ["Russian Twists", "3 × 20"],
      ["Leg Raises", "3 × 15"],
      ["Yoga Flow", "20 min"],
    ],
  },
];

const currentSchedule = [
  { code: "4401", title: "CCE106", time: "10:00AM-12:00PM M-Sa", term: "1st Term", room: "PS302" },
  { code: "3277", title: "CSE7", time: "5:30PM-7:30PM M-Sa", term: "1st Term", room: "PS302" },
  { code: "2401", title: "HCI101", time: "12:30PM-1:30PM M-Sa", term: "2nd Term", room: "H1K" },
  { code: "5666", title: "CST9", time: "8:00AM-10:00AM M-Sa", term: "2nd Term", room: "H3P" },
];

function SchedulePage() {
  const [tab, setTab] = useState<"workout" | "current">("workout");

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold tracking-tight">
        {tab === "workout" ? "Workout Schedule" : "Current Schedule"}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {tab === "workout" ? "Based on your school schedule" : "Your school schedule on this semester"}
      </p>

      <div className="mt-6 flex gap-6 border-b border-border">
        {(["workout", "current"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={
              "relative pb-2 text-sm font-semibold capitalize transition-colors " +
              (tab === t ? "text-primary" : "text-muted-foreground hover:text-foreground")
            }
          >
            {t}
            {tab === t && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
      </div>

      {tab === "workout" ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {workoutSchedule.map((s, i) => (
            <article key={i} className="card-soft overflow-hidden">
              <div className="brand-gradient px-5 py-4">
                <div className="text-lg font-bold">{s.day}</div>
                <div className="text-sm opacity-90">{s.time}</div>
              </div>
              <div className="p-5">
                <div className="font-semibold">{s.title}</div>
                <ul className="mt-3 divide-y divide-border">
                  {s.items.map(([n, v]) => (
                    <li key={n} className="flex justify-between py-2.5 text-sm">
                      <span>{n}</span>
                      <span className="text-muted-foreground">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <h2 className="text-xl font-bold">1st Semester</h2>
          <div className="card-soft mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="p-4 font-semibold">Code & Title</th>
                  <th className="p-4 font-semibold">Day & Time</th>
                  <th className="p-4 font-semibold">Term & Room</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {currentSchedule.map((r) => (
                  <tr key={r.code}>
                    <td className="p-4">
                      <div className="text-muted-foreground">{r.code}</div>
                      <div className="font-semibold">{r.title}</div>
                    </td>
                    <td className="p-4 text-muted-foreground">{r.time}</td>
                    <td className="p-4 text-muted-foreground">
                      {r.term}<br />{r.room}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
