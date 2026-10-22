import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TopiKopi — Asisten Seduh Kopi",
  description:
    "Topik Kopi: panduan seduh interaktif langkah demi langkah untuk mesin espresso rumahan (LaHome 5-in-1), lengkap dengan timer, Dokter Kopi, resep dasar, dan catatan seduh pribadi.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-krem-100 text-kopi-950 antialiased">
        <header className="sticky top-0 z-20 bg-kopi-900 text-krem-100 shadow-md">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="Logo TopiKopi"
                width={512}
                height={512}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-lg font-extrabold tracking-tight">
                Topi<span className="text-bakar-500">Kopi</span>
              </span>
            </Link>
            <nav className="flex items-center gap-3 text-[13px] font-semibold sm:gap-4 sm:text-sm">
              <Link href="/resep" className="hover:text-krem-300">
                Resep
              </Link>
              <Link href="/dokter" className="hover:text-krem-300">
                Dokter Kopi
              </Link>
              <Link href="/catatan" className="hover:text-krem-300">
                Catatan
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6">{children}</main>
        <footer className="border-t border-krem-200 bg-krem-50 py-6">
          <Image
            src="/logo-wordmark.png"
            alt="TopiKopi"
            width={1619}
            height={695}
            className="mx-auto mb-4 h-14 w-auto"
          />
          <p className="mx-auto max-w-3xl px-4 text-center text-xs leading-relaxed text-kopi-500">
            TopiKopi — Topik Kopi. Panduan awalnya disusun untuk mesin espresso LaHome
            5-in-1 (20 bar, steam wand, tangki 1,8 L); prinsip seduhnya berlaku umum
            untuk mesin espresso rumahan sejenis. Ikuti juga buku panduan mesinmu.
          </p>
        </footer>
      </body>
    </html>
  );
}
