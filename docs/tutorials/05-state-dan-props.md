# Tutorial 05: State dan Props

<div align="center">

| Informasi | Keterangan |
|-----------|------------|
| **Durasi** | 60 menit |
| **Level** | Menengah |
| **Prasyarat** | Tutorial 04 selesai |

</div>

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, Anda akan mampu:
- Memahami konsep Props dan cara menggunakannya
- Menggunakan useState Hook untuk mengelola state
- Memahami perbedaan state dan props
- Mengimplementasikan interaktivitas dalam aplikasi

---

## 📖 Materi

### Apa itu Props?

**Props** (Properties) adalah cara untuk mengirim data dari komponen parent ke child.

```javascript
// Parent Component
function App() {
  return <Greeting name="Ahmad" age={20} />;
}

// Child Component
function Greeting({ name, age }) {
  return (
    <Text>Halo {name}, umur {age} tahun!</Text>
  );
}
```

### Karakteristik Props

| Karakteristik | Deskripsi |
|---------------|-----------|
| **Read-only** | Props tidak bisa diubah oleh child |
| **Top-down** | Data mengalir dari parent ke child |
| **Immutable** | Nilai props tidak berubah |

### Apa itu State?

**State** adalah data internal komponen yang bisa berubah seiring waktu.

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Tambah" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

### useState Hook

```javascript
const [state, setState] = useState(initialValue);
```

| Bagian | Deskripsi |
|--------|-----------|
| `state` | Nilai state saat ini |
| `setState` | Fungsi untuk mengubah state |
| `initialValue` | Nilai awal state |

---

## 🔄 Perbedaan Props vs State

| Aspek | Props | State |
|-------|-------|-------|
| **Sumber** | Dari parent | Internal komponen |
| **Mutable** | Tidak | Ya |
| **Siapa yang mengubah** | Parent | Komponen itu sendiri |
| **Trigger re-render** | Ya | Ya |

---

## 💻 Praktik: Counter App

### Langkah 1: Buat CounterButton Component

```javascript
// src/components/CounterButton.js
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CounterButton({ title, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#3498db',
  },
  danger: {
    backgroundColor: '#e74c3c',
  },
  secondary: {
    backgroundColor: '#95a5a6',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  primaryText: {
    color: 'white',
  },
  dangerText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
});
```

### Langkah 2: Buat Counter App

```javascript
// App.js
import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import CounterButton from './src/components/CounterButton';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Tentukan warna berdasarkan nilai count
  const getCountColor = () => {
    if (count > 0) return '#27ae60'; // Hijau
    if (count < 0) return '#e74c3c'; // Merah
    return '#7f8c8d'; // Abu-abu
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Counter App</Text>
        <Text style={styles.headerSubtitle}>Belajar State dan Props</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.countContainer}>
          <Text style={styles.label}>Nilai Counter:</Text>
          <Text style={[styles.count, { color: getCountColor() }]}>
            {count}
          </Text>
          <Text style={styles.status}>
            {count > 0 ? 'Positif 📈' : count < 0 ? 'Negatif 📉' : 'Nol ⚖️'}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <CounterButton
            title="- 1"
            onPress={decrement}
            variant="danger"
          />
          <CounterButton
            title="Reset"
            onPress={reset}
            variant="secondary"
          />
          <CounterButton
            title="+ 1"
            onPress={increment}
            variant="primary"
          />
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>💡 Penjelasan:</Text>
        <Text style={styles.infoText}>
          • State: count = {count}{'\n'}
          • Props: title, onPress, variant pada button{'\n'}
          • setCount() memicu re-render
        </Text>
      </View>
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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  count: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 18,
    marginTop: 10,
    color: '#7f8c8d',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  infoBox: {
    backgroundColor: '#e8f4f8',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});
```

---

## 🔧 Functional Update

Gunakan functional update ketika state baru bergantung pada state sebelumnya:

```javascript
// ❌ Bisa bermasalah dalam kasus tertentu
setCount(count + 1);

// ✅ Lebih aman dengan functional update
setCount(prevCount => prevCount + 1);
```

---

## 📦 Multiple States

```javascript
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  // Atau gunakan object
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: 0,
  });
  
  // Update satu field
  setForm(prev => ({ ...prev, name: 'Ahmad' }));
}
```

---

## ✅ Checklist Pembelajaran

- [ ] Memahami konsep Props
- [ ] Memahami konsep State
- [ ] Bisa menggunakan useState Hook
- [ ] Memahami perbedaan Props vs State
- [ ] Bisa membuat komponen interaktif
- [ ] Memahami functional update

---

## 📝 Tugas Praktikum

### Deskripsi Tugas

Buat aplikasi Counter dengan komponen terpisah.

### Spesifikasi

1. Buat komponen `CounterButton` yang menerima props
2. Buat Counter App dengan 3 tombol (tambah, kurang, reset)
3. Tampilkan status (positif/negatif/nol) berdasarkan nilai
4. Warna angka berubah sesuai nilai (hijau/merah/abu)

### Screenshot yang Dibutuhkan

| No | Nama File | Deskripsi |
|----|-----------|-----------|
| 1 | `05-counter-positive-[nim].png` | Counter dengan nilai positif |
| 2 | `05-counter-negative-[nim].png` | Counter dengan nilai negatif |
| 3 | `05-counter-zero-[nim].png` | Counter dengan nilai nol |

---

**[← Kembali ke Tutorial 04](./04-styling.md)** | **[Lanjut ke Tutorial 06: List dan ScrollView →](./06-list-dan-scrollview.md)**
