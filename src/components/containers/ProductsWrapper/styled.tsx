import { ProductCardStyleProps } from '@components/containers/ProductCard';
import styled from 'styled-components';

export const ProductsWrapperContainer = styled.div<ProductCardStyleProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.theme.constants.productCardWidth[props.$cardSize]}, 1fr)
  );
  grid-gap: ${(props) => props.theme.constants.gap.xl} ${(props) => props.theme.constants.gap.lg};
  grid-area: products;

  @media ${(props) => props.theme.media.mobile} {
    grid-gap: ${(props) => props.theme.constants.gap.xl} ${(props) => props.theme.constants.gap.md};

    grid-template-columns: repeat(
      auto-fit,
      minmax(${(props) => props.theme.constants.productCardWidth.sm}, 1fr)
    );
  }
`;
