/**
 * AvgrdLoader — client component that loads avgrd web components.
 *
 * DOC TRAIL — Web Components in Next.js
 * Lit Element web components use `customElements.define()` which only exists in
 * the browser. This loader imports the library client-side so the custom
 * elements register themselves. It renders nothing — it just triggers the
 * side-effect import. Place it once in the layout so all pages can use the
 * custom element tags.
 */

"use client";

import { useEffect } from "react";

export function AvgrdLoader() {
  useEffect(() => {
    import("@/lib/vendor/avgrd-components.js");
  }, []);

  return null;
}
