import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const portals = [
  {
    title: "Admin Portal",
    description: "Create, manage, publish, and review mock examinations.",
    href: "/admin/login",
    icon: ShieldCheck,
  },
  {
    title: "Student Portal",
    description: "Enter your shared mock link and begin your examination.",
    href: "/student/login",
    icon: GraduationCap,
  },
];

export default function HomePage() {
  return (
    <main className="landing-page">
      <div className="background-grid" aria-hidden="true" />

      <section className="landing-content" aria-labelledby="page-title">
        <div className="brand-symbol" aria-hidden="true">
          H
        </div>

        <p className="eyebrow">HELIX ONLINE TUTORIAL</p>

        <h1 className="page-title" id="page-title">
          Helix Academy
        </h1>

        <p className="subtitle">Helix Online Tutorial [H•O•T]</p>

        <div className="introduction">
          <p>
            A focused computer-based test environment designed to support
            readiness, mastery, and success.
          </p>
        </div>

        <div className="portal-grid" aria-label="Choose a portal">
          {portals.map((portal) => {
            const Icon = portal.icon;

            return (
              <Link
                className="portal-card"
                href={portal.href}
                key={portal.title}
              >
                <span className="portal-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.8} />
                </span>

                <span className="portal-content">
                  <span className="portal-title">{portal.title}</span>
                  <span className="portal-description">
                    {portal.description}
                  </span>
                </span>

                <ArrowRight
                  className="portal-arrow"
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>

        <p className="instruction">
          Select the appropriate portal to continue.
        </p>
      </section>

      <footer className="landing-footer">
        Driven By Knowledge; Built for Success
      </footer>
    </main>
  );
}
