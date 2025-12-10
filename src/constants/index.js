/**
 * Export semua konstanta
 * 
 * Penggunaan:
 * import { Colors, Sizes, Fonts } from './constants';
 */

export { Colors, default as colors } from './colors';

// Ukuran umum
export const Sizes = {
  // Padding & Margin
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,

  // Border Radius
  radiusSm: 4,
  radiusMd: 8,
  radiusLg: 16,
  radiusXl: 24,
  radiusFull: 9999,

  // Font Sizes
  fontXs: 10,
  fontSm: 12,
  fontMd: 14,
  fontLg: 16,
  fontXl: 20,
  fontXxl: 24,
  fontTitle: 28,
  fontHeader: 32,

  // Icon Sizes
  iconSm: 16,
  iconMd: 24,
  iconLg: 32,
  iconXl: 48,

  // Component Heights
  buttonHeight: 48,
  inputHeight: 48,
  headerHeight: 56,
  tabBarHeight: 60,
};

// Font families (gunakan font yang tersedia di sistem)
export const Fonts = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  light: 'System',
};

// Shadows
export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};
