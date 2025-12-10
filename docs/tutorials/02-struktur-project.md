# Tutorial 02: Struktur Project

<div align="center">

| Informasi | Keterangan |
|-----------|------------|
| **Durasi** | 30-45 menit |
| **Level** | Pemula |
| **Prasyarat** | Tutorial 01 selesai |

</div>

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, Anda akan mampu:
- Memahami struktur folder project React Native/Expo
- Mengetahui fungsi setiap file dan folder
- Membuat komponen sederhana

---

## 📖 Materi

### Struktur Folder Project

```
modul-praktikum-react-native/
├── 📁 src/                    # Source code utama
│   ├── 📁 components/         # Komponen reusable
│   ├── 📁 screens/            # Screen/halaman
│   ├── 📁 navigation/         # Konfigurasi navigasi
│   ├── 📁 constants/          # Konstanta (warna, ukuran)
│   ├── 📁 hooks/              # Custom hooks
│   └── 📁 utils/              # Fungsi utilitas
├── 📁 docs/                   # Dokumentasi
│   ├── 📁 tutorials/          # Tutorial (8 modul)
│   └── 📁 screenshots/        # Screenshot tugas
├── 📁 assets/                 # Asset statis
│   ├── icon.png               # Icon aplikasi
│   ├── splash-icon.png        # Splash screen
│   └── adaptive-icon.png      # Android adaptive icon
├── 📄 App.js                  # Entry point
├── 📄 index.js                # Registrasi app
├── 📄 app.json                # Konfigurasi Expo
├── 📄 package.json            # Dependencies
└── 📄 babel.config.js         # Konfigurasi Babel
```

### Penjelasan File Penting

#### 1. App.js - Entry Point

File utama yang berisi komponen root aplikasi.

```javascript
// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

#### 2. package.json - Dependencies

Berisi informasi project dan daftar package yang digunakan.

```json
{
  "name": "modul-praktikum-react-native",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~54.0.27",
    "react": "19.1.0",
    "react-native": "0.81.5"
  }
}
```

#### 3. app.json - Konfigurasi Expo

Pengaturan aplikasi seperti nama, icon, splash screen.

```json
{
  "expo": {
    "name": "Modul Praktikum React Native",
    "slug": "modul-praktikum-react-native",
    "version": "1.0.0",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash-icon.png",
      "backgroundColor": "#3498db"
    }
  }
}
```

#### 4. index.js - Registrasi

Mendaftarkan komponen root ke AppRegistry.

```javascript
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
```

---

## 📁 Penjelasan Folder src/

### components/
Tempat menyimpan komponen UI yang dapat digunakan ulang.

```javascript
// src/components/Button.js
export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
```

### screens/
Tempat menyimpan komponen halaman/screen.

```javascript
// src/screens/HomeScreen.js
export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
```

### constants/
Tempat menyimpan nilai konstanta seperti warna, ukuran.

```javascript
// src/constants/colors.js
export const Colors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  danger: '#e74c3c',
};
```

### hooks/
Tempat menyimpan custom React hooks.

```javascript
// src/hooks/useToggle.js
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle];
}
```

### utils/
Tempat menyimpan fungsi-fungsi utilitas.

```javascript
// src/utils/formatDate.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID');
}
```

---

## 💻 Praktik: Membuat Komponen Header

Mari buat komponen `Header` yang reusable.

### Langkah 1: Buat File Header.js

Buat file baru di `src/components/Header.js`:

```javascript
// src/components/Header.js
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
});
```

### Langkah 2: Update index.js di components

```javascript
// src/components/index.js
export { default as Header } from './Header';
```

### Langkah 3: Gunakan di App.js

```javascript
// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Header 
        title="Modul Praktikum" 
        subtitle="React Native - UNISMUH Makassar"
      />
      <View style={styles.content}>
        <Text style={styles.text}>Konten aplikasi di sini</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: '#7f8c8d',
  },
});
```

---

## 🔑 Konsep Import/Export

### Named Export

```javascript
// file.js
export const nama = 'value';
export function fungsi() {}

// penggunaan
import { nama, fungsi } from './file';
```

### Default Export

```javascript
// file.js
export default function Komponen() {}

// penggunaan
import Komponen from './file';
import NamaLain from './file'; // bisa dengan nama berbeda
```

### Kombinasi

```javascript
// file.js
export default function Main() {}
export const helper = () => {};

// penggunaan
import Main, { helper } from './file';
```

---

## 📁 Best Practices Struktur Folder

### 1. Satu Komponen per File
```
components/
├── Button.js
├── Card.js
└── Header.js
```

### 2. Gunakan index.js untuk Export
```javascript
// components/index.js
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Header } from './Header';
```

### 3. Grouping berdasarkan Fitur (untuk project besar)
```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── screens/
│   │   └── hooks/
│   └── home/
│       ├── components/
│       └── screens/
```

---

## ✅ Checklist Pembelajaran

- [ ] Memahami struktur folder project
- [ ] Mengetahui fungsi App.js
- [ ] Mengetahui fungsi package.json
- [ ] Mengetahui fungsi app.json
- [ ] Memahami perbedaan src/ dan docs/
- [ ] Bisa membuat komponen baru
- [ ] Memahami import/export

---

## 📝 Tugas Praktikum

### Deskripsi Tugas

Buat komponen `Header` yang menampilkan nama dan NIM Anda.

### Langkah Pengerjaan

1. Buat file `src/components/Header.js`
2. Komponen harus menerima props `title` dan `subtitle`
3. Style header dengan warna primary (#3498db)
4. Export komponen dan gunakan di App.js
5. Tampilkan nama Anda sebagai title dan NIM sebagai subtitle

### Kode yang Harus Dibuat

```javascript
// src/components/Header.js
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
});
```

### Screenshot yang Dibutuhkan

| No | Nama File | Deskripsi |
|----|-----------|-----------|
| 1 | `02-folder-structure-[nim].png` | Screenshot struktur folder di VS Code |
| 2 | `02-header-component-[nim].png` | Screenshot aplikasi dengan Header |

---

**[← Kembali ke Tutorial 01](./01-pengenalan.md)** | **[Lanjut ke Tutorial 03: Komponen Dasar →](./03-komponen-dasar.md)**
