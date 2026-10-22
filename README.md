# TopiKopi ☕🎩

**TopiKopi** — *Topik Kopi*: asisten seduh kopi publik berbasis web. Pengunjung
dituntun seduh **selangkah demi selangkah** dengan timer bawaan, awalnya disusun
untuk mesin espresso **LaHome 5-in-1** (20 bar, steam wand, tangki 1,8 L) —
prinsipnya berlaku umum untuk mesin espresso rumahan sejenis.

Seluruh antarmuka berbahasa Indonesia dan dirancang *mobile-first* (target
utama: dibuka dari HP).

## Fitur

- **Beranda** — pilihan 4 panduan minuman + pintu masuk ke Dokter Kopi,
  Resep Dasar, dan Catatan Saya, plus ringkasan persiapan/flushing mesin.
- **Panduan seduh interaktif** — Espresso, Latte, Cappuccino, Cold Brew.
  Tiap panduan berisi bahan & takaran, kartu resep dasar, lalu mode
  langkah-demi-langkah (satu langkah besar per layar, tombol
  Sebelumnya/Berikutnya, indikator progres). Langkah yang butuh waktu punya
  **timer hitung mundur** (mulai/jeda/reset + bunyi penanda selesai):
  ekstraksi espresso 27 detik (target 25–30 detik, rasio 1:2), purge steam
  5 detik, steam susu ±45–50 detik (patokan akhir suhu ±60°C), dan perkiraan
  ekstraksi dingin cold brew 10 menit.
- **Dokter Kopi** 🩺 — diagnosis interaktif berbentuk pohon keputusan:
  pilih keluhan (terlalu asam, terlalu pahit, encer/hambar, crema tipis,
  susu tidak foam, aliran terlalu cepat, aliran terlalu lambat/tidak keluar),
  jawab 1–2 pertanyaan lanjutan, lalu dapatkan diagnosis penyebab + saran
  perbaikan konkret.
- **Resep Dasar** 📏 — takaran & rasio standar semua minuman dalam satu
  halaman ringkas.
- **Catatan Saya** 📓 — jurnal seduh pribadi (tanggal, minuman, biji,
  penilaian rasa 1–5, catatan) yang tersimpan di **localStorage browser** —
  hanya di perangkat masing-masing pengunjung, tanpa akun dan tanpa server.

Konten panduan mengikuti dokumen *Panduan Seduh Pertama — LaHome 5-in-1*
(takaran 1–2 sendok per filter, susu ±100 ml pada ±5°C di-steam sampai
±60°C, cold brew dengan es batu di tangki, langkah troubleshooting resmi),
ditambah standar umum espresso (ekstraksi 25–30 detik, rasio 1:2, komposisi
cappuccino 1/3–1/3–1/3).

## Teknologi

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (tema warna kopi: cokelat tua, krem, oranye bakar)
- Tanpa database/backend — konten statis di `lib/data.ts`, catatan pribadi
  di localStorage

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Lalu buka http://localhost:3000.

Perintah lain:

```bash
npm run build   # build produksi
npm run start   # jalankan hasil build
```

## Struktur route

| Route | Isi |
| --- | --- |
| `/` | Beranda |
| `/panduan/espresso` | Panduan interaktif Espresso |
| `/panduan/latte` | Panduan interaktif Latte |
| `/panduan/cappuccino` | Panduan interaktif Cappuccino |
| `/panduan/cold-brew` | Panduan interaktif Cold Brew |
| `/dokter` | Dokter Kopi (diagnosis interaktif) |
| `/resep` | Resep Dasar (takaran & rasio) |
| `/catatan` | Catatan Saya (localStorage) |

## Rencana deploy

1. Push repo ini ke GitHub (akun `sunigla`, repo `topikopi`).
2. Di [Vercel](https://vercel.com), *Import Project* dari repo tersebut —
   Next.js terdeteksi otomatis, tanpa konfigurasi khusus (build command
   `next build` bawaan). Setiap push ke branch `main` akan men-deploy
   ulang secara otomatis.
3. Setelah situs live di alamat `*.vercel.app`, beli domain **topikopi.id**
   (saat terakhir dicek, 22 Okt 2026, masih tersedia) lalu sambungkan
   sebagai *custom domain* di pengaturan Vercel — Vercel akan memberi
   catatan DNS yang perlu dipasang di registrar.
