import type { Metadata } from "next";
import DoctorWizard from "@/components/DoctorWizard";

export const metadata: Metadata = {
  title: "Dokter Kopi — TopiKopi",
  description:
    "Diagnosis interaktif masalah seduh: kopi asam, pahit, encer, crema tipis, susu tidak foam, aliran terlalu cepat atau lambat — plus saran perbaikannya.",
};

export default function DoctorPage() {
  return (
    <div>
      <header className="rounded-3xl bg-bakar-500 px-6 py-7 text-white shadow-md">
        <p className="text-4xl" aria-hidden>
          🩺
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">Dokter Kopi</h1>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/90">
          Gelas terakhir kurang pas? Ceritakan keluhannya — Dokter Kopi
          bertanya 1–2 hal singkat, lalu memberi diagnosis penyebab dan saran
          perbaikan konkret berdasarkan panduan mesin LaHome 5-in-1 dan standar
          espresso umum.
        </p>
      </header>
      <div className="mt-6">
        <DoctorWizard />
      </div>
    </div>
  );
}
