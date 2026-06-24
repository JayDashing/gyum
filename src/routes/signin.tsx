import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Mail, Lock } from "lucide-react";
import banner from "@/assets/gyum-banner.png.asset.json";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [{ title: "Sign In — GyUM" }] }),
  component: SignIn,
});

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    navigate({ to: "/home" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center animate-[fade-in_0.5s_ease-out]">
          <img src={banner.url} alt="GyUM" className="h-14 w-auto" />
          <h1 className="mt-6 text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue your fitness journey
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium" htmlFor="email">University Email</label>
            <div className="relative mt-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
                className="w-full rounded-lg border border-border bg-muted py-3 pl-10 pr-3 text-sm outline-none focus:border-primary focus:bg-background"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="password">Password</label>
            <div className="relative mt-1">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-border bg-muted py-3 pl-10 pr-3 text-sm outline-none focus:border-primary focus:bg-background"
              />
            </div>
            <div className="mt-2 text-right">
              <a href="#" className="text-sm font-semibold text-primary hover:underline">Forgot Password?</a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Sign In
          </button>

          <div className="flex items-center gap-3 py-1">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">Or continue with</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={() => navigate({ to: "/home" })}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-semibold hover:bg-accent"
          >
            <span className="text-base font-bold text-primary">G</span>
            Google
          </button>

          <p className="pt-2 text-center text-sm text-muted-foreground">
            Don't have an account? <Link to="/signin" className="font-semibold text-primary hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
