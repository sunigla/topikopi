"use client";

import { useState } from "react";
import type { Guide } from "@/lib/data";
import Timer from "./Timer";

export default function StepGuide({ guide }: { guide: Guide }) {
  const [idx, setIdx] = useState(0);
  const total = guide.steps.length;
  const step = guide.steps[idx];
  const isFirst = idx === 0;
  const isLast = idx === total - 1;

  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between text-sm font-semibold text-kopi-700">
        <span>
          Langkah {idx + 1} dari {total}
        </span>
        <span>{Math.round(((idx + 1) / total) * 100)}%</span>
      </div>
      <div className="mb-5 h-2.5 w-full overflow-hidden rounded-full bg-krem-200">
        <div
          className="h-full rounded-full bg-bakar-500 transition-all duration-300"
          style={{ width: `${((idx + 1) / total) * 100}%` }}
        />
      </div>

      <div
        key={idx}
        className="rounded-3xl border border-krem-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-2xl font-extrabold leading-snug text-kopi-900">
          {step.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-kopi-950 sm:text-lg">
          {step.body}
        </p>
        {step.timerSeconds ? (
          <div className="mt-5">
            <Timer seconds={step.timerSeconds} label={step.timerLabel} />
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="button"
          disabled={isFirst}
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          className="rounded-full border-2 border-kopi-800 px-5 py-2.5 font-bold text-kopi-800 transition enabled:hover:bg-krem-200 disabled:opacity-30"
        >
          ← Sebelumnya
        </button>
        {!isLast ? (
          <button
            type="button"
            onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
            className="rounded-full bg-kopi-900 px-6 py-2.5 font-bold text-krem-100 transition hover:bg-kopi-800"
          >
            Berikutnya →
          </button>
        ) : (
          <span className="rounded-full bg-bakar-500 px-6 py-2.5 font-bold text-white">
            🎉 Selesai — selamat menikmati!
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-1.5">
        {guide.steps.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Ke langkah ${i + 1}: ${s.title}`}
            onClick={() => setIdx(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === idx
                ? "w-7 bg-bakar-500"
                : i < idx
                  ? "w-2.5 bg-kopi-500"
                  : "w-2.5 bg-krem-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
