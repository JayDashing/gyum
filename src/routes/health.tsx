import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { Heart, Moon, Droplet, Footprints } from "lucide-react";

export const Route = createFileRoute("/health")({
  head: () => ({ meta: [{ title: "Health Metrics — GyUM" }] }),
  component: HealthPage,
});

const days = [
  { d: "Mon", v: 0.85 },
  { d: "Tue", v: 0.7 },
  { d: "Wed.", v: 0.4 },
  { d: "Thu", v: 0.95 },
  { d: "Fri", v: 0.8 },
  { d: "Sat", v: 0.55 },
  { d: "Sun", v: 0.9 },
];

function HealthPage() {
  return (
    <AppLayout>
      <h1 className="text-3xl font-bold tracking-tight">Health Metrics</h1>
      <p className="mt-1 text-sm text-muted-foreground">Monitor your health and wellness</p>

      <section className="brand-gradient mt-6 rounded-2xl p-6 shadow-[var(--shadow-brand)]">
        <div className="text-sm opacity-90">Today's Progress</div>
        <div className="mt-1 text-2xl font-bold">Great Job, 'Ga!</div>
      </section>

      <section className="card-soft mt-6 p-5 animate-slide-up">
        <h2 className="font-bold">Weekly Activity</h2>
        <div className="mt-5 flex items-end justify-between gap-2">
          {days.map((d, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-32 w-full max-w-[36px] items-end overflow-hidden rounded-full bg-muted">
                <div
                  className="w-full rounded-full bg-primary"
                  style={{
                    height: `${d.v * 100}%`,
                    animation: `grow-bar 0.9s cubic-bezier(0.4,0,0.2,1) ${0.1 + i * 0.08}s both`,
                    ["--bar-h" as string]: `${d.v * 100}%`,
                  } as React.CSSProperties}
                />
              </div>
              <span className={"text-xs " + (i === 6 ? "font-bold text-primary" : "text-muted-foreground")}>
                {d.d}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <MetricCard icon={Heart} label="Heart Rate" big="72" sub="bpm • Normal" />
        <MetricCard icon={Moon} label="Sleep" big="7/8 hrs" sub="Last night" />
        <MetricCard icon={Droplet} label="Water" big="6/8" sub="glasses today" />
        <MetricCard icon={Footprints} label="Steps" big="7,243" sub="of 10,000 goal" />
      </section>
    </AppLayout>
  );
}

function MetricCard({
  icon: Icon, label, big, sub,
}: { icon: typeof Heart; label: string; big: string; sub: string }) {
  return (
    <div className="card-soft lift animate-pop-in p-5">
      <Icon className="h-5 w-5 text-primary" />
      <div className="mt-3 text-sm text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-bold">{big}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}
