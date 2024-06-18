import {
  MOBILE_WIDTH,
  FontWeight,
  PRODUCT_CARD_WIDTH_SM,
  PRODUCT_CARD_WIDTH_MD,
  PRODUCT_CARD_WIDTH_LG,
  ICON_SIZE_SM,
  ICON_SIZE_MD,
  ICON_SIZE_LG,
  GAP_SM,
  GAP_MD,
  GAP_LG,
  GAP_XL,
  TRANSITION_TIME_SM,
  TRANSITION_TIME_MD,
  CAROUSEL_MAX_HEIGHT,
  CAROUSEL_LENGTH,
  CAROUSEL_ANIMATION_DURATION,
  BASIC_BOX_SHADOW_PARAMS,
  BORDER_RADUIS_SM,
  BORDER_RADUIS_MD,
  BORDER_RADIUS_LG,
  BUTTON_PADDING_X,
  BUTTON_SM_PADDING_Y,
  BUTTON_MD_PADDING_Y,
  SLIDER_HEIGHT,
  SLIDER_THUMB_HEIGHT,
  SLIDER_THUMB_WIDTH,
  SLIDER_STEP,
  HEADER_MENU_Z_INDEX,
  FILTER_MENU_Z_INDEX,
} from '@constants/styles';
import { ThemeColors, ThemeFonts, ThemeMedia } from 'types/theme';
import { DefaultTheme } from 'styled-components';
import { ThemeConstants } from 'types/themeConstants';

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
      weight: FontWeight.regular,
    },
    heading3: {
      size: '20px',
      lineHeight: '26px',
      weight: FontWeight.regular,
    },
    heading4: {
      weight: FontWeight.medium,
      size: '20px',
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

const baseConstants: ThemeConstants = {
  productCardWidth: {
    sm: PRODUCT_CARD_WIDTH_SM,
    md: PRODUCT_CARD_WIDTH_MD,
    lg: PRODUCT_CARD_WIDTH_LG,
  },
  iconSize: {
    sm: ICON_SIZE_SM,
    md: ICON_SIZE_MD,
    lg: ICON_SIZE_LG,
  },
  gap: {
    sm: GAP_SM,
    md: GAP_MD,
    lg: GAP_LG,
    xl: GAP_XL,
  },
  transitionTime: {
    sm: TRANSITION_TIME_SM,
    md: TRANSITION_TIME_MD,
  },
  carousel: {
    maxHeight: CAROUSEL_MAX_HEIGHT,
    length: CAROUSEL_LENGTH,
    animationDuration: CAROUSEL_ANIMATION_DURATION,
  },
  boxShadow: BASIC_BOX_SHADOW_PARAMS,
  borderRadius: {
    sm: BORDER_RADUIS_SM,
    md: BORDER_RADUIS_MD,
    lg: BORDER_RADIUS_LG,
  },
  button: {
    paddingX: BUTTON_PADDING_X,
    paddingY: {
      sm: BUTTON_SM_PADDING_Y,
      md: BUTTON_MD_PADDING_Y,
    },
  },
  slider: {
    height: SLIDER_HEIGHT,
    thumbHeight: SLIDER_THUMB_HEIGHT,
    thumbWidth: SLIDER_THUMB_WIDTH,
    step: SLIDER_STEP,
  },
  zIndexes: {
    headerMenu: HEADER_MENU_Z_INDEX,
    filterMenu: FILTER_MENU_Z_INDEX,
  },
  fontWeight: FontWeight,
};

const baseTheme: Pick<DefaultTheme, 'media' | 'fonts' | 'constants'> = {
  media: baseMedia,

  fonts: baseFonts,

  constants: baseConstants,
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

  ...baseTheme,
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

  ...baseTheme,
};
