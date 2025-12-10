# 📱 Modul Praktikum React Native

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Modul Praktikum Pengembangan Aplikasi Mobile**

*Laboratorium Informatika - Fakultas Teknik*  
*Universitas Muhammadiyah Makassar*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Expo SDK](https://img.shields.io/badge/Expo_SDK-54.x-blue)](https://expo.dev)

</div>

---

## 📋 Daftar Isi

- [Tentang Modul](#-tentang-modul)
- [Fitur](#-fitur)
- [Prasyarat](#-prasyarat)
- [Instalasi](#-instalasi)
- [Struktur Project](#-struktur-project)
- [Daftar Tutorial](#-daftar-tutorial)
- [Cara Penggunaan](#-cara-penggunaan)
- [Pengumpulan Tugas](#-pengumpulan-tugas)
- [Kontributor](#-kontributor)
- [Lisensi](#-lisensi)

---

## 📖 Tentang Modul

Modul praktikum ini dirancang untuk membantu mahasiswa mempelajari pengembangan aplikasi mobile menggunakan **React Native** dan **Expo**. Modul ini menggunakan **JavaScript** (bukan TypeScript) agar lebih mudah dipahami oleh pemula.

### Tujuan Pembelajaran

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

1. ✅ Memahami konsep dasar React Native
2. ✅ Membuat komponen UI yang reusable
3. ✅ Mengelola state dan props
4. ✅ Mengimplementasikan navigasi antar screen
5. ✅ Membangun aplikasi mobile sederhana

---

## 🌟 Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 📚 **8 Tutorial Lengkap** | Pembelajaran bertahap dari dasar hingga mahir |
| 🇮🇩 **Bahasa Indonesia** | Semua materi dalam Bahasa Indonesia |
| 💻 **Berbasis JavaScript** | Tanpa TypeScript, murni JavaScript |
| 📱 **Expo SDK 54.x** | Menggunakan Expo versi terbaru |
| 📝 **Tugas Praktikum** | Setiap tutorial dilengkapi tugas |
| 📸 **Dokumentasi Screenshot** | Sistem pengumpulan dengan screenshot |
| 🏗️ **Struktur Modern** | Arsitektur folder yang terorganisir |

---

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** versi 18.x atau lebih baru ([Download](https://nodejs.org/))
- **npm** atau **yarn** (sudah termasuk dengan Node.js)
- **Git** ([Download](https://git-scm.com/))
- **VS Code** atau code editor lainnya ([Download](https://code.visualstudio.com/))
- **Expo Go** app di smartphone (opsional)
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS](https://apps.apple.com/app/expo-go/id982107779)

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
# Clone repository
git clone https://github.com/Lab-IF-UNISMUH/modul-praktikum-react-native.git

# Masuk ke folder project
cd modul-praktikum-react-native
```

### 2. Install Dependencies

```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

### 3. Jalankan Aplikasi

```bash
# Start development server
npm start

# Atau
npx expo start
```

### 4. Buka Aplikasi

Setelah server berjalan, Anda memiliki beberapa opsi:

| Tombol | Aksi |
|--------|------|
| `a` | Buka di Android Emulator |
| `i` | Buka di iOS Simulator (macOS) |
| `w` | Buka di Web Browser |
| Scan QR | Buka di Expo Go (smartphone) |

---

## 📁 Struktur Project

```
modul-praktikum-react-native/
├── 📁 src/                    # Source code utama
│   ├── 📁 components/         # Komponen reusable
│   │   └── index.js          # Export semua komponen
│   ├── 📁 screens/           # Screen/halaman aplikasi
│   │   └── index.js          # Export semua screen
│   ├── 📁 navigation/        # Konfigurasi navigasi
│   │   └── index.js          # Root navigator
│   ├── 📁 constants/         # Konstanta (warna, ukuran, dll)
│   │   ├── colors.js         # Palet warna
│   │   └── index.js          # Export konstanta
│   ├── 📁 hooks/             # Custom hooks
│   │   └── index.js          # Export hooks
│   └── 📁 utils/             # Fungsi utilitas
│       └── index.js          # Export utils
├── 📁 docs/                   # Dokumentasi
│   ├── 📁 tutorials/         # File tutorial (8 modul)
│   └── 📁 screenshots/       # Screenshot tugas mahasiswa
├── 📁 assets/                 # Asset statis (gambar, font)
│   ├── icon.png
│   ├── splash-icon.png
│   └── adaptive-icon.png
├── 📄 App.js                  # Entry point aplikasi
├── 📄 index.js               # Registrasi aplikasi
├── 📄 app.json               # Konfigurasi Expo
├── 📄 package.json           # Dependencies
├── 📄 babel.config.js        # Konfigurasi Babel
└── 📄 README.md              # Dokumentasi (file ini)
```

---

## 📚 Daftar Tutorial

| No | Modul | Topik | Link |
|----|-------|-------|------|
| 01 | Pengenalan | Expo dan React Native | [Buka](./docs/tutorials/01-pengenalan.md) |
| 02 | Struktur Project | Organisasi Kode | [Buka](./docs/tutorials/02-struktur-project.md) |
| 03 | Komponen Dasar | View, Text, Image | [Buka](./docs/tutorials/03-komponen-dasar.md) |
| 04 | Styling | StyleSheet & Flexbox | [Buka](./docs/tutorials/04-styling.md) |
| 05 | State & Props | Manajemen Data | [Buka](./docs/tutorials/05-state-dan-props.md) |
| 06 | List & ScrollView | Menampilkan List | [Buka](./docs/tutorials/06-list-dan-scrollview.md) |
| 07 | Input Pengguna | Form & Validasi | [Buka](./docs/tutorials/07-input-pengguna.md) |
| 08 | Navigasi | React Navigation | [Buka](./docs/tutorials/08-navigasi.md) |

### Alur Pembelajaran

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ 01. Pengena-│───▶│ 02. Struktur│───▶│ 03. Komponen│───▶│ 04. Styling │
│     lan     │    │    Project  │    │    Dasar    │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                                │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌──────▼──────┐
│ 08. Navigasi│◀───│ 07. Input   │◀───│ 06. List &  │◀───│ 05. State & │
│             │    │   Pengguna  │    │  ScrollView │    │    Props    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

---

## 💻 Cara Penggunaan

### Untuk Mahasiswa

1. **Fork** repository ini ke akun GitHub Anda
2. **Clone** repository hasil fork
3. Ikuti tutorial secara **berurutan** (01 → 08)
4. Kerjakan **tugas** di setiap akhir tutorial
5. **Screenshot** hasil pekerjaan Anda
6. **Upload** screenshot ke folder `docs/screenshots/`
7. **Push** perubahan ke repository Anda
8. Kumpulkan **link repository** ke dosen/asisten

### Untuk Dosen/Asisten

1. **Clone** repository ini sebagai template
2. Mahasiswa mem-fork repository
3. Review **screenshot** dan **kode** mahasiswa
4. Berikan **feedback** melalui GitHub Issues/PR

---

## 📝 Pengumpulan Tugas

### Format Nama Screenshot

```
[nomor-tutorial]-[nama-tugas]-[nim].png
```

**Contoh:**
- `01-app-running-123456.png`
- `03-profile-card-123456.png`
- `08-navigasi-home-123456.png`

### Checklist Pengumpulan

| Tutorial | Screenshot yang Dibutuhkan |
|----------|---------------------------|
| 01 | Terminal + App Running |
| 02 | Folder Structure + Header Component |
| 03 | Profile Card + Code |
| 04 | Button Showcase + Flexbox Layout |
| 05 | Counter (3 state berbeda) |
| 06 | Todo List (3 kondisi) |
| 07 | Form (4 kondisi) |
| 08 | Navigation (4 screen) |

---

## 🛠️ Scripts yang Tersedia

```bash
# Development
npm start              # Start Expo development server
npm run android        # Run di Android
npm run ios           # Run di iOS (macOS only)
npm run web           # Run di Web browser
```

---

## 🤝 Kontributor

<table>
  <tr>
    <td align="center">
      <strong>Laboratorium Informatika</strong><br>
      Fakultas Teknik<br>
      Universitas Muhammadiyah Makassar
    </td>
  </tr>
</table>

### Tim Pengembang

- **Laboran Informatika** - Fakultas Teknik UNISMUH Makassar

---

## 📞 Kontak

- **Website**: [ft.unismuh.ac.id](https://ft.unismuh.ac.id)
- **GitHub**: [@Lab-IF-UNISMUH](https://github.com/Lab-IF-UNISMUH)

---

## 📄 Lisensi

Modul ini dilisensikan di bawah [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 Laboratorium Informatika - Universitas Muhammadiyah Makassar
```

---

<div align="center">

**Dibuat dengan ❤️ oleh Laboratorium Informatika**

*Fakultas Teknik - Universitas Muhammadiyah Makassar*

![Unismuh](https://img.shields.io/badge/UNISMUH-Makassar-green?style=for-the-badge)

</div>
