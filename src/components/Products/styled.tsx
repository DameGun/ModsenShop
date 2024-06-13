import { GAP_LG, PRODUCT_CARD_WIDTH } from '@constants/styles';
import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${PRODUCT_CARD_WIDTH}, 1fr));
  gap: ${GAP_LG};
`;
