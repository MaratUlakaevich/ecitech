"use client";

import { openCookieSettings } from "./SiteScripts";

/** Footer link that reopens the consent banner, so consent can be changed or withdrawn at any time. */
export default function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {label}
    </button>
  );
}
