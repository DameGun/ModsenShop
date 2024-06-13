import { ImageFillContainer } from '@components/Image';
import { BORDER_RADUIS_SM, GAP_MD } from '@constants/styles';
import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:hover span {
    visibility: visible;
  }
`;

export const ProductCardContent = styled.div`
  margin-top: 1em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${GAP_MD};
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
