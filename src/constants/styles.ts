export const MOBILE_WIDTH = '800px';

export const PRODUCT_CARD_WIDTH_SM = '136px';
export const PRODUCT_CARD_WIDTH_MD = '300px';
export const PRODUCT_CARD_WIDTH_LG = '380px';

export const GAP_SM = '0.5em';
export const GAP_MD = '1em';
export const GAP_LG = '2em';
export const GAP_XL = '3em';

export const TRANSITION_TIME_SM = '0.2s';
export const TRANSITION_TIME_MD = '0.4s';

export const CAROUSEL_MAX_HEIGHT = '646px';
export const CAROUSEL_LENGTH = 5;
export const CAROUSEL_ANIMATION_DURATION = 5000;

export const BASIC_BOX_SHADOW_PARAMS = '1px 1px 10px 1px';

export const BORDER_RADUIS_SM = '4px';
export const BORDER_RADUIS_MD = '8px';
export const BORDER_RADIUS_LG = '16px';

export const BUTTON_PADDING_X = '0.5em';
export const BUTTON_SM_PADDING_Y = '0.8em';
export const BUTTON_MD_PADDING_Y = '3em';
export const BUTTON_BORDER_WIDTH = '2px';

export const SLIDER_HEIGHT = '0.1em';
export const SLIDER_THUMB_HEIGHT = '0.8em';
export const SLIDER_THUMB_WIDTH = '0.2em';
export const SLIDER_STEP = 2;

export const ALERTS_SECTION_Z_INDEX = 25;
export const HEADER_MENU_Z_INDEX = 20;
export const FILTER_MENU_Z_INDEX = 15;
export const MODAL_Z_INDEX = 30;

export const ICON_SIZE_SM = '1em';
export const ICON_SIZE_MD = '1.5em';
export const ICON_SIZE_LG = '2em';

export const ALERT_DEFAULT_LIFETIME_MS = 5000;

export const OPACITY_ANIMATION = (transitionTime: number) => `
 @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: appear;
  animation-duration: ${transitionTime}s;
`;

export enum FontWeight {
  regular = '400',
  medium = '500',
  bold = '700',
}

export const MobileFonts = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  bodySmall: 'p',
};

export const CommonFonts = {
  heading4: 'h4',
  heading5: 'h5',
  bodyLarge: 'p',
  bodyMedium: 'p',
  formError: 'p',
  ...MobileFonts,
};
