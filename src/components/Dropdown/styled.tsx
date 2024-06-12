import Icon from '@components/Icon';
import { Heading3 } from '@components/Text';
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
  position: absolute;
  left: 0;
  width: 100vh;
  padding: 2em 3%;
  background-color: ${(props) => props.theme.colors.mainColors.white};
`;

export const DropdownButton = styled(Icon)``;

export const DropdownItem = styled(Heading3)``;
