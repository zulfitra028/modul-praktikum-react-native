# Tutorial 07: Input Pengguna

<div align="center">

| Informasi | Keterangan |
|-----------|------------|
| **Durasi** | 60 menit |
| **Level** | Menengah |
| **Prasyarat** | Tutorial 06 selesai |

</div>

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, Anda akan mampu:
- Menggunakan TextInput untuk input teks
- Menangani berbagai jenis input (email, password, number)
- Melakukan validasi form sederhana
- Membuat form yang user-friendly

---

## 📖 Materi

### TextInput Component

```javascript
import { TextInput, StyleSheet } from 'react-native';

function MyInput() {
  const [text, setText] = useState('');
  
  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={setText}
      placeholder="Masukkan teks..."
    />
  );
}
```

### Props TextInput Penting

| Prop | Deskripsi |
|------|-----------|
| `value` | Nilai input (controlled) |
| `onChangeText` | Handler perubahan teks |
| `placeholder` | Placeholder text |
| `keyboardType` | Tipe keyboard |
| `secureTextEntry` | Password mode |
| `multiline` | Multiple lines |
| `maxLength` | Max karakter |
| `autoCapitalize` | Auto capitalize |
| `autoCorrect` | Auto correct |
| `editable` | Bisa diedit |

### Keyboard Types

| Type | Deskripsi |
|------|-----------|
| `default` | Keyboard standar |
| `email-address` | Untuk email |
| `numeric` | Angka saja |
| `phone-pad` | Untuk nomor telepon |
| `number-pad` | Angka tanpa desimal |
| `decimal-pad` | Angka dengan desimal |

---

## 💻 Praktik: Form Registrasi

### Langkah 1: Buat FormInput Component

```javascript
// src/components/FormInput.js
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function FormInput({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  keyboardType = 'default',
  secureTextEntry = false,
  multiline = false,
  autoCapitalize = 'sentences',
}) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          multiline && styles.multiline,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#95a5a6"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        autoCapitalize={autoCapitalize}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#2c3e50',
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  error: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 5,
  },
});
```

### Langkah 2: Buat Registration Form

```javascript
// App.js
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import FormInput from './src/components/FormInput';

export default function App() {
  const [form, setForm] = useState({
    nama: '',
    nim: '',
    email: '',
    password: '',
    konfirmasiPassword: '',
    alamat: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    // Clear error saat user mengetik
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Validasi Nama
    if (!form.nama.trim()) {
      newErrors.nama = 'Nama wajib diisi';
    } else if (form.nama.length < 3) {
      newErrors.nama = 'Nama minimal 3 karakter';
    }

    // Validasi NIM
    if (!form.nim.trim()) {
      newErrors.nim = 'NIM wajib diisi';
    } else if (!/^\d{12}$/.test(form.nim)) {
      newErrors.nim = 'NIM harus 12 digit angka';
    }

    // Validasi Email
    if (!form.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    // Validasi Password
    if (!form.password) {
      newErrors.password = 'Password wajib diisi';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }

    // Validasi Konfirmasi Password
    if (form.password !== form.konfirmasiPassword) {
      newErrors.konfirmasiPassword = 'Password tidak cocok';
    }

    // Validasi Alamat
    if (!form.alamat.trim()) {
      newErrors.alamat = 'Alamat wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
      Alert.alert(
        'Registrasi Berhasil! 🎉',
        `Selamat datang, ${form.nama}!\nNIM: ${form.nim}`,
        [{ text: 'OK' }]
      );
    }
  };

  const handleReset = () => {
    setForm({
      nama: '',
      nim: '',
      email: '',
      password: '',
      konfirmasiPassword: '',
      alamat: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📝 Form Registrasi</Text>
          <Text style={styles.headerSubtitle}>
            Lengkapi data diri Anda
          </Text>
        </View>

        <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
          <FormInput
            label="Nama Lengkap"
            value={form.nama}
            onChangeText={(v) => updateForm('nama', v)}
            placeholder="Masukkan nama lengkap"
            error={errors.nama}
            autoCapitalize="words"
          />

          <FormInput
            label="NIM"
            value={form.nim}
            onChangeText={(v) => updateForm('nim', v)}
            placeholder="Masukkan NIM (12 digit)"
            error={errors.nim}
            keyboardType="numeric"
          />

          <FormInput
            label="Email"
            value={form.email}
            onChangeText={(v) => updateForm('email', v)}
            placeholder="Masukkan email"
            error={errors.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <FormInput
            label="Password"
            value={form.password}
            onChangeText={(v) => updateForm('password', v)}
            placeholder="Masukkan password"
            error={errors.password}
            secureTextEntry
          />

          <FormInput
            label="Konfirmasi Password"
            value={form.konfirmasiPassword}
            onChangeText={(v) => updateForm('konfirmasiPassword', v)}
            placeholder="Ulangi password"
            error={errors.konfirmasiPassword}
            secureTextEntry
          />

          <FormInput
            label="Alamat"
            value={form.alamat}
            onChangeText={(v) => updateForm('alamat', v)}
            placeholder="Masukkan alamat lengkap"
            error={errors.alamat}
            multiline
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Daftar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Reset Form</Text>
          </TouchableOpacity>

          {submitted && (
            <View style={styles.successBox}>
              <Text style={styles.successText}>
                ✅ Form berhasil disubmit!
              </Text>
            </View>
          )}

          <View style={{ height: 50 }} />
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  form: {
    flex: 1,
    padding: 20,
  },
  submitButton: {
    backgroundColor: '#27ae60',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#7f8c8d',
    fontSize: 16,
  },
  successBox: {
    backgroundColor: '#d5f4e6',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  successText: {
    color: '#27ae60',
    fontWeight: '600',
  },
});
```

---

## ✅ Checklist Pembelajaran

- [ ] Memahami TextInput dan props-nya
- [ ] Bisa membuat berbagai jenis input
- [ ] Memahami validasi form
- [ ] Bisa menampilkan error message
- [ ] Memahami KeyboardAvoidingView

---

## 📝 Tugas Praktikum

### Deskripsi Tugas

Buat form registrasi dengan validasi lengkap.

### Spesifikasi

1. Form dengan field: Nama, NIM, Email, Password, Alamat
2. Validasi setiap field
3. Tampilkan pesan error
4. Submit button dan Reset button
5. Alert saat berhasil submit

### Screenshot yang Dibutuhkan

| No | Nama File | Deskripsi |
|----|-----------|-----------|
| 1 | `07-form-empty-[nim].png` | Form kosong |
| 2 | `07-form-errors-[nim].png` | Form dengan error validasi |
| 3 | `07-form-filled-[nim].png` | Form terisi lengkap |
| 4 | `07-form-success-[nim].png` | Alert sukses submit |

---

**[← Kembali ke Tutorial 06](./06-list-dan-scrollview.md)** | **[Lanjut ke Tutorial 08: Navigasi →](./08-navigasi.md)**
