import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { ChevronLeft, Phone } from "lucide-react";

export const Route = createFileRoute("/hotline")({
  head: () => ({ meta: [{ title: "GSTC Hotline — GyUM" }] }),
  component: HotlinePage,
});

function HotlinePage() {
  return (
    <AppLayout>
      <Link to="/profile" className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary">
        <ChevronLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight">GSTC HOTLINE</h1>
      <p className="mt-1 text-sm text-muted-foreground">Need help? We're here for you!</p>

      <section className="card-soft mt-6 p-5">
        <div className="flex items-center gap-2 font-bold">
          <Phone className="h-4 w-4 text-primary" /> Contact Support
        </div>
        <p className="mt-3 text-sm">GSTC Helpdesk: <span className="font-semibold">(032) 123-4567</span></p>
        <p className="mt-1 text-sm text-muted-foreground">Email: gstc@um.edu.ph</p>
        <p className="mt-1 text-sm text-muted-foreground">Available: Mon-Fri, 8:00 AM - 5:00 PM</p>
      </section>

      <section className="card-soft mt-4 p-5">
        <h2 className="font-bold">Common Topics</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          <li>Account and login issues</li>
          <li>Workout plan adjustments</li>
          <li>Health metrics tracking</li>
          <li>Technical support</li>
          <li>General fitness guidance</li>
        </ul>
      </section>
    </AppLayout>
  );
}
