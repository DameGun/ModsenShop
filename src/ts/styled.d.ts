import 'styled-components';

export interface ThemeMedia {
  mobile: string;
}

export interface ThemeColors {
  mainColors: {
    accent: string;
    white: string;
    black: string;
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
  }
}
