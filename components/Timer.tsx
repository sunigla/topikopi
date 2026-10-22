"use client";

import { useEffect, useRef, useState } from "react";

function format(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function beep() {
  try {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch {
    // Bunyi hanya bonus — abaikan bila browser menolak.
  }
}

export default function Timer({
  seconds,
  label,
}: {
  seconds: number;
  label?: string;
}) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    setRemaining(seconds);
    setRunning(false);
    doneRef.current = false;
  }, [seconds]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setRunning(false);
          if (!doneRef.current) {
            doneRef.current = true;
            beep();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const finished = remaining === 0;
  const pct = seconds > 0 ? Math.round((remaining / seconds) * 100) : 0;

  return (
    <div className="rounded-2xl border-2 border-kopi-800 bg-kopi-900 p-4 text-center text-krem-100">
      {label ? (
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-krem-300">
          {label}
        </p>
      ) : null}
      <p
        className={`font-mono text-5xl font-bold tabular-nums ${
          finished ? "text-bakar-500" : ""
        }`}
        aria-live="polite"
      >
        {format(remaining)}
      </p>
      <div className="mx-auto mt-3 h-2 w-full max-w-xs overflow-hidden rounded-full bg-kopi-700">
        <div
          className="h-full rounded-full bg-bakar-500 transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
      {finished ? (
        <p className="mt-2 text-sm font-bold text-bakar-500">
          ⏰ Waktu habis!
        </p>
      ) : null}
      <div className="mt-3 flex items-center justify-center gap-2">
        {!running && !finished ? (
          <button
            type="button"
            onClick={() => setRunning(true)}
            className="rounded-full bg-bakar-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-bakar-600"
          >
            ▶ Mulai
          </button>
        ) : null}
        {running ? (
          <button
            type="button"
            onClick={() => setRunning(false)}
            className="rounded-full bg-krem-200 px-5 py-2 text-sm font-bold text-kopi-900 transition hover:bg-krem-300"
          >
            ⏸ Jeda
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => {
            setRunning(false);
            setRemaining(seconds);
            doneRef.current = false;
          }}
          className="rounded-full border border-krem-300 px-5 py-2 text-sm font-bold text-krem-100 transition hover:bg-kopi-800"
        >
          ↺ Reset
        </button>
      </div>
    </div>
  );
}
