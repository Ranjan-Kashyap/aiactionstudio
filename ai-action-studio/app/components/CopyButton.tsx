"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
  label?: string;
};

export default function CopyButton({ text, label = "Copy prompt" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS preview). Fail quietly;
      // the prompt is still selectable in the box below.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="prompt-copy"
      aria-live="polite"
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}
