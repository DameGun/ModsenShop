import { GAP_LG, GAP_MD, GAP_XL, ProductCardSize } from '@constants/styles';
import styled from 'styled-components';
import { ProductCardStyleProps } from '@components/ProductCard';

export const ProductsContainer = styled.div<ProductCardStyleProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => ProductCardSize[props.$cardSize]}, 1fr)
  );
  grid-gap: ${GAP_XL} ${GAP_LG};
  grid-area: products;

  @media ${(props) => props.theme.media.mobile} {
    grid-gap: ${GAP_XL} ${GAP_MD};

    grid-template-columns: repeat(auto-fit, minmax(${ProductCardSize.sm}, 1fr));
  }
`;
