"use client";

import Link from "next/link";

export default function PrintBar() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-black/85 backdrop-blur-md px-6 py-3 border-b border-white/10 print:hidden">
      {/* Back to portfolio */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-white transition"
      >
        <span className="text-lg leading-none">←</span>
        <span>Back to portfolio</span>
      </Link>

      {/* Print / Save PDF */}
      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-mono text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-300 transition"
      >
        <span className="text-sm">🖨</span>
        <span>Print / Save PDF</span>
      </button>
    </div>
  );
}
