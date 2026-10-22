# Kalkulator Perhitungan Biaya Perjalanan
Aplikasi web interaktif berbasis HTML, CSS, dan JavaScript untuk menghitung estimasi kebutuhan bahan bakar (BBM), total biaya bensin perjalanan harian, serta pembagian biaya (*split bill*) per orang.

## Tema Program
**Pemecahan Masalah Sehari-hari**  
Program ini dirancang untuk menyelesaikan masalah praktis yang sering dihadapi mahasiswa, seperti menghitung berapa estimasi pengeluaran bensin harian/mingguan untuk perjalanan (rumah-kampus) maupun membagi biaya bensin secara adil saat bepergian bersama teman.

## Struktur Berkas
- `index.html` : Menyusun elemen semantic HTML5, formulir input data, dan kartu output hasil.
- `style.css` : Mengatur tata letak (Flexbox), skema warna, tata letak input, dan efek animasi transisi.
- `script.js` : Menangani manipulasi DOM, pemrosesan logika matematika, validasi input, serta formatting mata uang.

## Rumus & Logika Matematika
1. **Kebutuhan BBM (Liter)** = `Jarak Tempuh (km)` ÷ `Konsumsi BBM (km/Liter)`
2. **Total Biaya Bensin (Rp)** = `Kebutuhan BBM (Liter)` × `Harga BBM per Liter (Rp)`
3. **Biaya per Orang (Rp)** = `Total Biaya Bensin (Rp)` ÷ `Jumlah Penumpang`

## Fitur
* **Menghitung kebutuhan BBM** berdasarkan jarak tempuh (km) dan efisiensi kendaraan (km/liter).
* **Memilih jenis BBM** dengan pilihan harga standar (Pertalite, Pertamax, Dexlite) atau memasukkan harga kustom.
* **Pembagian biaya (split bill)** secara adil berdasarkan jumlah penumpang atau teman perjalanan.
* **Formatting otomatis** ke dalam format mata uang Rupiah (IDR).
* **Validasi formulir** untuk memastikan nilai input valid dan lebih besar dari nol.
* **Fitur reset** untuk mengosongkan semua isian formulir dan menyembunyikan hasil perhitungan.
* **Tampilan responsif** untuk layar komputer maupun ponsel.

## Cara Menjalankan
1. *Clone* atau unduh *repository* ini.
2. Buka file `index.html` menggunakan peramban web (*web browser*) pilihan Anda.
3. Isikan jarak, konsumsi BBM kendaraan, pilih jenis BBM, dan klik tombol **"Hitung Biaya"**.
Tidak diperlukan instalasi package atau server khusus.

## Contoh penggunaan
Misalnya, pengguna melakukan perjalanan pulang-pergi Kuliah sejauh 32 km menggunakan kendaraan dengan konsumsi BBM 16 km/liter, mengisi Pertalite, dan pergi bersama 2 orang:

| Parameter / Keterangan | Nilai |
| :--- | :--- |
| Jarak Tempuh | 32 km |
| Konsumsi BBM | 16 km/liter |
| Jenis BBM | Pertalite (Rp10.000/liter) |
| Jumlah Penumpang | 2 orang |
| **Kebutuhan BBM** | **2 Liter** |
| **Total Biaya Bensin** | **Rp20.000** |
| **Biaya per Orang** | **Rp10.000** |
