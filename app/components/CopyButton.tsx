"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore — graceful no-op if clipboard blocked
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="px-4 py-2.5 rounded-md bg-[var(--color-paper)] text-[var(--color-ink)] font-medium text-sm hover:bg-[var(--color-gold)] transition shrink-0"
    >
      {copied ? "Copied ✓" : "Copy address"}
    </button>
  );
}
