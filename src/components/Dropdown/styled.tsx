import { GAP_LG } from '@constants/styles';
import styled from 'styled-components';

export const StyledDropdown = styled.div`
  display: none;

  @media ${(props) => props.theme.media.mobile} {
    & {
      display: block;
    }
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  left: 0;
  width: 100vh;
  padding: 2em 3%;
  gap: ${GAP_LG};
  z-index: 10;
  background-color: ${(props) => props.theme.colors.mainColors.white};
`;
