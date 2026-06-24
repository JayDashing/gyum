import { Link } from "@tanstack/react-router";
import { Home, Calendar, Activity, BarChart3, User, Bell } from "lucide-react";
import logoIcon from "@/assets/gyum-icon.png.asset.json";
import type { ReactNode } from "react";

const nav = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/schedule", label: "Schedule", icon: Calendar },
  { to: "/track", label: "Track", icon: Activity },
  { to: "/health", label: "Health", icon: BarChart3 },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <Link to="/home" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={logoIcon.url} alt="GyUM" width={36} height={36} className="h-9 w-9 rounded-md shadow-sm" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Gy</span>
              <span className="text-primary">UM</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-full p-2 text-foreground hover:bg-accent"
          >
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 md:px-8 md:pb-12">{children}</main>

      {/* Bottom nav (mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <li key={n.to} className="flex-1">
                <Link
                  to={n.to}
                  className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-muted-foreground"
                  activeProps={{ className: "flex flex-col items-center gap-1 px-2 py-2 text-xs text-primary font-semibold" }}
                >
                  <Icon className="h-5 w-5" />
                  <span>{n.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
