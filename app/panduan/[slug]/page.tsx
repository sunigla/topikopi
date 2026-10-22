import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/lib/data";
import StepGuide from "@/components/StepGuide";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Panduan tidak ditemukan — TopiKopi" };
  return {
    title: `Panduan ${guide.name} — TopiKopi`,
    description: guide.description,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const others = guides.filter((g) => g.slug !== guide.slug);

  return (
    <div>
      <Link
        href="/"
        className="text-sm font-bold text-kopi-700 hover:text-bakar-600"
      >
        ← Semua panduan
      </Link>

      <header className="mt-3 rounded-3xl bg-kopi-900 px-6 py-7 text-krem-100 shadow-md">
        <p className="text-4xl" aria-hidden>
          {guide.emoji}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">{guide.name}</h1>
        <p className="mt-1 text-sm font-semibold text-krem-300">
          {guide.tagline}
        </p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-krem-200">
          {guide.description}
        </p>
        <p className="mt-3 text-xs font-bold uppercase tracking-wide text-krem-300">
          ⏱ {guide.minutes} · {guide.steps.length} langkah
        </p>
      </header>

      <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-kopi-900">
          Bahan & takaran
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
          {guide.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-3xl border border-krem-200 bg-krem-50 p-6">
        <h2 className="text-lg font-extrabold text-kopi-900">Resep dasar</h2>
        <dl className="mt-3 space-y-2.5">
          {guide.recipe.map((r) => (
            <div
              key={r.label}
              className="flex flex-col gap-0.5 border-b border-krem-200 pb-2.5 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <dt className="text-sm font-bold text-kopi-700">{r.label}</dt>
              <dd className="text-sm font-semibold text-kopi-950 sm:text-right">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <StepGuide guide={guide} />

      <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-kopi-900">Tips</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {guide.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed">
          Hasilnya kurang pas? Cek di{" "}
          <Link href="/dokter" className="font-bold text-bakar-600 underline">
            Dokter Kopi
          </Link>{" "}
          — dan jangan lupa simpan hasilnya di{" "}
          <Link href="/catatan" className="font-bold text-bakar-600 underline">
            Catatan Saya
          </Link>
          .
        </p>
      </section>

      <nav className="mt-6 flex flex-wrap gap-2">
        {others.map((g) => (
          <Link
            key={g.slug}
            href={`/panduan/${g.slug}`}
            className="rounded-full bg-krem-200 px-4 py-2 text-sm font-bold text-kopi-800 transition hover:bg-krem-300"
          >
            {g.emoji} {g.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
