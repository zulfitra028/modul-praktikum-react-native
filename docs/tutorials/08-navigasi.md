# Tutorial 08: Dasar-Dasar Navigasi

<div align="center">

| Informasi | Keterangan |
|-----------|------------|
| **Durasi** | 60-90 menit |
| **Level** | Menengah |
| **Prasyarat** | Tutorial 07 selesai |

</div>

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, Anda akan mampu:
- Menginstall dan setup React Navigation
- Membuat Stack Navigator
- Navigasi antar screen
- Mengirim data antar screen

---

## 📖 Materi

### Apa itu React Navigation?

**React Navigation** adalah library navigasi paling populer untuk React Native. Memungkinkan perpindahan antar layar dengan berbagai pola navigasi.

### Jenis Navigator

| Navigator | Gunakan Untuk |
|-----------|---------------|
| **Stack** | Navigasi bertumpuk (push/pop) |
| **Tab** | Tab bar di bawah |
| **Drawer** | Menu samping |

---

## 🔧 Instalasi

### Langkah 1: Install Dependencies

```bash
# Core packages
npm install @react-navigation/native

# Dependencies untuk Expo
npx expo install react-native-screens react-native-safe-area-context

# Stack Navigator
npm install @react-navigation/native-stack
```

---

## 💻 Praktik: Multi-Screen App

### Langkah 1: Buat Screen Components

```javascript
// src/screens/HomeScreen.js
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TUTORIALS = [
  { id: '1', title: 'Tutorial 01: Pengenalan', completed: true },
  { id: '2', title: 'Tutorial 02: Struktur Project', completed: true },
  { id: '3', title: 'Tutorial 03: Komponen Dasar', completed: true },
  { id: '4', title: 'Tutorial 04: Styling', completed: true },
  { id: '5', title: 'Tutorial 05: State dan Props', completed: true },
  { id: '6', title: 'Tutorial 06: List dan ScrollView', completed: true },
  { id: '7', title: 'Tutorial 07: Input Pengguna', completed: true },
  { id: '8', title: 'Tutorial 08: Navigasi', completed: true },
];

export default function HomeScreen({ navigation }) {
  const completedCount = TUTORIALS.filter(t => t.completed).length;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', { tutorial: item })}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={[styles.status, item.completed && styles.statusDone]}>
          {item.completed ? '✅ Selesai' : '⏳ Belum'}
        </Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.statsBar}>
        <Text style={styles.statsText}>
          Progress: {completedCount}/{TUTORIALS.length} tutorial selesai
        </Text>
      </View>

      <FlatList
        data={TUTORIALS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileButtonText}>👤 Lihat Profil Saya</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statsBar: {
    backgroundColor: '#e8f4f8',
    padding: 15,
    alignItems: 'center',
  },
  statsText: {
    color: '#3498db',
    fontWeight: '600',
  },
  list: {
    padding: 15,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2c3e50',
  },
  status: {
    fontSize: 12,
    color: '#e67e22',
    marginTop: 4,
  },
  statusDone: {
    color: '#27ae60',
  },
  arrow: {
    fontSize: 24,
    color: '#bdc3c7',
  },
  profileButton: {
    backgroundColor: '#2c3e50',
    margin: 15,
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  profileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

```javascript
// src/screens/DetailScreen.js
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { tutorial } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>📚</Text>
        <Text style={styles.title}>{tutorial.title}</Text>
        <View style={[styles.badge, tutorial.completed && styles.badgeDone]}>
          <Text style={styles.badgeText}>
            {tutorial.completed ? 'Selesai' : 'Belum Selesai'}
          </Text>
        </View>
        <Text style={styles.description}>
          Tutorial ini membahas konsep-konsep penting dalam pengembangan
          aplikasi React Native. Pastikan Anda memahami semua materi
          sebelum melanjutkan ke tutorial berikutnya.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Kembali ke Beranda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 15,
  },
  badge: {
    backgroundColor: '#e67e22',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  badgeDone: {
    backgroundColor: '#27ae60',
  },
  badgeText: {
    color: 'white',
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 22,
  },
  backButton: {
    marginTop: 30,
    padding: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

```javascript
// src/screens/ProfileScreen.js
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/120' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>[Nama Lengkap Anda]</Text>
        <Text style={styles.nim}>NIM: [NIM Anda]</Text>
        <Text style={styles.jurusan}>Teknik Informatika</Text>
        <Text style={styles.fakultas}>Fakultas Teknik - UNISMUH Makassar</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Tutorial</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Selesai</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Progress</Text>
        </View>
      </View>

      <View style={styles.achievementCard}>
        <Text style={styles.achievementTitle}>🎉 Selamat!</Text>
        <Text style={styles.achievementText}>
          Anda telah menyelesaikan semua tutorial React Native!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    backgroundColor: '#ecf0f1',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  nim: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  jurusan: {
    fontSize: 14,
    color: '#3498db',
    marginTop: 5,
  },
  fakultas: {
    fontSize: 12,
    color: '#95a5a6',
    marginTop: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
  },
  achievementCard: {
    backgroundColor: '#27ae60',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  achievementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  achievementText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginTop: 10,
  },
});
```

### Langkah 2: Setup Navigation di App.js

```javascript
// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#3498db' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '🏠 Tutorial React Native' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: '📖 Detail Tutorial' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: '👤 Profil Saya' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Langkah 3: Export Screens

```javascript
// src/screens/index.js
export { default as HomeScreen } from './HomeScreen';
export { default as DetailScreen } from './DetailScreen';
export { default as ProfileScreen } from './ProfileScreen';
```

---

## 🔑 Konsep Penting

### Navigasi ke Screen Lain

```javascript
// Tanpa parameter
navigation.navigate('ScreenName');

// Dengan parameter
navigation.navigate('Detail', { id: 1, title: 'Hello' });
```

### Menerima Parameter

```javascript
function DetailScreen({ route }) {
  const { id, title } = route.params;
  // gunakan id dan title
}
```

### Kembali ke Screen Sebelumnya

```javascript
navigation.goBack();
```

---

## 🎉 Selamat!

Anda telah menyelesaikan semua 8 tutorial React Native!

### Ringkasan yang Dipelajari

| Tutorial | Topik |
|----------|-------|
| 01 | Pengenalan Expo & React Native |
| 02 | Struktur Project |
| 03 | Komponen Dasar |
| 04 | Styling dengan StyleSheet |
| 05 | State dan Props |
| 06 | List dan ScrollView |
| 07 | Input Pengguna |
| 08 | Navigasi Dasar |

---

## ✅ Checklist Pembelajaran

- [ ] Install React Navigation
- [ ] Membuat Stack Navigator
- [ ] Navigasi antar screen
- [ ] Mengirim data dengan params
- [ ] Menerima data dengan route.params
- [ ] Kembali dengan goBack()

---

## 📝 Tugas Praktikum (Tugas Akhir)

### Deskripsi Tugas

Buat aplikasi multi-screen dengan navigasi lengkap.

### Spesifikasi

1. HomeScreen dengan list tutorial
2. DetailScreen untuk detail tutorial
3. ProfileScreen dengan data diri Anda
4. Navigasi antar semua screen

### Screenshot yang Dibutuhkan

| No | Nama File | Deskripsi |
|----|-----------|-----------|
| 1 | `08-home-[nim].png` | Layar Home |
| 2 | `08-detail-[nim].png` | Layar Detail |
| 3 | `08-profile-[nim].png` | Layar Profile dengan data Anda |
| 4 | `08-navigation-[nim].png` | Demo navigasi (back button) |

---

## 📚 Referensi Lanjutan

- [React Navigation Docs](https://reactnavigation.org/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)

---

<div align="center">

**Terima kasih telah menyelesaikan modul praktikum ini!**

🚀 Terus berlatih dan bangun aplikasi yang luar biasa! 🚀

*Laboratorium Informatika - Fakultas Teknik*  
*Universitas Muhammadiyah Makassar*

</div>
