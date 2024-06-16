import { ImageFillContainer } from '@components/Image';
import { BORDER_RADUIS_SM, GAP_MD, GAP_SM, ProductCardSize } from '@constants/styles';
import styled from 'styled-components';
import { ProductCardStyleProps } from '.';

export const ProductCardContainer = styled.div<ProductCardStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => ProductCardSize[props.$cardSize]};
  place-self: center;

  &:hover span {
    visibility: visible;
  }

  @media ${(props) => props.theme.media.mobile} {
    width: ${ProductCardSize.sm};
  }
`;

export const ProductCardContent = styled.div`
  margin-top: ${GAP_SM};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${GAP_MD};

  @media ${(props) => props.theme.media.mobile} {
    margin-top: 0;
    gap: ${GAP_SM};
  }
`;

export const CardHoverSpan = styled.span`
  visibility: hidden;
  position: absolute;
  text-transform: uppercase;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1em 0;
  text-align: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: ${(props) => props.theme.colors.neutralColors.lightGray};
  cursor: pointer;
`;

export const ProductCardImageContainer = styled.div`
  position: relative;
`;

export const ProductCardImage = styled(ImageFillContainer)`
  border-radius: ${BORDER_RADUIS_SM};
  &:hover {
    opacity: 0.8;
  }
`;
