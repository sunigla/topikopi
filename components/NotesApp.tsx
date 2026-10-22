"use client";

import { useEffect, useState } from "react";
import { guides } from "@/lib/data";

interface Note {
  id: string;
  date: string;
  drink: string;
  beans: string;
  rating: number;
  text: string;
}

const STORAGE_KEY = "topikopi-catatan";

function loadNotes(): Note[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Note[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function todayISO(): string {
  const d = new Date();
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export default function NotesApp() {
  const [ready, setReady] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [date, setDate] = useState(todayISO());
  const [drink, setDrink] = useState(guides[0].name);
  const [beans, setBeans] = useState("");
  const [rating, setRating] = useState(4);
  const [text, setText] = useState("");

  useEffect(() => {
    setNotes(loadNotes());
    setReady(true);
  }, []);

  function persist(next: Note[]) {
    setNotes(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Penyimpanan penuh/ditolak browser — daftar tetap tampil di sesi ini.
    }
  }

  function addNote(e: React.FormEvent) {
    e.preventDefault();
    const note: Note = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      date,
      drink,
      beans: beans.trim(),
      rating,
      text: text.trim(),
    };
    const next = [note, ...notes].sort((a, b) =>
      b.date.localeCompare(a.date),
    );
    persist(next);
    setBeans("");
    setText("");
    setRating(4);
  }

  function removeNote(id: string) {
    persist(notes.filter((n) => n.id !== id));
  }

  return (
    <div>
      <form
        onSubmit={addNote}
        className="rounded-3xl bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-extrabold text-kopi-900">
          Tambah catatan seduh
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold text-kopi-700">Tanggal</span>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full rounded-xl border border-krem-300 bg-krem-50 px-3 py-2.5 text-sm outline-none focus:border-bakar-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-kopi-700">Minuman</span>
            <select
              value={drink}
              onChange={(e) => setDrink(e.target.value)}
              className="mt-1 w-full rounded-xl border border-krem-300 bg-krem-50 px-3 py-2.5 text-sm outline-none focus:border-bakar-500"
            >
              {guides.map((g) => (
                <option key={g.slug} value={g.name}>
                  {g.name}
                </option>
              ))}
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
        </div>
        <label className="mt-4 block">
          <span className="text-sm font-bold text-kopi-700">
            Biji kopi (nama / roastery)
          </span>
          <input
            type="text"
            value={beans}
            onChange={(e) => setBeans(e.target.value)}
            placeholder="Misal: Blend arabika-robusta bonus LaHome"
            className="mt-1 w-full rounded-xl border border-krem-300 bg-krem-50 px-3 py-2.5 text-sm outline-none focus:border-bakar-500"
          />
        </label>
        <div className="mt-4">
          <span className="text-sm font-bold text-kopi-700">
            Penilaian rasa
          </span>
          <div className="mt-1.5 flex gap-1.5" role="radiogroup" aria-label="Penilaian rasa 1 sampai 5">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={rating === n}
                onClick={() => setRating(n)}
                className={`h-11 w-11 rounded-full text-lg transition ${
                  n <= rating
                    ? "bg-bakar-500 text-white"
                    : "bg-krem-200 text-kopi-500 hover:bg-krem-300"
                }`}
              >
                ★
              </button>
            ))}
            <span className="ml-2 self-center text-sm font-bold text-kopi-700">
              {rating}/5
            </span>
          </div>
        </div>
        <label className="mt-4 block">
          <span className="text-sm font-bold text-kopi-700">Catatan</span>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="Misal: ekstraksi 27 detik, crema tebal, rasa seimbang. Besok coba tamping sedikit lebih ringan."
            className="mt-1 w-full rounded-xl border border-krem-300 bg-krem-50 px-3 py-2.5 text-sm outline-none focus:border-bakar-500"
          />
        </label>
        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-kopi-900 py-3 font-bold text-krem-100 transition hover:bg-kopi-800 sm:w-auto sm:px-8"
        >
          Simpan catatan
        </button>
      </form>

      <section className="mt-8">
        <h2 className="text-lg font-extrabold text-kopi-900">
          Catatan tersimpan {ready && notes.length > 0 ? `(${notes.length})` : ""}
        </h2>
        {!ready ? (
          <p className="mt-3 text-sm text-kopi-700">Memuat catatan…</p>
        ) : notes.length === 0 ? (
          <p className="mt-3 rounded-3xl border-2 border-dashed border-krem-300 bg-krem-50 p-6 text-center text-sm leading-relaxed text-kopi-700">
            Belum ada catatan. Seduh gelas pertamamu pakai salah satu panduan,
            lalu simpan hasilnya di sini — lama-lama kamu punya peta rasa
            sendiri.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {notes.map((n) => (
              <li
                key={n.id}
                className="rounded-3xl border border-krem-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-extrabold text-kopi-900">
                      {n.drink}{" "}
                      <span className="ml-1 text-bakar-500" aria-label={`nilai ${n.rating} dari 5`}>
                        {"★".repeat(n.rating)}
                        <span className="text-krem-300">
                          {"★".repeat(5 - n.rating)}
                        </span>
                      </span>
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-kopi-500">
                      {n.date}
                      {n.beans ? ` · ${n.beans}` : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeNote(n.id)}
                    className="shrink-0 rounded-full bg-krem-200 px-3 py-1.5 text-xs font-bold text-kopi-800 transition hover:bg-red-100 hover:text-red-700"
                    aria-label={`Hapus catatan ${n.drink} tanggal ${n.date}`}
                  >
                    Hapus
                  </button>
                </div>
                {n.text ? (
                  <p className="mt-2.5 text-sm leading-relaxed">{n.text}</p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
