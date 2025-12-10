# Tutorial 04: Styling dengan StyleSheet

<div align="center">

| Informasi | Keterangan |
|-----------|------------|
| **Durasi** | 45-60 menit |
| **Level** | Pemula |
| **Prasyarat** | Tutorial 03 selesai |

</div>

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, Anda akan mampu:
- Menggunakan StyleSheet API
- Memahami Flexbox untuk layout
- Menerapkan berbagai property styling
- Membuat UI yang responsif

---

## 📖 Materi

### StyleSheet API

React Native menggunakan StyleSheet API untuk styling, bukan CSS.

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
});
```

### Mengapa StyleSheet.create()?

- ✅ **Validasi** - Mendeteksi kesalahan saat development
- ✅ **Performa** - Style di-cache dan di-reference by ID
- ✅ **Organisasi** - Memisahkan style dari komponen

---

## 📏 Properties Umum

### Text Styling

| Property | Deskripsi | Contoh |
|----------|-----------|--------|
| `fontSize` | Ukuran font | `16` |
| `fontWeight` | Ketebalan font | `'bold'`, `'600'` |
| `color` | Warna teks | `'#333'`, `'red'` |
| `textAlign` | Alignment teks | `'center'`, `'left'` |
| `lineHeight` | Jarak antar baris | `24` |
| `textTransform` | Transformasi teks | `'uppercase'` |
| `fontStyle` | Gaya font | `'italic'` |
| `textDecorationLine` | Dekorasi | `'underline'` |

```javascript
text: {
  fontSize: 18,
  fontWeight: '600',
  color: '#2c3e50',
  textAlign: 'center',
  lineHeight: 28,
  textTransform: 'capitalize',
}
```

### View/Container Styling

| Property | Deskripsi | Contoh |
|----------|-----------|--------|
| `backgroundColor` | Warna background | `'#f5f5f5'` |
| `padding` | Padding semua sisi | `20` |
| `margin` | Margin semua sisi | `10` |
| `borderRadius` | Border radius | `15` |
| `borderWidth` | Lebar border | `1` |
| `borderColor` | Warna border | `'#ddd'` |
| `width` | Lebar | `100`, `'100%'` |
| `height` | Tinggi | `50` |

```javascript
card: {
  backgroundColor: 'white',
  padding: 20,
  margin: 15,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: '#e0e0e0',
}
```

### Shadow (iOS & Android)

```javascript
shadow: {
  // iOS
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  // Android
  elevation: 5,
}
```

---

## 📐 Flexbox Layout

Flexbox adalah sistem layout utama di React Native.

### Konsep Dasar

```javascript
container: {
  flex: 1,                    // Mengisi ruang yang tersedia
  flexDirection: 'column',    // Arah children (column/row)
  justifyContent: 'center',   // Alignment sumbu utama
  alignItems: 'center',       // Alignment sumbu silang
}
```

### flexDirection

| Value | Deskripsi |
|-------|-----------|
| `column` | Vertikal (default) |
| `row` | Horizontal |
| `column-reverse` | Vertikal terbalik |
| `row-reverse` | Horizontal terbalik |

```javascript
// Horizontal layout
row: {
  flexDirection: 'row',
}

// Vertical layout
column: {
  flexDirection: 'column',
}
```

### justifyContent (Main Axis)

| Value | Deskripsi |
|-------|-----------|
| `flex-start` | Awal (default) |
| `flex-end` | Akhir |
| `center` | Tengah |
| `space-between` | Jarak rata tanpa edge |
| `space-around` | Jarak rata dengan edge setengah |
| `space-evenly` | Jarak rata semua |

### alignItems (Cross Axis)

| Value | Deskripsi |
|-------|-----------|
| `stretch` | Meregangkan (default) |
| `flex-start` | Awal |
| `flex-end` | Akhir |
| `center` | Tengah |

### Contoh Flexbox

```javascript
// Centering
centered: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

// Row with spacing
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

// Multiple items dengan flex
item1: { flex: 1 },  // 1/3 ruang
item2: { flex: 2 },  // 2/3 ruang
```

---

## 🎨 Multiple Styles

### Array of Styles

```javascript
<View style={[styles.card, styles.shadow, { marginTop: 20 }]}>
  <Text style={[styles.text, isActive && styles.activeText]}>
    Hello
  </Text>
</View>
```

### Conditional Styling

```javascript
<Text style={[
  styles.text,
  isError && styles.errorText,
  isSuccess && styles.successText,
]}>
  Status Message
</Text>
```

---

## 💻 Praktik: Button Showcase

Mari buat berbagai variasi button dengan styling berbeda.

```javascript
// src/components/StyledButton.js
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function StyledButton({ 
  title, 
  onPress, 
  variant = 'primary',  // primary, secondary, outline, danger
  size = 'medium',      // small, medium, large
  disabled = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[
        styles.text,
        styles[`${variant}Text`],
        styles[`${size}Text`],
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Variants
  primary: {
    backgroundColor: '#3498db',
  },
  secondary: {
    backgroundColor: '#2ecc71',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3498db',
  },
  danger: {
    backgroundColor: '#e74c3c',
  },
  
  // Sizes
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  
  // Text styles
  text: {
    fontWeight: '600',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
  outlineText: {
    color: '#3498db',
  },
  dangerText: {
    color: 'white',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
  
  // State
  disabled: {
    opacity: 0.5,
  },
});
```

### Button Showcase Screen

```javascript
// App.js atau src/screens/ButtonShowcase.js
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import StyledButton from './src/components/StyledButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Button Showcase</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Variants</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Primary" variant="primary" onPress={() => {}} />
          <StyledButton title="Secondary" variant="secondary" onPress={() => {}} />
          <StyledButton title="Outline" variant="outline" onPress={() => {}} />
          <StyledButton title="Danger" variant="danger" onPress={() => {}} />
        </View>

        <Text style={styles.sectionTitle}>Sizes</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Small" size="small" onPress={() => {}} />
          <StyledButton title="Medium" size="medium" onPress={() => {}} />
          <StyledButton title="Large" size="large" onPress={() => {}} />
        </View>

        <Text style={styles.sectionTitle}>States</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Normal" onPress={() => {}} />
          <StyledButton title="Disabled" disabled onPress={() => {}} />
        </View>
      </ScrollView>
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
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 15,
  },
  buttonGroup: {
    gap: 10,
  },
});
```

---

## ✅ Checklist Pembelajaran

- [ ] Memahami StyleSheet.create()
- [ ] Mengetahui property text styling
- [ ] Mengetahui property container styling
- [ ] Memahami Flexbox (flex, flexDirection)
- [ ] Memahami justifyContent dan alignItems
- [ ] Bisa menggabungkan multiple styles
- [ ] Bisa membuat conditional styling

---

## 📝 Tugas Praktikum

### Deskripsi Tugas

Buat komponen `StyledButton` dan halaman Button Showcase.

### Spesifikasi

1. Buat komponen Button dengan minimal 3 variant warna
2. Buat 3 ukuran button (small, medium, large)
3. Implementasikan state disabled
4. Buat halaman showcase yang menampilkan semua variasi

### Screenshot yang Dibutuhkan

| No | Nama File | Deskripsi |
|----|-----------|-----------|
| 1 | `04-button-showcase-[nim].png` | Screenshot semua button variants |
| 2 | `04-flexbox-layout-[nim].png` | Screenshot layout dengan Flexbox |

---

**[← Kembali ke Tutorial 03](./03-komponen-dasar.md)** | **[Lanjut ke Tutorial 05: State dan Props →](./05-state-dan-props.md)**
