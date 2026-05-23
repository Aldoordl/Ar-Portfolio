// app/not-found.tsx

import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <span>404 / Scene not found</span>

        <h1>This idea does not exist yet.</h1>

        <p>
          The page you are looking for might have been moved, renamed, or is
          still waiting to be shaped into a real digital experience.
        </p>

        <Link href="/" className="not-found__button">
          Back to {siteConfig.name}
          <span>↗</span>
        </Link>
      </div>
    </main>
  );
}