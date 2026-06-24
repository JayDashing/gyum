import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/gyum-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GyUM — University Fitness Tracker" },
      { name: "description", content: "Your personal fitness companion built exclusively for university students and faculty." },
      { property: "og:title", content: "GyUM — University Fitness Tracker" },
      { property: "og:description", content: "Your personal fitness companion built exclusively for university students and faculty." },
    ],
  }),
  component: Welcome,
});

function Welcome() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background px-6 py-12">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <img src={logo} alt="GyUM logo" width={320} height={320} className="h-56 w-56 md:h-72 md:w-72" />
        <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
          Welcome to <span className="text-primary">GyUM</span>
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
          Your personal fitness companion built exclusively for university students and faculty
        </p>
      </div>
      <div className="w-full max-w-md">
        <Link
          to="/signin"
          className="block w-full rounded-xl bg-primary px-6 py-4 text-center text-base font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.01] active:scale-[0.99]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
