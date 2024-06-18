import { allertaStencil, dmSansBold, dmSansMedium, dmSansRegular } from '@assets/fonts';
import { css } from 'styled-components';

export default css`
  @font-face {
    font-family: 'DM Sans';
    src: url(${dmSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${dmSansMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${dmSansBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Allerta Stencil';
    src: url(${allertaStencil}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;
