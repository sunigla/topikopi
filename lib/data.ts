// Konten TopiKopi. Angka dan langkah mengikuti "Panduan Seduh Pertama — LaHome 5-in-1"
// (flushing, takaran 1-2 sendok, steam susu ±100 ml pada ±5°C sampai ±60°C,
// cold brew dengan es di tangki, troubleshooting resmi) ditambah standar umum
// espresso (ekstraksi 25–30 detik, rasio 1:2).

export interface GuideStep {
  title: string;
  body: string;
  timerSeconds?: number;
  timerLabel?: string;
}

export interface RecipeItem {
  label: string;
  value: string;
}

export interface Guide {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  minutes: string;
  ingredients: string[];
  recipe: RecipeItem[];
  steps: GuideStep[];
  tips: string[];
}

export const guides: Guide[] = [
  {
    slug: "espresso",
    name: "Espresso",
    emoji: "☕",
    tagline: "Basis semua minuman kopi susu",
    description:
      "Satu shot pekat dari mesin LaHome 5-in-1: takaran pas, tamping rata, ekstraksi 25–30 detik dengan rasio 1:2.",
    minutes: "±5 menit",
    ingredients: [
      "Kopi gilingan halus standar espresso: 1 sendok (filter 1-CUP) atau 2 sendok (filter 2-CUP)",
      "Air bersih di tangki (jangan pernah menjalankan mesin dengan tangki kosong)",
      "Cangkir espresso yang sudah dihangatkan",
    ],
    recipe: [
      { label: "Rasio standar", value: "1:2 (misal 18 g kopi → ±36 g hasil seduh)" },
      { label: "Waktu ekstraksi", value: "25–30 detik" },
      { label: "Takaran mesin", value: "1 sdm untuk 1-CUP, 2 sdm untuk 2-CUP" },
      { label: "Patokan volume mesin", value: "1-CUP ±12–22 detik, 2-CUP ±20–51 detik (di luar ±3 detik awal), atur dengan tekan-tahan tombol" },
    ],
    steps: [
      {
        title: "Cek mesin & hangatkan cangkir",
        body: "Pastikan tangki air terisi dan terpasang pas. Alirkan air panas ke cangkir kosong untuk menghangatkannya — cangkir hangat menjaga espresso tidak cepat dingin.",
      },
      {
        title: "Isi kopi ke portafilter",
        body: "Masukkan 1 sendok kopi untuk filter 1-CUP atau 2 sendok untuk filter 2-CUP. Ratakan permukaan bubuk dengan jari atau distributor.",
      },
      {
        title: "Tamping: rata dan padat",
        body: "Tekan bubuk sampai rata dan padat. Ingat patokannya: terlalu kuat → aliran lambat dan pahit; terlalu ringan → hasil encer.",
      },
      {
        title: "Kunci portafilter",
        body: "Pasang portafilter dari posisi UNLOCK, putar sampai posisi LOCK dan kencang. Sisa bubuk di bibir filter bisa bikin bocor dari pinggir — bersihkan dulu kalau ada.",
      },
      {
        title: "Ekstraksi",
        body: "Tekan tombol 1-CUP / 2-CUP. Jalankan timer: target ekstraksi standar 25–30 detik dengan hasil ±2 kali berat kopi (rasio 1:2). Aliran yang bagus keluar seperti ekor tikus: tidak menetes putus-putus, tidak juga mengucur deras.",
        timerSeconds: 27,
        timerLabel: "Ekstraksi espresso (target 25–30 detik)",
      },
      {
        title: "Nilai hasilnya, lalu bersihkan",
        body: "Cicipi: seimbang, tidak asam menusuk, tidak pahit gosong. Setelah selesai, buang ampas, flush air panas lewat group head, dan lap portafilter — kebiasaan tiap pakai.",
      },
    ],
    tips: [
      "Bubuk terlalu kasar = ekstraksi encer; terlalu halus = mampet. Mulai dari gilingan halus standar espresso, lalu sesuaikan sedikit demi sedikit.",
      "Volume ekstraksi bisa diatur: tekan-tahan tombol 1-CUP/2-CUP, lepas saat volume di cangkir sudah pas.",
      "Reset setelan pabrik: saat standby, tahan 1-CUP + 2-CUP bersamaan 3 detik sampai bunyi beep dan lampu berkedip 3 kali.",
    ],
  },
  {
    slug: "latte",
    name: "Latte",
    emoji: "🥛",
    tagline: "Espresso + susu steam lembut, foam tipis",
    description:
      "Latte versi LaHome: shot espresso ditambah susu yang di-steam sampai ±60°C. Susu dingin dari kulkas adalah kuncinya.",
    minutes: "±7 menit",
    ingredients: [
      "1 shot espresso (ikuti panduan Espresso)",
      "±100 ml susu full cream dingin, langsung dari kulkas (±5°C)",
      "Milk jug (atau gelas tahan panas)",
      "Cangkir besar",
    ],
    recipe: [
      { label: "Komposisi", value: "1 bagian espresso : ±3 bagian susu steam, foam tipis" },
      { label: "Susu", value: "±100 ml, dingin ±5°C langsung dari kulkas" },
      { label: "Suhu steam akhir", value: "±60°C (jug hangat-panas di tangan, jangan mendidih)" },
      { label: "Espresso", value: "Rasio 1:2, ekstraksi 25–30 detik" },
    ],
    steps: [
      {
        title: "Seduh espresso dulu",
        body: "Buat 1 shot espresso langsung di cangkir besar. Ikuti panduan Espresso bila perlu — latte yang enak mulai dari shot yang benar.",
        timerSeconds: 27,
        timerLabel: "Ekstraksi espresso (target 25–30 detik)",
      },
      {
        title: "Siapkan susu dingin",
        body: "Tuang ±100 ml susu full cream dingin (±5°C, langsung dari kulkas) ke milk jug. Susu dingin memberi waktu steam lebih lama dan buih lebih stabil.",
      },
      {
        title: "Nyalakan steam & purge",
        body: "Tekan tombol STEAM dan tunggu uap siap. Purge dulu: semprotkan uap sebentar ke wadah kosong untuk membuang air kondensasi, baru masukkan ujung wand ke susu.",
        timerSeconds: 5,
        timerLabel: "Purge steam wand",
      },
      {
        title: "Steam susu sampai ±60°C",
        body: "Posisikan ujung wand sedikit di bawah permukaan susu untuk memasukkan udara di awal, lalu tenggelamkan sedikit agar susu berputar. Hentikan di ±60°C — jug terasa hangat-panas di tangan, jangan sampai mendidih. Timer ini perkiraan untuk 100 ml susu; patokan utamanya tetap suhu.",
        timerSeconds: 45,
        timerLabel: "Perkiraan waktu steam 100 ml susu",
      },
      {
        title: "Tuang & sajikan",
        body: "Ketuk jug pelan ke meja dan putar susu sampai mengkilap seperti cat basah, lalu tuang ke espresso dengan gerakan memutar. Foam latte tipis saja — susunya yang dominan.",
      },
      {
        title: "Wajib: bersihkan steam wand sekarang",
        body: "Langsung semprotkan uap sebentar dan lap wand dengan kain lembap. Susu yang mengering di wand = penyebab utama mampet dan susu tidak berbusa di pemakaian berikutnya. Catatan: setelah steaming, alirkan air panas sebentar sebelum menyeduh espresso lagi agar suhu boiler stabil.",
        timerSeconds: 5,
        timerLabel: "Purge akhir steam wand",
      },
    ],
    tips: [
      "Tidak ada buih? Cek dua hal dari panduan resmi: wand kotor/sisa susu kering, atau susu kurang dingin.",
      "Susu full cream paling mudah di-steam; susu skim berbusa banyak tapi cepat pecah.",
    ],
  },
  {
    slug: "cappuccino",
    name: "Cappuccino",
    emoji: "🍶",
    tagline: "Sepertiga espresso, sepertiga susu, sepertiga foam",
    description:
      "Cappuccino klasik memakai shot dan susu yang sama dengan latte, bedanya udara yang dimasukkan saat steam lebih banyak — foam-nya tebal dan ringan.",
    minutes: "±7 menit",
    ingredients: [
      "1 shot espresso (ikuti panduan Espresso)",
      "±100 ml susu full cream dingin, langsung dari kulkas (±5°C)",
      "Milk jug (atau gelas tahan panas)",
      "Cangkir sedang",
      "Bubuk cokelat/kayu manis untuk taburan (opsional)",
    ],
    recipe: [
      { label: "Komposisi klasik", value: "1/3 espresso : 1/3 susu steam : 1/3 foam" },
      { label: "Susu", value: "±100 ml, dingin ±5°C langsung dari kulkas" },
      { label: "Suhu steam akhir", value: "±60°C (jug hangat-panas di tangan, jangan mendidih)" },
      { label: "Espresso", value: "Rasio 1:2, ekstraksi 25–30 detik" },
    ],
    steps: [
      {
        title: "Seduh espresso dulu",
        body: "Buat 1 shot espresso di cangkir sedang. Cappuccino yang seimbang mulai dari shot dengan rasio 1:2 dan ekstraksi 25–30 detik.",
        timerSeconds: 27,
        timerLabel: "Ekstraksi espresso (target 25–30 detik)",
      },
      {
        title: "Siapkan susu dingin",
        body: "Tuang ±100 ml susu full cream dingin (±5°C) ke milk jug. Untuk cappuccino kita akan mengembangkan volumenya dengan udara lebih banyak dibanding latte.",
      },
      {
        title: "Nyalakan steam & purge",
        body: "Tekan tombol STEAM, tunggu uap siap, lalu purge sebentar ke wadah kosong untuk membuang air kondensasi sebelum wand masuk ke susu.",
        timerSeconds: 5,
        timerLabel: "Purge steam wand",
      },
      {
        title: "Steam dengan udara lebih banyak",
        body: "Tahan ujung wand tepat di permukaan susu lebih lama (terdengar desis halus) supaya foam terbentuk tebal, lalu tenggelamkan sedikit untuk memanaskan sampai ±60°C. Hentikan sebelum mendidih — timer ini perkiraan untuk 100 ml susu.",
        timerSeconds: 50,
        timerLabel: "Perkiraan waktu steam cappuccino",
      },
      {
        title: "Tuang susu, tahan foam, lalu sendokkan foam",
        body: "Tuang susu ke espresso sambil menahan foam dengan sendok, lalu sendokkan foam tebal di atasnya sampai perbandingan espresso, susu, dan foam kira-kira sama besar. Taburi bubuk cokelat bila suka.",
      },
      {
        title: "Wajib: bersihkan steam wand sekarang",
        body: "Semprotkan uap sebentar dan lap wand dengan kain lembap selagi sisa susu belum mengering. Susu kering di wand adalah penyebab mampet nomor satu.",
        timerSeconds: 5,
        timerLabel: "Purge akhir steam wand",
      },
    ],
    tips: [
      "Foam cappuccino yang bagus ringan dan tidak bergelembung besar — ketuk jug ke meja untuk memecah gelembung besar sebelum menuang.",
      "Setelah steaming, alirkan air panas sebentar untuk menstabilkan suhu boiler sebelum seduh berikutnya.",
    ],
  },
  {
    slug: "cold-brew",
    name: "Cold Brew",
    emoji: "🧊",
    tagline: "Ekstraksi dingin menyegarkan dari fungsi Cold Brew",
    description:
      "LaHome 5-in-1 punya fungsi Cold Brew tersendiri: cukup tambahkan es batu ke tangki air, tekan tombolnya, dan biarkan mesin mengekstraksi dingin.",
    minutes: "±15 menit + dinginkan",
    ingredients: [
      "Kopi gilingan halus standar espresso: 1 sendok (1-CUP) atau 2 sendok (2-CUP)",
      "Air bersih dingin untuk tangki",
      "Es batu — sebagian masuk tangki air, sebagian untuk gelas saji",
      "Gelas tinggi",
      "Susu atau gula aren cair (opsional, sesuai selera)",
    ],
    recipe: [
      { label: "Cara mesin", value: "Es batu di tangki air + tekan tombol Cold Brew" },
      { label: "Takaran kopi", value: "1 sdm untuk 1-CUP, 2 sdm untuk 2-CUP" },
      { label: "Penyajian", value: "Di gelas berisi es batu penuh; tambah susu/gula aren bila suka" },
      { label: "Penyimpanan", value: "Hasil ekstraksi dingin tahan ±2 hari di kulkas dalam wadah tertutup" },
    ],
    steps: [
      {
        title: "Siapkan tangki: air dingin + es batu",
        body: "Isi tangki dengan air bersih dingin, lalu masukkan es batu ke tangki air sesuai cara fungsi Cold Brew di panduan mesin. Pastikan tangki terpasang pas dan tidak kosong.",
      },
      {
        title: "Isi kopi & tamping ringan-sedang",
        body: "Masukkan kopi sesuai takaran filter (1 atau 2 sendok), ratakan, dan tamping sampai padat merata — jangan berlebihan agar aliran dingin tetap lancar.",
      },
      {
        title: "Kunci portafilter",
        body: "Pasang portafilter dari UNLOCK ke LOCK sampai kencang, dan taruh gelas tinggi berisi es batu di bawah outlet.",
      },
      {
        title: "Tekan tombol Cold Brew",
        body: "Tekan tombol Cold Brew dan biarkan mesin mengekstraksi dengan air dingin. Proses tetes dingin berjalan lebih lambat dari espresso panas — jalankan timer tunggu ini, dan jadikan indikator mesin sebagai patokan akhir.",
        timerSeconds: 600,
        timerLabel: "Perkiraan waktu ekstraksi dingin (ikuti juga indikator mesin)",
      },
      {
        title: "Sajikan & sesuaikan rasa",
        body: "Aduk rata. Cicipi dulu sebelum menambah apa pun: tambahkan susu untuk versi creamy atau gula aren cair untuk versi manis. Hasilnya diminum dingin — jangan dipanaskan.",
      },
      {
        title: "Bersihkan seperti biasa",
        body: "Buang ampas, flush air panas lewat group head, lap portafilter, dan kosongkan drip tray. Sisa hasil seduh yang belum diminum simpan di kulkas dalam wadah tertutup.",
      },
    ],
    tips: [
      "Es kopi terasa encer? Biasanya es di gelas terlalu cepat mencair — pakai es batu yang besar/padat, atau kurangi air dan andalkan es di tangki.",
      "Fungsi Cold Brew berbeda dari espresso yang didinginkan: ekstraksinya memang memakai air dingin sejak awal, jadi rasa asamnya lebih lembut.",
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

// ---------- Dokter Kopi: pohon keputusan ----------

export interface DoctorOption {
  label: string;
  next: string;
}

export interface DoctorNode {
  id: string;
  kind: "question" | "result";
  title: string;
  body?: string;
  options?: DoctorOption[];
  diagnosis?: string;
  fixes?: string[];
}

export const doctorStart = "mulai";

export const doctorNodes: Record<string, DoctorNode> = {
  mulai: {
    id: "mulai",
    kind: "question",
    title: "Apa keluhan gelas kopimu?",
    body: "Pilih yang paling mendekati. Dokter Kopi akan bertanya 1–2 hal singkat lalu memberi diagnosis dan saran perbaikan.",
    options: [
      { label: "Kopi terlalu asam", next: "asam-q" },
      { label: "Kopi terlalu pahit", next: "pahit-q" },
      { label: "Kopi encer / hambar", next: "encer-q" },
      { label: "Crema tipis atau tidak ada", next: "crema-q" },
      { label: "Susu tidak mau foam", next: "susu-q" },
      { label: "Kopi keluar terlalu cepat", next: "cepat-r" },
      { label: "Kopi keluar terlalu lambat / tidak keluar", next: "lambat-q" },
    ],
  },
  "asam-q": {
    id: "asam-q",
    kind: "question",
    title: "Berapa lama ekstraksinya tadi?",
    body: "Hitung dari tombol ditekan sampai aliran berhenti.",
    options: [
      { label: "Kurang dari 20 detik", next: "asam-r1" },
      { label: "Sekitar 25–30 detik", next: "asam-r2" },
      { label: "Lebih dari 35 detik", next: "asam-r2" },
      { label: "Tidak menghitung / tidak tahu", next: "asam-r1" },
    ],
  },
  "asam-r1": {
    id: "asam-r1",
    kind: "result",
    title: "Diagnosis: ekstraksi kurang (under-extracted)",
    diagnosis:
      "Asam menusuk adalah tanda klasik ekstraksi terlalu singkat: air lewat terlalu cepat sehingga yang larut baru komponen asam saja. Penyebab tersering: gilingan terlalu kasar atau tamping terlalu ringan.",
    fixes: [
      "Haluskan gilingan sedikit demi sedikit — bubuk terlalu kasar = ekstraksi encer dan asam.",
      "Tamping lebih padat dan rata; tamping ringan membuat air menerobos cepat.",
      "Targetkan ekstraksi 25–30 detik dengan rasio 1:2, pakai timer di panduan Espresso.",
    ],
  },
  "asam-r2": {
    id: "asam-r2",
    kind: "result",
    title: "Diagnosis: kemungkinan suhu air atau biji",
    diagnosis:
      "Waktunya sudah di kisaran benar tapi tetap asam — biasanya karena air kurang panas (mesin belum stabil, misalnya habis steaming) atau karakter biji yang memang terang/asam, atau biji terlalu segar.",
    fixes: [
      "Setelah steaming, alirkan air panas sebentar untuk menstabilkan suhu boiler sebelum menyeduh.",
      "Pastikan mesin dan cangkir sudah panas; hangatkan cangkir sebelum ekstraksi.",
      "Coba naikkan hasil seduh sedikit (rasio tetap 1:2, perpanjang ekstraksi ke ujung 30 detik) dan bandingkan.",
      "Kalau tetap asam di biji yang sama, kemungkinan itu karakter bijinya — catat di Catatan Saya agar tidak dibeli ulang untuk espresso.",
    ],
  },
  "pahit-q": {
    id: "pahit-q",
    kind: "question",
    title: "Bagaimana aliran dan waktunya tadi?",
    options: [
      { label: "Lambat, menetes, lebih dari 35 detik", next: "pahit-r1" },
      { label: "Normal, sekitar 25–30 detik", next: "pahit-r2" },
      { label: "Tidak menghitung / tidak tahu", next: "pahit-r1" },
    ],
  },
  "pahit-r1": {
    id: "pahit-r1",
    kind: "result",
    title: "Diagnosis: ekstraksi berlebih (over-extracted)",
    diagnosis:
      "Aliran lambat + waktu panjang + pahit = air terlalu lama kontak dengan kopi. Sesuai panduan mesin: tamping terlalu kuat membuat aliran lambat dan pahit; gilingan terlalu halus juga bisa sampai mampet.",
    fixes: [
      "Kurangi kekuatan tamping — cukup rata dan padat, tidak perlu tenaga penuh.",
      "Kasarkan gilingan sedikit bila aliran tetap menetes.",
      "Persingkat ekstraksi kembali ke kisaran 25–30 detik (rasio 1:2).",
    ],
  },
  "pahit-r2": {
    id: "pahit-r2",
    kind: "result",
    title: "Diagnosis: kemungkinan sangrai gelap atau sisa kotor",
    diagnosis:
      "Waktu dan aliran normal tapi pahit — seringnya dari biji sangrai sangat gelap, atau sisa minyak kopi lama di filter/group head yang ikut terbawa.",
    fixes: [
      "Bersihkan filter di bawah air mengalir; tusuk lubang tersumbat pakai peniti/jarum (rutinitas mingguan di panduan).",
      "Flush air panas lewat group head sebelum menyeduh.",
      "Kalau bijinya dark roast, perpendek ekstraksi ke kisaran awal 25 detik dan bandingkan.",
      "Lakukan descaling bila sudah 2–3 bulan belum pernah.",
    ],
  },
  "encer-q": {
    id: "encer-q",
    kind: "question",
    title: "Bagaimana aliran keluarnya tadi?",
    options: [
      { label: "Mengucur deras dan cepat selesai", next: "encer-r1" },
      { label: "Aliran biasa saja, tapi rasa tetap tipis", next: "encer-r2" },
    ],
  },
  "encer-r1": {
    id: "encer-r1",
    kind: "result",
    title: "Diagnosis: air menerobos terlalu cepat",
    diagnosis:
      "Encer + aliran deras artinya air menemukan jalan pintas: tamping terlalu ringan/tidak rata atau gilingan terlalu kasar. Persis seperti catatan panduan: tamping ringan → encer, bubuk kasar → ekstraksi encer.",
    fixes: [
      "Tamping lebih padat dan pastikan permukaannya rata sebelum dikunci.",
      "Haluskan gilingan sedikit demi sedikit sampai aliran seperti ekor tikus.",
      "Pastikan takaran penuh: 1 sendok untuk 1-CUP, 2 sendok untuk 2-CUP.",
      "Target rasio 1:2 dan waktu 25–30 detik — pakai timer di panduan Espresso.",
    ],
  },
  "encer-r2": {
    id: "encer-r2",
    kind: "result",
    title: "Diagnosis: takaran atau rasio kurang pas",
    diagnosis:
      "Aliran terlihat normal tapi rasa tipis — biasanya takaran kopi kurang, hasil seduh terlalu banyak (rasio terlalu panjang), atau biji sudah lama disimpan.",
    fixes: [
      "Timbang bila bisa: kejar rasio 1:2, jangan memanjangkan volume terlalu jauh.",
      "Atur volume ekstraksi mesin dengan tekan-tahan tombol 1-CUP/2-CUP, lepas saat volume pas.",
      "Pakai biji yang lebih segar dan simpan tertutup rapat; catat bijinya di Catatan Saya.",
    ],
  },
  "crema-q": {
    id: "crema-q",
    kind: "question",
    title: "Bijinya bagaimana?",
    options: [
      { label: "Sudah lama disimpan / bubuk kemasan lama", next: "crema-r1" },
      { label: "Biji relatif baru", next: "crema-r2" },
      { label: "Tidak tahu umur bijinya", next: "crema-r1" },
    ],
  },
  "crema-r1": {
    id: "crema-r1",
    kind: "result",
    title: "Diagnosis: biji sudah kehilangan gas & minyak segarnya",
    diagnosis:
      "Crema terbentuk dari gas dan minyak kopi segar saat ekstraksi bertekanan. Biji/bubuk yang lama disimpan hampir selalu menghasilkan crema tipis, apa pun tekniknya.",
    fixes: [
      "Ganti ke biji yang lebih segar; untuk bubuk kemasan, habiskan segera setelah dibuka dan simpan tertutup rapat.",
      "Giling mendekati waktu seduh bila punya grinder.",
      "Tetap jaga ekstraksi 25–30 detik — crema terbaik muncul di shot yang memang benar.",
    ],
  },
  "crema-r2": {
    id: "crema-r2",
    kind: "result",
    title: "Diagnosis: ekstraksi belum menekan dengan benar",
    diagnosis:
      "Biji baru tapi crema tipis biasanya soal tekanan ekstraksi: gilingan terlalu kasar atau tamping tidak rata membuat tekanan tidak terbangun.",
    fixes: [
      "Haluskan gilingan sedikit — targetkan aliran seperti ekor tikus, bukan kucuran.",
      "Tamping rata dan padat, bersihkan bibir filter agar portafilter terkunci rapat sampai LOCK.",
      "Pastikan air cukup panas: hangatkan mesin dan cangkir sebelum ekstraksi.",
    ],
  },
  "susu-q": {
    id: "susu-q",
    kind: "question",
    title: "Susu yang dipakai tadi bagaimana?",
    options: [
      { label: "Sudah tidak dingin / sisa steam sebelumnya", next: "susu-r1" },
      { label: "Dingin langsung dari kulkas", next: "susu-r2" },
    ],
  },
  "susu-r1": {
    id: "susu-r1",
    kind: "result",
    title: "Diagnosis: susu kurang dingin (penyebab resmi nomor satu)",
    diagnosis:
      "Panduan mesin menyebut dua penyebab tidak ada buih susu: wand kotor/ada sisa susu kering, atau susu kurang dingin. Susu hangat tidak sempat mengembangkan buih sebelum suhunya keburu naik.",
    fixes: [
      "Selalu pakai susu dingin langsung dari kulkas (±5°C) — susu dingin = buih lebih stabil.",
      "Jangan steam ulang susu sisa; ambil susu baru yang dingin.",
      "Bersihkan wand: semprotkan uap sebentar dan lap kain lembap setiap selesai steam.",
    ],
  },
  "susu-r2": {
    id: "susu-r2",
    kind: "result",
    title: "Diagnosis: wand atau teknik purge bermasalah",
    diagnosis:
      "Susu sudah dingin tapi tetap tidak berbusa — kemungkinan ujung wand tersumbat sisa susu kering, atau air kondensasi belum di-purge sehingga steam tidak maksimal.",
    fixes: [
      "Purge dulu sebelum steam: semprotkan uap ke wadah kosong sampai uap keluar stabil (±5 detik), buang air kondensasi pertama.",
      "Periksa ujung wand — bersihkan sisa susu kering; bila mampet, rendam ujung wand di air panas lalu purge lagi.",
      "Tahan ujung wand tepat di permukaan susu di awal steam agar udara masuk (bunyi desis halus), bukan tenggelam dalam-dalam sejak awal.",
      "Steam sampai ±60°C saja; terlalu panas membuat buih pecah.",
    ],
  },
  "cepat-r": {
    id: "cepat-r",
    kind: "result",
    title: "Diagnosis: hambatan terlalu kecil",
    diagnosis:
      "Kopi yang keluar terlalu cepat hampir selalu berarti air kurang mendapat hambatan: gilingan terlalu kasar atau tamping terlalu ringan — hasilnya biasanya ikut encer dan asam.",
    fixes: [
      "Haluskan gilingan sedikit demi sedikit sampai waktu ekstraksi masuk 25–30 detik.",
      "Tamping lebih padat dan rata.",
      "Cek takaran: kurang kopi di filter juga mempercepat aliran — pakai 1 sendok (1-CUP) atau 2 sendok (2-CUP).",
    ],
  },
  "lambat-q": {
    id: "lambat-q",
    kind: "question",
    title: "Sebenarnya seberapa lambat?",
    options: [
      { label: "Menetes pelan, tapi tetap keluar", next: "lambat-r1" },
      { label: "Sama sekali tidak keluar", next: "lambat-r2" },
      { label: "Keluar dari pinggir portafilter", next: "lambat-r3" },
    ],
  },
  "lambat-r1": {
    id: "lambat-r1",
    kind: "result",
    title: "Diagnosis: hambatan terlalu besar",
    diagnosis:
      "Kebalikan dari ekstraksi cepat: tamping terlalu kuat (di panduan: terlalu kuat → aliran lambat/pahit) atau gilingan terlalu halus sehingga air sulit lewat.",
    fixes: [
      "Kasarkan gilingan sedikit.",
      "Kurangi tekanan tamping — rata dan padat secukupnya.",
      "Targetkan kembali ke 25–30 detik untuk rasio 1:2.",
    ],
  },
  "lambat-r2": {
    id: "lambat-r2",
    kind: "result",
    title: "Diagnosis: cek air dan sumbatan dulu (sesuai panduan resmi)",
    diagnosis:
      "Untuk kopi yang tidak keluar, panduan mesin memerintahkan tiga pemeriksaan: air di tangki, posisi tangki, dan filter yang tersumbat.",
    fixes: [
      "Cek air di tangki — jangan pernah menjalankan mesin dengan tangki kosong, pompa bisa rusak.",
      "Pastikan tangki terpasang pas pada tempatnya.",
      "Bersihkan filter: bilas di bawah air mengalir dan tusuk lubang yang tersumbat pakai peniti/jarum.",
      "Bila filter bersih dan air ada, kasarkan gilingan — terlalu halus bisa mampet total.",
    ],
  },
  "lambat-r3": {
    id: "lambat-r3",
    kind: "result",
    title: "Diagnosis: portafilter belum rapat",
    diagnosis:
      "Air/kopi yang keluar dari pinggir portafilter dijelaskan di panduan: portafilter belum sampai posisi LOCK, atau ada sisa bubuk di bibir filter yang mengganjal.",
    fixes: [
      "Lepas portafilter, bersihkan sisa bubuk di bibir filter dan di group head.",
      "Pasang lagi dari posisi UNLOCK dan putar sampai LOCK dengan kencang.",
      "Jangan mengisi filter melebihi takaran — permukaan yang terlalu penuh susah terkunci rapat.",
    ],
  },
};
