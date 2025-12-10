  # Tutorial 01: Pengenalan Expo dan React Native

<div align="center">

| Informasi | Keterangan |
|-----------|------------|
| **Durasi** | 30-45 menit |
| **Level** | Pemula |
| **Prasyarat** | Node.js terinstall |

</div>

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, Anda akan mampu:
- Memahami apa itu React Native dan Expo
- Menjalankan aplikasi Expo pertama Anda
- Memahami alur kerja pengembangan dasar

---

## 📖 Materi

### Apa itu React Native?

**React Native** adalah framework open-source yang dikembangkan oleh Facebook (Meta) untuk membangun aplikasi mobile menggunakan JavaScript dan React.

**Keunggulan React Native:**
- 📱 **Cross-platform** - Satu kode untuk Android dan iOS
- ⚡ **Hot Reload** - Perubahan langsung terlihat
- 🔧 **Native Components** - Performa mendekati native
- 🌐 **Komunitas Besar** - Banyak library dan dukungan

### Apa itu Expo?

**Expo** adalah platform dan framework yang mempermudah pengembangan React Native.

**Keunggulan Expo:**
- ✅ **Tanpa konfigurasi rumit** - Langsung mulai coding
- ✅ **Expo Go** - Test di device tanpa build
- ✅ **SDK lengkap** - Kamera, lokasi, notifikasi, dll
- ✅ **EAS Build** - Build dan deploy mudah

### Perbandingan

| Fitur | React Native CLI | Expo |
|-------|------------------|------|
| Setup | Kompleks | Mudah |
| Native Modules | Manual | Otomatis |
| Build | Perlu Android Studio/Xcode | Expo Build |
| Ukuran App | Lebih kecil | Lebih besar |
| Fleksibilitas | Tinggi | Terbatas (tapi cukup) |

---

## 💻 Praktik

### Langkah 1: Persiapan Environment

Pastikan Node.js sudah terinstall:

```bash
# Cek versi Node.js
node --version
# Output: v18.x.x atau lebih baru

# Cek versi npm
npm --version
```

### Langkah 2: Clone Repository

```bash
# Clone repository (jika belum)
git clone https://github.com/Lab-IF-UNISMUH/modul-praktikum-react-native.git

# Masuk ke folder project
cd modul-praktikum-react-native
```

### Langkah 3: Install Dependencies

```bash
# Install semua package yang dibutuhkan
npm install
```

### Langkah 4: Jalankan Aplikasi

```bash
# Start development server
npm start
```

Setelah perintah dijalankan, Anda akan melihat:

```
Metro waiting on exp://192.168.x.x:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Using Expo Go
› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor
```

### Langkah 5: Buka Aplikasi

**Opsi 1: Di Web Browser**
- Tekan `w` untuk membuka di browser

**Opsi 2: Di Android Emulator**
- Tekan `a` (perlu Android Studio)

**Opsi 3: Di Smartphone (Recommended)**
1. Install **Expo Go** dari Play Store/App Store
2. Scan QR Code yang muncul di terminal
3. Aplikasi akan terbuka di Expo Go

---

## 🔍 Memahami Tampilan Awal

Ketika aplikasi berjalan, Anda akan melihat tampilan welcome screen dengan:

- Logo dan judul "Modul Praktikum React Native"
- Pesan selamat datang
- Instruksi untuk memulai belajar
- Footer dengan credit Lab Informatika UNISMUH

### File Utama: App.js

Buka file `App.js` di root project. Ini adalah komponen utama aplikasi:

```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Konten aplikasi */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  // ... styles lainnya
});
```

**Penjelasan:**
- `import` - Mengimpor komponen yang dibutuhkan
- `export default function App()` - Komponen utama aplikasi
- `return (...)` - JSX yang akan ditampilkan
- `StyleSheet.create()` - Membuat style untuk komponen

---

## 🧪 Eksperimen

Coba ubah beberapa hal di `App.js`:

### 1. Ubah Warna Background

```javascript
container: {
  flex: 1,
  backgroundColor: '#e74c3c', // Merah
  // backgroundColor: '#27ae60', // Hijau
  // backgroundColor: '#9b59b6', // Ungu
},
```

### 2. Ubah Teks Welcome

Cari bagian:
```javascript
<Text style={styles.welcome}>Selamat Datang!</Text>
```

Ubah menjadi:
```javascript
<Text style={styles.welcome}>Halo, [Nama Anda]!</Text>
```

### 3. Lihat Hasilnya

Setelah menyimpan file (`Ctrl+S`), perubahan akan otomatis terlihat di aplikasi (Hot Reload).

---

## ❓ Troubleshooting

### Error: "Unable to resolve module"
```bash
# Hapus cache dan install ulang
rm -rf node_modules
npm install
npm start -- --clear
```

### QR Code tidak bisa di-scan
- Pastikan laptop dan HP dalam jaringan WiFi yang sama
- Coba gunakan tunnel: `npx expo start --tunnel`

### Aplikasi crash di Expo Go
- Update Expo Go ke versi terbaru
- Coba restart development server: `npm start`

---

## 📚 Referensi

- [Dokumentasi Expo](https://docs.expo.dev/)
- [Dokumentasi React Native](https://reactnative.dev/)
- [React Native Express](https://www.reactnative.express/)

---

## ✅ Checklist Pembelajaran

- [ ] Memahami apa itu React Native
- [ ] Memahami apa itu Expo
- [ ] Berhasil menjalankan `npm install`
- [ ] Berhasil menjalankan `npm start`
- [ ] Berhasil membuka aplikasi di browser/device
- [ ] Mencoba mengubah kode di App.js

---

## 📝 Tugas Praktikum

### Deskripsi Tugas

Jalankan aplikasi Expo dan dokumentasikan hasilnya dengan screenshot.

### Langkah Pengerjaan

1. Buka terminal di folder project
2. Jalankan `npm install` (jika belum)
3. Jalankan `npm start`
4. Buka aplikasi di salah satu platform (web/android/expo go)
5. Ambil screenshot terminal dan aplikasi yang berjalan

### Screenshot yang Dibutuhkan

| No | Nama File | Deskripsi |
|----|-----------|-----------|
| 1 | `01-terminal-[nim].png` | Screenshot terminal saat `npm start` |
| 2 | `01-app-running-[nim].png` | Screenshot aplikasi yang berjalan |

### Contoh Penamaan

- `01-terminal-105841111521.png`
- `01-app-running-105841111521.png`

### Upload Screenshot

Simpan screenshot di folder `docs/screenshots/` lalu commit dan push ke repository Anda.

---

**[Lanjut ke Tutorial 02: Struktur Project →](./02-struktur-project.md)**
