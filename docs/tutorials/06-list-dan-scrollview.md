# Tutorial 06: List dan ScrollView

<div align="center">

| Informasi | Keterangan |
|-----------|------------|
| **Durasi** | 60 menit |
| **Level** | Menengah |
| **Prasyarat** | Tutorial 05 selesai |

</div>

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, Anda akan mampu:
- Menggunakan ScrollView untuk konten scrollable
- Menggunakan FlatList untuk list data yang efisien
- Menggunakan SectionList untuk data berkelompok
- Memahami kapan menggunakan masing-masing komponen

---

## 📖 Materi

### Perbandingan Komponen List

| Komponen | Gunakan Ketika |
|----------|----------------|
| `ScrollView` | Konten sedikit, semua harus di-render |
| `FlatList` | List panjang, perlu performa optimal |
| `SectionList` | Data berkelompok dengan header |

---

## 📜 ScrollView

ScrollView me-render semua children sekaligus.

```javascript
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function MyScrollView() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}><Text>Item 1</Text></View>
      <View style={styles.item}><Text>Item 2</Text></View>
      <View style={styles.item}><Text>Item 3</Text></View>
    </ScrollView>
  );
}
```

### Props ScrollView

| Prop | Deskripsi |
|------|-----------|
| `horizontal` | Scroll horizontal |
| `showsVerticalScrollIndicator` | Tampilkan scrollbar |
| `contentContainerStyle` | Style untuk konten |
| `refreshControl` | Pull to refresh |

---

## 📋 FlatList

FlatList hanya me-render item yang terlihat (lazy rendering).

```javascript
import { FlatList, View, Text, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

function MyFlatList() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
```

### Props FlatList Penting

| Prop | Deskripsi |
|------|-----------|
| `data` | Array data |
| `renderItem` | Fungsi render item |
| `keyExtractor` | Fungsi untuk key unik |
| `ListHeaderComponent` | Komponen header |
| `ListFooterComponent` | Komponen footer |
| `ListEmptyComponent` | Komponen saat data kosong |
| `ItemSeparatorComponent` | Separator antar item |
| `numColumns` | Jumlah kolom (grid) |
| `onRefresh` | Handler pull to refresh |
| `refreshing` | Status refreshing |

---

## 📑 SectionList

Untuk data yang dikelompokkan dengan header section.

```javascript
import { SectionList, Text, View } from 'react-native';

const DATA = [
  {
    title: 'Buah',
    data: ['Apel', 'Jeruk', 'Mangga'],
  },
  {
    title: 'Sayur',
    data: ['Bayam', 'Kangkung', 'Sawi'],
  },
];

function MySectionList() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
}
```

---

## 💻 Praktik: Todo List App

### Langkah 1: Buat TodoItem Component

```javascript
// src/components/TodoItem.js
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.checkbox}
        onPress={() => onToggle(item.id)}
      >
        <Text style={styles.checkmark}>
          {item.completed ? '✅' : '⬜'}
        </Text>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Text style={[
          styles.title,
          item.completed && styles.completedTitle
        ]}>
          {item.title}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  checkbox: {
    marginRight: 10,
  },
  checkmark: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#2c3e50',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  date: {
    fontSize: 12,
    color: '#bdc3c7',
    marginTop: 4,
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    fontSize: 20,
  },
});
```

### Langkah 2: Buat Todo List App

```javascript
// App.js
import { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  FlatList, 
  TextInput,
  TouchableOpacity,
  StyleSheet 
} from 'react-native';
import TodoItem from './src/components/TodoItem';

const INITIAL_TODOS = [
  { id: '1', title: 'Belajar React Native', completed: true, date: '10 Des 2024' },
  { id: '2', title: 'Mengerjakan Tutorial 06', completed: false, date: '10 Des 2024' },
  { id: '3', title: 'Upload Screenshot', completed: false, date: '10 Des 2024' },
];

export default function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const todo = {
      id: Date.now().toString(),
      title: newTodo,
      completed: false,
      date: new Date().toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      }),
    };
    
    setTodos([todo, ...todos]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📝 Todo List</Text>
        <Text style={styles.headerSubtitle}>
          {completedCount}/{todos.length} selesai
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tambah tugas baru..."
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>🎉</Text>
            <Text style={styles.emptyText}>Tidak ada tugas!</Text>
            <Text style={styles.emptySubtext}>Tambahkan tugas baru</Text>
          </View>
        }
        contentContainerStyle={todos.length === 0 && styles.emptyList}
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
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#27ae60',
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  emptyEmoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#95a5a6',
    marginTop: 5,
  },
  emptyList: {
    flex: 1,
  },
});
```

---

## ✅ Checklist Pembelajaran

- [ ] Memahami ScrollView
- [ ] Memahami FlatList dan props-nya
- [ ] Memahami SectionList
- [ ] Bisa membuat list dengan data dinamis
- [ ] Bisa implement CRUD operations pada list
- [ ] Memahami ListEmptyComponent

---

## 📝 Tugas Praktikum

### Deskripsi Tugas

Buat aplikasi Todo List dengan FlatList.

### Spesifikasi

1. Tampilkan list todo dengan FlatList
2. Bisa menambah todo baru
3. Bisa toggle status completed
4. Bisa hapus todo
5. Tampilkan empty state saat tidak ada todo

### Screenshot yang Dibutuhkan

| No | Nama File | Deskripsi |
|----|-----------|-----------|
| 1 | `06-todo-list-[nim].png` | Todo list dengan beberapa item |
| 2 | `06-completed-[nim].png` | Todo dengan item yang sudah selesai |
| 3 | `06-empty-state-[nim].png` | Tampilan saat list kosong |

---

**[← Kembali ke Tutorial 05](./05-state-dan-props.md)** | **[Lanjut ke Tutorial 07: Input Pengguna →](./07-input-pengguna.md)**
