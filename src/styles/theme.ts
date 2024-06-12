import { ThemeColors, ThemeMedia } from '@ts/styled';
import { DefaultTheme } from 'styled-components';

const baseColors: Pick<ThemeColors, 'serviceColors'> = {
  serviceColors: {
    errors: '#d82700',
  },
};

const baseMedia: ThemeMedia = {
  mobile: '(max-width: 480px)',
};

export const darkTheme: DefaultTheme = {
  mode: 'DARK',

  colors: {
    mainColors: {
      accent: '#b4a186',
      white: '#0a0a0a',
      black: '#fbfbfb',
    },
    neutralColors: {
      lightGray: '#9a9a9a',
      gray: '#3d3d3d',
      darkGray: '#272727',
    },
    ...baseColors,
  },

  media: {
    ...baseMedia,
  },
};

export const lightTheme: DefaultTheme = {
  mode: 'LIGHT',

  colors: {
    mainColors: {
      accent: '#b4a186',
      white: '#fbfbfb',
      black: '#000000',
    },
    neutralColors: {
      lightGray: '#efefef',
      gray: '#d8d8d8',
      darkGray: '#707070',
    },
    ...baseColors,
  },

  media: {
    ...baseMedia,
  },
};
