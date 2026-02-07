/**
 * BadgeBar — renders earned and unearned badge pills using avgrd-badge.
 *
 * DOC TRAIL — Web Components in React
 * The <avgrd-badge> tags are Lit Element web components registered globally by
 * the AvgrdLoader. React 19 (used by Next.js 16) has native support for
 * passing properties to custom elements. Since these are "use client", the
 * custom elements hydrate and render their shadow DOM in the browser.
 */

"use client";

import type { Badge } from "@/lib/types";

export function BadgeBar({ badges }: { badges: Badge[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <div key={badge.id} title={badge.description}>
          {/* @ts-expect-error — avgrd-badge is a custom element */}
          <avgrd-badge
            value={badge.earned ? `★ ${badge.label}` : `☆ ${badge.label}`}
            variant={badge.earned ? "warning" : "default"}
            outlined={!badge.earned}
            size="md"
          />
        </div>
      ))}
    </div>
  );
}
