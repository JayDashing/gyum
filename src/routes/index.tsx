import { createFileRoute, Link } from "@tanstack/react-router";
import banner from "@/assets/gyum-banner.png.asset.json";
import logoIcon from "@/assets/gyum-icon.png.asset.json";

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
        <div className="animate-[fade-in_0.6s_ease-out]">
          <img
            src={logoIcon.url}
            alt="GyUM logo"
            width={224}
            height={224}
            className="mx-auto h-44 w-44 rounded-3xl shadow-[var(--shadow-brand)] md:h-56 md:w-56"
          />
        </div>
        <img
          src={banner.url}
          alt="GyUM — Health and Wellness Management System"
          className="mt-8 w-full max-w-xl animate-[fade-in_0.8s_ease-out_0.15s_both]"
        />
        <p className="mt-6 max-w-md animate-[fade-in_0.8s_ease-out_0.3s_both] text-base text-muted-foreground md:text-lg">
          Your personal health &amp; wellness companion built exclusively for university students and faculty
        </p>
      </div>
      <div className="w-full max-w-md animate-[fade-in_0.8s_ease-out_0.45s_both]">
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
