# CompanyProfileShop
 
Company Profile Shop adalah proyek berbasis web yang menggunakan **Vite**, **TypeScript**, dan **Tailwind CSS** untuk menampilkan profil perusahaan dalam bentuk website yang responsif dan modern.

## Fitur
- Menggunakan **Vite** untuk pengembangan yang cepat
- Ditulis dalam **TypeScript** untuk kode yang lebih aman dan terstruktur
- Menggunakan **Tailwind CSS** untuk styling yang fleksibel dan efisien
- Struktur proyek yang modular dengan folder **src** untuk kode utama

## Instalasi
Pastikan Anda sudah menginstal **Node.js** sebelum memulai. Jika belum, unduh dan instal dari [nodejs.org](https://nodejs.org/).

1. **Kloning repositori** (jika menggunakan Git):
   ```sh
   git clone <repository-url>
   cd Company Profile Shop
   ```

2. **Instal dependensi**:
   ```sh
   npm install
   ```

## Menjalankan Proyek
Untuk menjalankan proyek dalam mode pengembangan, gunakan perintah berikut:
```sh
npm run dev
```
Setelah itu, buka browser dan akses **http://localhost:5173/** (atau port yang ditampilkan di terminal).

## Build untuk Produksi
Untuk membangun proyek dalam mode produksi, gunakan perintah berikut:
```sh
npm run build
```
Hasil build akan disimpan di folder **dist**.

## Konfigurasi Tambahan
- **Vite Configuration**: Konfigurasi utama terdapat di `vite.config.ts`
- **Tailwind CSS**: Konfigurasi dapat disesuaikan di `tailwind.config.ts`
- **TypeScript**: Konfigurasi terdapat di `tsconfig.json`

## Struktur Folder
```
Company Profile Shop/
│── public/          # Folder untuk aset statis
│── src/             # Kode utama proyek
│── index.html       # File utama HTML
│── package.json     # Dependensi proyek
│── vite.config.ts   # Konfigurasi Vite
│── tailwind.config.ts # Konfigurasi Tailwind CSS
```

## Lisensi
Proyek ini menggunakan lisensi [MIT](LICENSE).

