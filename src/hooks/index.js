/**
 * Custom Hooks
 * 
 * Tempat untuk membuat custom hooks yang dapat digunakan
 * di berbagai komponen.
 * 
 * Contoh penggunaan:
 * import { useToggle, useDebounce } from './hooks';
 */

import { useState, useCallback, useEffect, useRef } from 'react';

/**
 * Hook untuk toggle boolean state
 * 
 * @param {boolean} initialValue - Nilai awal
 * @returns {[boolean, function]} - [value, toggle]
 * 
 * Contoh:
 * const [isOpen, toggleOpen] = useToggle(false);
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

/**
 * Hook untuk debounce value
 * 
 * @param {any} value - Value yang akan di-debounce
 * @param {number} delay - Delay dalam ms
 * @returns {any} - Debounced value
 * 
 * Contoh:
 * const debouncedSearch = useDebounce(searchTerm, 500);
 */
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook untuk menyimpan previous value
 * 
 * @param {any} value - Value yang akan disimpan
 * @returns {any} - Previous value
 * 
 * Contoh:
 * const previousCount = usePrevious(count);
 */
export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/**
 * Hook untuk counter
 * 
 * @param {number} initialValue - Nilai awal
 * @returns {object} - { count, increment, decrement, reset }
 * 
 * Contoh:
 * const { count, increment, decrement, reset } = useCounter(0);
 */
export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
}

/**
 * Hook untuk form input
 * 
 * @param {any} initialValue - Nilai awal
 * @returns {object} - { value, onChange, reset }
 * 
 * Contoh:
 * const name = useInput('');
 * <TextInput value={name.value} onChangeText={name.onChange} />
 */
export function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((text) => setValue(text), []);
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return { value, onChange, reset };
}
