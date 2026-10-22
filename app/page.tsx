import Link from "next/link";
import { guides } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <section className="rounded-3xl bg-kopi-900 px-6 py-10 text-center text-krem-100 shadow-md">
        <p className="text-5xl" aria-hidden>
          🎩☕
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
          Topi<span className="text-bakar-500">Kopi</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-krem-200">
          Topik Kopi — dituntun seduh, selangkah demi selangkah.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-krem-300">
          Asisten seduh untuk mesin espresso rumahan (awalnya untuk LaHome
          5-in-1): panduan interaktif dengan timer, tanpa menebak-nebak lagi.
        </p>
      </section>

      <h2 className="mt-8 text-xl font-extrabold text-kopi-900">
        Mau seduh apa hari ini?
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/panduan/${g.slug}`}
            className="group rounded-3xl border border-krem-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-4xl" aria-hidden>
              {g.emoji}
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-kopi-900 group-hover:text-bakar-600">
              {g.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-kopi-700">
              {g.tagline}
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-kopi-500">
              ⏱ {g.minutes} · {g.steps.length} langkah
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="/dokter"
          className="rounded-3xl bg-bakar-500 p-5 text-white shadow-sm transition hover:bg-bakar-600"
        >
          <p className="text-3xl" aria-hidden>
            🩺
          </p>
          <h3 className="mt-2 text-lg font-extrabold">Dokter Kopi</h3>
          <p className="mt-1 text-sm leading-relaxed text-white/90">
            Kopi asam, pahit, encer, crema tipis, susu nggak foam? Jawab 1–2
            pertanyaan, keluar diagnosis + cara memperbaikinya.
          </p>
        </Link>
        <Link
          href="/catatan"
          className="rounded-3xl bg-kopi-800 p-5 text-krem-100 shadow-sm transition hover:bg-kopi-700"
        >
          <p className="text-3xl" aria-hidden>
            📓
          </p>
          <h3 className="mt-2 text-lg font-extrabold">Catatan Saya</h3>
          <p className="mt-1 text-sm leading-relaxed text-krem-200">
            Simpan hasil tiap seduh: biji, minuman, nilai rasa. Tersimpan hanya
            di perangkat ini, tanpa akun.
          </p>
        </Link>
      </div>

      <Link
        href="/resep"
        className="mt-4 block rounded-3xl border-2 border-dashed border-kopi-300 bg-krem-50 p-5 text-center transition hover:bg-krem-200"
      >
        <span className="font-extrabold text-kopi-900">📏 Resep Dasar</span>
        <span className="mt-1 block text-sm text-kopi-700">
          Takaran & rasio standar semua minuman dalam satu halaman ringkas.
        </span>
      </Link>

      <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-kopi-900">
          Sebelum seduh pertama kali
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-kopi-950">
          <li>
            Lakukan <strong>flushing internal</strong>: pasang portafilter tanpa
            kopi, purge steam wand ±30 detik, lalu alirkan tombol 2-CUP sekitar
            5 kali sampai air bersih dan tidak berbau.
          </li>
          <li>
            <strong>Jangan pernah</strong> menjalankan mesin dengan tangki
            kosong — pompa bisa rusak.
          </li>
          <li>
            Sisakan ruang ±3 cm di samping/belakang mesin dan ±15 cm di atasnya.
          </li>
        </ul>
      </section>
    </div>
  );
}
