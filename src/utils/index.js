/**
 * Fungsi Utilitas
 * 
 * Kumpulan fungsi helper yang dapat digunakan
 * di berbagai tempat dalam aplikasi.
 * 
 * Contoh penggunaan:
 * import { formatDate, validateEmail } from './utils';
 */

/**
 * Format tanggal ke format Indonesia
 * @param {Date|string} date - Tanggal yang akan diformat
 * @returns {string} - Tanggal dalam format "DD MMMM YYYY"
 * 
 * Contoh:
 * formatDate(new Date()) // "10 Desember 2024"
 */
export function formatDate(date) {
  const d = new Date(date);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return d.toLocaleDateString('id-ID', options);
}

/**
 * Format tanggal dengan waktu
 * @param {Date|string} date - Tanggal yang akan diformat
 * @returns {string} - Tanggal dan waktu dalam format Indonesia
 */
export function formatDateTime(date) {
  const d = new Date(date);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return d.toLocaleDateString('id-ID', options);
}

/**
 * Validasi format email
 * @param {string} email - Email yang akan divalidasi
 * @returns {boolean} - true jika valid
 * 
 * Contoh:
 * validateEmail('test@example.com') // true
 */
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validasi nomor telepon Indonesia
 * @param {string} phone - Nomor telepon
 * @returns {boolean} - true jika valid
 */
export function validatePhone(phone) {
  const regex = /^(\+62|62|0)8[1-9][0-9]{6,10}$/;
  return regex.test(phone.replace(/\s/g, ''));
}

/**
 * Capitalize huruf pertama setiap kata
 * @param {string} str - String yang akan diformat
 * @returns {string} - String dengan huruf kapital
 * 
 * Contoh:
 * capitalizeWords('hello world') // "Hello World"
 */
export function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Truncate text dengan ellipsis
 * @param {string} text - Text yang akan dipotong
 * @param {number} maxLength - Panjang maksimal
 * @returns {string} - Text yang sudah dipotong
 * 
 * Contoh:
 * truncateText('Hello World', 5) // "Hello..."
 */
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Format angka ke format Rupiah
 * @param {number} amount - Jumlah yang akan diformat
 * @returns {string} - Format Rupiah
 * 
 * Contoh:
 * formatRupiah(50000) // "Rp 50.000"
 */
export function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Generate random ID
 * @param {number} length - Panjang ID
 * @returns {string} - Random ID
 */
export function generateId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Delay execution (untuk async/await)
 * @param {number} ms - Waktu delay dalam milidetik
 * @returns {Promise} - Promise yang resolve setelah delay
 * 
 * Contoh:
 * await delay(1000); // tunggu 1 detik
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check apakah string kosong
 * @param {string} str - String yang akan dicek
 * @returns {boolean} - true jika kosong/whitespace
 */
export function isEmpty(str) {
  return !str || str.trim().length === 0;
}

/**
 * Deep clone object
 * @param {object} obj - Object yang akan di-clone
 * @returns {object} - Clone dari object
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
