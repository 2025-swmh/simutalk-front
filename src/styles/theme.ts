const font = {
  heading1: {
    fontSize: '2.5rem', // 40px
    lineHeight: '3rem', // 48px
    fontWeight: 600,
  },
  heading2: {
    fontSize: '2.25rem', // 36px
    lineHeight: '2.625rem', // 42px
    fontWeight: 600,
  },
  heading3: {
    fontSize: '1.75rem', // 28px
    lineHeight: '2.25rem', // 36px
    fontWeight: 600,
  },
  heading4: {
    fontSize: '1.5rem', // 24px
    lineHeight: '2rem', // 32px
    fontWeight: 500,
  },

  title1: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.5rem', // 24px
    fontWeight: 600,
  },
  title2: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.5rem', // 24px
    fontWeight: 500,
  },
  title3: {
    fontSize: '1.125rem', // 18px
    lineHeight: '1.25rem', // 20px
    fontWeight: 500,
  },
  title4: {
    fontSize: '1.125rem', // 18px
    lineHeight: '1.25rem', // 20px
    fontWeight: 400,
  },

  body1: {
    fontSize: '1rem', // 16px
    lineHeight: '1.25rem', // 20px
    fontWeight: 500,
  },
  body2: {
    fontSize: '1rem', // 16px
    lineHeight: '1.25rem', // 20px
    fontWeight: 400,
  },

  label1: {
    fontSize: '0.875rem', // 14px
    lineHeight: '1.125rem', // 18px
    fontWeight: 500,
  },
  label2: {
    fontSize: '0.875rem', // 14px
    lineHeight: '1.125rem', // 18px
    fontWeight: 400,
  },
};

const color = {
  orange: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#EA580C',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',
    950: '#431407',
  },
  zinc: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
    950: '#09090B',
  },
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },
  yellow: {
    50: '#FEFCE8',
    100: '#FEF9C3',
    200: '#FEF08A',
    300: '#FDE047',
    400: '#FACC15',
    500: '#EAB308',
    600: '#CA8A04',
    700: '#A16207',
    800: '#854D0E',
    900: '#713F12',
    950: '#422006',
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },

  black: '#000000',
  white: '#FFFFFF',
};

const spacing = {
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
};

const borderRadius = {
  small: '4px',
  medium: '8px',
  large: '16px',
  circle: '50%',
};

const shadows = {
  subtle: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
};

const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
};

export const theme = {
  font,
  color,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  mediaQueries,
};
