"use client";

import { useState } from "react";
import Link from "next/link";
import { doctorNodes, doctorStart } from "@/lib/data";

export default function DoctorWizard() {
  const [currentId, setCurrentId] = useState(doctorStart);
  const [history, setHistory] = useState<string[]>([]);
  const node = doctorNodes[currentId];

  function choose(next: string) {
    setHistory((h) => [...h, currentId]);
    setCurrentId(next);
  }

  function back() {
    setHistory((h) => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setCurrentId(prev);
      return h.slice(0, -1);
    });
  }

  function restart() {
    setCurrentId(doctorStart);
    setHistory([]);
  }

  if (!node) return null;

  return (
    <div>
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wide text-bakar-600">
          {node.kind === "question"
            ? `Langkah diagnosis ${history.length + 1}`
            : "Hasil diagnosis"}
        </p>
        <h2 className="mt-2 text-2xl font-extrabold leading-snug text-kopi-900">
          {node.title}
        </h2>
        {node.body ? (
          <p className="mt-2 text-sm leading-relaxed text-kopi-700">
            {node.body}
          </p>
        ) : null}

        {node.kind === "question" && node.options ? (
          <div className="mt-5 flex flex-col gap-2.5">
            {node.options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => choose(opt.next)}
                className="rounded-2xl border-2 border-krem-200 bg-krem-50 px-5 py-3.5 text-left text-base font-bold text-kopi-900 transition hover:border-bakar-500 hover:bg-krem-100"
              >
                {opt.label}
              </button>
            ))}
          </div>
        ) : null}

        {node.kind === "result" ? (
          <div className="mt-4">
            {node.diagnosis ? (
              <p className="text-base leading-relaxed">{node.diagnosis}</p>
            ) : null}
            {node.fixes ? (
              <>
                <h3 className="mt-5 font-extrabold text-kopi-900">
                  Saran perbaikan
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed sm:text-base">
                  {node.fixes.map((fix) => (
                    <li key={fix}>{fix}</li>
                  ))}
                </ul>
              </>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/panduan/espresso"
                className="rounded-full bg-kopi-900 px-5 py-2.5 text-sm font-bold text-krem-100 transition hover:bg-kopi-800"
              >
                Buka panduan Espresso
              </Link>
              <Link
                href="/catatan"
                className="rounded-full bg-krem-200 px-5 py-2.5 text-sm font-bold text-kopi-800 transition hover:bg-krem-300"
              >
                Catat hasil seduh ini
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex gap-2">
        {history.length > 0 ? (
          <button
            type="button"
            onClick={back}
            className="rounded-full border-2 border-kopi-800 px-5 py-2 text-sm font-bold text-kopi-800 transition hover:bg-krem-200"
          >
            ← Kembali
          </button>
        ) : null}
        {currentId !== doctorStart ? (
          <button
            type="button"
            onClick={restart}
            className="rounded-full border-2 border-krem-300 px-5 py-2 text-sm font-bold text-kopi-700 transition hover:bg-krem-200"
          >
            ↺ Ulangi dari awal
          </button>
        ) : null}
      </div>
    </div>
  );
}
