const STORAGE_KEY = 'biovert-state-v1';
const defaultLanguage = 'id';

const seedData = {
  language: 'id',
  ringkasan: { total_sampah_kg: 1240, jumlah_mitra_aktif: 32, produk_terjual_kg: 410 },
  pedagang: [
    { nama: 'Bu Sari', pasar: 'Pasar Anyar', peran: 'Pedagang', poin: 620, rank: 'Platinum', kg_minggu_ini: 42 },
    { nama: 'Pak Dedi', pasar: 'Pasar Anyar', peran: 'Pedagang', poin: 545, rank: 'Platinum', kg_minggu_ini: 38 },
    { nama: 'Bu Nina', pasar: 'Pasar Baru Timur', peran: 'Pedagang', poin: 480, rank: 'Gold', kg_minggu_ini: 33 },
    { nama: 'Pak Herman', pasar: 'Pasar Baru Timur', peran: 'Pedagang', poin: 340, rank: 'Gold', kg_minggu_ini: 27 },
    { nama: 'Bu Wati', pasar: 'Pasar Anyar', peran: 'Pedagang', poin: 265, rank: 'Silver', kg_minggu_ini: 20 },
    { nama: 'Pak Joko', pasar: 'Pasar Kaget Minggu', peran: 'Pedagang', poin: 180, rank: 'Silver', kg_minggu_ini: 15 },
    { nama: 'Bu Lilis', pasar: 'Pasar Kaget Minggu', peran: 'Pedagang', poin: 90, rank: 'Bronze', kg_minggu_ini: 8 },
    { nama: 'Pak Ujang', pasar: 'Pasar Baru Timur', peran: 'Pedagang', poin: 45, rank: 'Bronze', kg_minggu_ini: 5 }
  ],
  setoran_kalender: [
    { tanggal: '2026-09-14', kg_masuk: 38, pedagang_setor: 6, poin_terkumpul: 145 },
    { tanggal: '2026-09-15', kg_masuk: 45, pedagang_setor: 7, poin_terkumpul: 168 },
    { tanggal: '2026-09-16', kg_masuk: 0, pedagang_setor: 0, poin_terkumpul: 0, catatan: 'pasar libur' },
    { tanggal: '2026-09-17', kg_masuk: 41, pedagang_setor: 6, poin_terkumpul: 152 }
  ],
  produk: [
    { nama: 'Pakan Maggot Basah', kategori: 'Pakan', harga_per_kg: 7000 },
    { nama: 'Pakan Maggot Kering', kategori: 'Pakan', harga_per_kg: 18000 },
    { nama: 'Pupuk Kasgot', kategori: 'Pupuk', harga_per_kg: 3000 }
  ],
  testimoni: [
    { nama: 'Bu Sari', peran: 'Pedagang Sayur, Pasar Anyar', kutipan: 'Sejak ikut Biovert, sampah sayur yang biasanya dibuang sekarang malah jadi poin dan hadiah.' },
    { nama: 'Pak Dedi', peran: 'Pedagang Buah, Pasar Anyar', kutipan: 'Prosesnya gampang tinggal setor dan dicatat, lapak jadi lebih bersih juga.' }
  ],
  pendaftaran: [],
  setoran_history: [],
  login: { isLoggedIn: false },
  lastUpdated: new Date().toISOString()
};

function getState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
      return structuredClone(seedData);
    }
    const parsed = JSON.parse(raw);
    return {
      ...seedData,
      ...parsed,
      ringkasan: { ...seedData.ringkasan, ...(parsed.ringkasan || {}) },
      pedagang: parsed.pedagang || seedData.pedagang,
      produk: parsed.produk || seedData.produk,
      testimoni: parsed.testimoni || seedData.testimoni,
      pendaftaran: parsed.pendaftaran || [],
      setoran_history: parsed.setoran_history || [],
      login: parsed.login || { isLoggedIn: false },
      lastUpdated: parsed.lastUpdated || new Date().toISOString()
    };
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return structuredClone(seedData);
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatNumber(value) {
  return new Intl.NumberFormat('id-ID').format(value);
}

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

function slugify(value) {
  return value.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}
