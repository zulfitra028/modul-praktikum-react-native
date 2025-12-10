# Tutorial 03: Komponen Dasar

<div align="center">

| Informasi | Keterangan |
|-----------|------------|
| **Durasi** | 45-60 menit |
| **Level** | Pemula |
| **Prasyarat** | Tutorial 02 selesai |

</div>

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, Anda akan mampu:
- Menggunakan komponen dasar React Native
- Memahami View, Text, Image, dan SafeAreaView
- Membuat layout sederhana dengan komponen-komponen ini

---

## 📖 Materi

### Komponen Dasar React Native

| Komponen | HTML Equivalent | Fungsi |
|----------|-----------------|--------|
| `View` | `<div>` | Container untuk layout |
| `Text` | `<p>`, `<span>` | Menampilkan teks |
| `Image` | `<img>` | Menampilkan gambar |
| `SafeAreaView` | - | Safe area untuk notch/status bar |
| `ScrollView` | - | Container yang bisa di-scroll |
| `TouchableOpacity` | `<button>` | Area yang bisa ditekan |

---

## 🔲 Komponen View

`View` adalah container fundamental untuk membuat UI.

### Penggunaan Dasar

```javascript
import { View, StyleSheet } from 'react-native';

function MyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#3498db',
  },
});
```

### Nested Views

```javascript
<View style={styles.outer}>
  <View style={styles.inner}>
    <View style={styles.innerMost} />
  </View>
</View>
```

---

## 📝 Komponen Text

`Text` digunakan untuk menampilkan teks.

### Penggunaan Dasar

```javascript
import { Text, StyleSheet } from 'react-native';

function MyText() {
  return (
    <Text style={styles.title}>Hello World!</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});
```

### Nested Text (Inline Styling)

```javascript
<Text style={styles.paragraph}>
  Ini adalah teks <Text style={styles.bold}>tebal</Text> dan{' '}
  <Text style={styles.italic}>miring</Text>.
</Text>
```

### Props Text Penting

| Prop | Fungsi |
|------|--------|
| `numberOfLines` | Batas jumlah baris |
| `ellipsizeMode` | Mode ellipsis (head, middle, tail) |
| `selectable` | Teks bisa diselect |
| `onPress` | Handler ketika ditekan |

```javascript
<Text 
  numberOfLines={2} 
  ellipsizeMode="tail"
  style={styles.text}
>
  Teks yang sangat panjang akan dipotong dan ditambahkan ellipsis...
</Text>
```

---

## 🖼️ Komponen Image

`Image` digunakan untuk menampilkan gambar.

### Gambar Lokal

```javascript
import { Image, StyleSheet } from 'react-native';

function LocalImage() {
  return (
    <Image 
      source={require('../assets/icon.png')} 
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
```

### Gambar dari URL

```javascript
function NetworkImage() {
  return (
    <Image 
      source={{ uri: 'https://via.placeholder.com/150' }} 
      style={styles.image}
    />
  );
}
```

### Props Image Penting

| Prop | Fungsi |
|------|--------|
| `resizeMode` | contain, cover, stretch, center |
| `onLoad` | Callback saat gambar selesai dimuat |
| `onError` | Callback saat error |

```javascript
<Image 
  source={{ uri: 'https://example.com/image.jpg' }} 
  style={styles.image}
  resizeMode="cover"
  onError={(e) => console.log('Error:', e.nativeEvent.error)}
/>
```

---

## 🛡️ Komponen SafeAreaView

`SafeAreaView` memastikan konten tidak tertutup notch atau status bar.

```javascript
import { SafeAreaView, Text, StyleSheet } from 'react-native';

function MyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Konten aman dari notch!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

### Kapan Menggunakan SafeAreaView?

- ✅ Sebagai container utama screen
- ✅ Ketika ada konten di bagian atas screen
- ❌ Tidak perlu untuk setiap View
- ❌ Tidak perlu jika menggunakan React Navigation (sudah handle)

---

## 👆 Komponen TouchableOpacity

Membuat area yang bisa ditekan dengan efek opacity.

```javascript
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function MyButton() {
  const handlePress = () => {
    alert('Button ditekan!');
  };

  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Tekan Saya</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

---

## 💻 Praktik: Membuat Profile Card

Mari buat komponen Profile Card yang menggabungkan semua komponen dasar.

```javascript
// src/components/ProfileCard.js
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileCard({ 
  name, 
  nim, 
  jurusan, 
  imageUri,
  onPress 
}) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image 
        source={{ uri: imageUri || 'https://via.placeholder.com/100' }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.nim}>NIM: {nim}</Text>
        <Text style={styles.jurusan}>{jurusan}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ecf0f1',
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  nim: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  jurusan: {
    fontSize: 14,
    color: '#3498db',
    marginTop: 2,
  },
});
```

### Gunakan di App.js

```javascript
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Mahasiswa</Text>
      </View>
      
      <ProfileCard
        name="Nama Lengkap Anda"
        nim="105841XXXXXX"
        jurusan="Teknik Informatika"
        imageUri="https://via.placeholder.com/100"
        onPress={() => alert('Card ditekan!')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
```

---

## ⚠️ Common Mistakes

### 1. Text harus di dalam komponen Text

```javascript
// ❌ Salah
<View>
  Hello World
</View>

// ✅ Benar
<View>
  <Text>Hello World</Text>
</View>
```

### 2. Image harus punya ukuran

```javascript
// ❌ Salah - tidak akan muncul
<Image source={{ uri: 'https://...' }} />

// ✅ Benar
<Image 
  source={{ uri: 'https://...' }} 
  style={{ width: 100, height: 100 }}
/>
```

### 3. Jangan lupa import

```javascript
// ❌ Error: View is not defined
function MyComponent() {
  return <View />;
}

// ✅ Benar
import { View } from 'react-native';
function MyComponent() {
  return <View />;
}
```

---

## ✅ Checklist Pembelajaran

- [ ] Memahami fungsi View
- [ ] Memahami fungsi Text dan styling-nya
- [ ] Memahami cara menampilkan Image (lokal dan URL)
- [ ] Memahami SafeAreaView
- [ ] Memahami TouchableOpacity
- [ ] Bisa menggabungkan komponen menjadi UI yang kompleks

---

## 📝 Tugas Praktikum

### Deskripsi Tugas

Buat komponen `ProfileCard` yang menampilkan informasi diri Anda.

### Spesifikasi

Komponen harus menampilkan:
1. ✅ Foto profil (bisa placeholder)
2. ✅ Nama lengkap
3. ✅ NIM
4. ✅ Program Studi
5. ✅ Card bisa ditekan (TouchableOpacity)
6. ✅ Styling yang rapi dengan shadow

### Screenshot yang Dibutuhkan

| No | Nama File | Deskripsi |
|----|-----------|-----------|
| 1 | `03-profile-card-[nim].png` | Screenshot Profile Card |
| 2 | `03-code-[nim].png` | Screenshot kode ProfileCard.js |

---

**[← Kembali ke Tutorial 02](./02-struktur-project.md)** | **[Lanjut ke Tutorial 04: Styling →](./04-styling.md)**
