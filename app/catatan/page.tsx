import type { Metadata } from "next";
import NotesApp from "@/components/NotesApp";

export const metadata: Metadata = {
  title: "Catatan Saya — TopiKopi",
  description:
    "Catatan seduh pribadi: tanggal, minuman, biji, penilaian rasa, dan catatan — tersimpan hanya di perangkat ini.",
};

export default function NotesPage() {
  return (
    <div>
      <header className="rounded-3xl bg-kopi-800 px-6 py-7 text-krem-100 shadow-md">
        <p className="text-4xl" aria-hidden>
          📓
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">Catatan Saya</h1>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-krem-200">
          Jurnal seduh sederhana untuk mengingat gelas yang enak (dan yang
          gagal). Biji apa, minuman apa, nilainya berapa — besok-besok tinggal
          meniru yang terbaik.
        </p>
        <p className="mt-3 inline-block rounded-full bg-kopi-950/60 px-3 py-1.5 text-xs font-bold text-krem-200">
          🔒 Catatan tersimpan hanya di perangkat ini (browser), tidak dikirim
          ke server dan tidak dibagikan ke siapa pun.
        </p>
      </header>
      <div className="mt-6">
        <NotesApp />
      </div>
    </div>
  );
}
