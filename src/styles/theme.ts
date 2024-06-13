import { MOBILE_WIDTH, FontWeight } from '@constants/styles';
import { ThemeColors, ThemeFonts, ThemeMedia } from '@ts/styled';
import { DefaultTheme } from 'styled-components';

const baseColors: Pick<ThemeColors, 'serviceColors'> = {
  serviceColors: {
    errors: '#d82700',
  },
};

const baseMedia: ThemeMedia = {
  mobile: `(max-width: ${MOBILE_WIDTH})`,
};

const baseFonts: ThemeFonts = {
  default: {
    heading1: {
      weight: FontWeight.medium,
      size: '33px',
    },
    heading2: {
      size: '26px',
      lineHeight: '35px',
    },
    heading3: {
      size: '20px',
      lineHeight: '26px',
    },
    heading4: {
      weight: FontWeight.medium,
      size: '16px',
      lineHeight: '20px',
    },
    heading5: {
      size: '16px',
      lineHeight: '27px',
      weight: FontWeight.regular,
    },
    bodyLarge: {
      weight: FontWeight.bold,
      size: '16px',
    },
    bodyMedium: {
      size: '14px',
    },
    bodySmall: {
      size: '12px',
      lineHeight: '20px',
    },
  },
  mobile: {
    heading1: {
      size: '20px',
      lineHeight: '26px',
    },
    heading2: {
      size: '16px',
      lineHeight: '27px',
    },
    heading3: {
      size: '14px',
    },
    bodySmall: {
      size: '12px',
    },
  },
};

export const darkTheme: DefaultTheme = {
  mode: 'DARK',

  colors: {
    mainColors: {
      accent: '#b4a186',
      white: '#0a0a0a',
      whiteAlpha: 'rgba(10, 10, 10, 0.2)',
      black: '#fbfbfb',
      blackAlpha200: 'rgba(251, 251, 251, 0.2)',
      blackAlpha700: 'rgba(251, 251, 251, 0.7)',
    },
    neutralColors: {
      lightGray: '#272727',
      gray: '#3d3d3d',
      darkGray: '#9a9a9a',
    },
    ...baseColors,
  },

  media: baseMedia,

  fonts: baseFonts,
};

export const lightTheme: DefaultTheme = {
  mode: 'LIGHT',

  colors: {
    mainColors: {
      accent: '#b4a186',
      white: '#fbfbfb',
      whiteAlpha: 'rgba(251, 251, 251, 0.3)',
      black: '#000000',
      blackAlpha200: 'rgba(10, 10, 10, 0.2)',
      blackAlpha700: 'rgba(10, 10, 10, 0.7)',
    },
    neutralColors: {
      lightGray: '#efefef',
      gray: '#d8d8d8',
      darkGray: '#707070',
    },
    ...baseColors,
  },

  media: baseMedia,

  fonts: baseFonts,
};
