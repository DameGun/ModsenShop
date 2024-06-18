import { CommonFonts, FontWeight, MobileFonts } from '@constants/styles';
import { ThemeConstants } from './themeConstants';

import 'styled-components';

export type ColorMode = 'LIGHT' | 'DARK';

export interface ThemeMedia {
  mobile: string;
}

export interface Font {
  weight?: FontWeight;
  size: string;
  lineHeight?: string;
}

export type Fonts<T> = {
  [P in keyof T]: Font;
};

export interface ThemeFonts {
  default: Fonts<typeof CommonFonts>;
  mobile: Fonts<typeof MobileFonts>;
}

export interface ThemeColors {
  mainColors: {
    accent: string;
    white: string;
    whiteAlpha: string;
    black: string;
    blackAlpha200: string;
    blackAlpha700: string;
  };
  neutralColors: {
    lightGray: string;
    gray: string;
    darkGray: string;
  };
  serviceColors: {
    errors: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'DARK' | 'LIGHT';

    colors: ThemeColors;

    media: ThemeMedia;

    fonts: ThemeFonts;

    constants: ThemeConstants;
  }
}
