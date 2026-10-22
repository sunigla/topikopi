import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resep Dasar — TopiKopi",
  description:
    "Takaran dan rasio standar espresso, latte, cappuccino, dan cold brew dalam satu halaman ringkas.",
};

const standards = [
  {
    label: "Ekstraksi espresso",
    value: "25–30 detik, rasio 1:2 (kopi : hasil seduh)",
  },
  {
    label: "Takaran filter LaHome",
    value: "1 sendok untuk 1-CUP, 2 sendok untuk 2-CUP",
  },
  {
    label: "Susu steam",
    value: "±100 ml, dingin ±5°C, di-steam sampai ±60°C",
  },
  {
    label: "Latte",
    value: "Espresso : susu steam ±1 : 3, foam tipis",
  },
  {
    label: "Cappuccino",
    value: "1/3 espresso : 1/3 susu : 1/3 foam",
  },
  {
    label: "Cold brew (fungsi mesin)",
    value: "Es batu di tangki air, tekan tombol Cold Brew",
  },
  {
    label: "Tamping",
    value: "Rata dan padat — terlalu kuat = lambat & pahit, terlalu ringan = encer",
  },
  {
    label: "Gilingan",
    value: "Halus standar espresso; terlalu kasar = encer, terlalu halus = mampet",
  },
];

export default function RecipesPage() {
  return (
    <div>
      <header className="rounded-3xl bg-kopi-900 px-6 py-7 text-krem-100 shadow-md">
        <p className="text-4xl" aria-hidden>
          📏
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">Resep Dasar</h1>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-krem-200">
          Semua takaran & rasio standar dalam satu tempat — patokan cepat
          sebelum mulai menyeduh.
        </p>
      </header>

      <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-kopi-900">Standar umum</h2>
        <dl className="mt-3 space-y-2.5">
          {standards.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-0.5 border-b border-krem-200 pb-2.5 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <dt className="text-sm font-bold text-kopi-700">{s.label}</dt>
              <dd className="text-sm font-semibold sm:text-right">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <section
            key={g.slug}
            className="rounded-3xl border border-krem-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-extrabold text-kopi-900">
              {g.emoji} {g.name}
            </h2>
            <dl className="mt-3 space-y-2">
              {g.recipe.map((r) => (
                <div key={r.label}>
                  <dt className="text-xs font-bold uppercase tracking-wide text-kopi-500">
                    {r.label}
                  </dt>
                  <dd className="text-sm font-semibold">{r.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href={`/panduan/${g.slug}`}
              className="mt-4 inline-block rounded-full bg-kopi-900 px-4 py-2 text-sm font-bold text-krem-100 transition hover:bg-kopi-800"
            >
              Ikuti panduannya →
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
