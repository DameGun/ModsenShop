import { GAP_SM, GAP_XL } from '@constants/styles';
import styled from 'styled-components';

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${GAP_SM};

  & > :nth-child(2) {
    flex: 4;
    align-items: center;
  }

  & > :nth-child(1) {
    flex: 1;
  }

  @media ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    gap: ${GAP_XL};
  }
`;
