import styled from 'styled-components';
import { FlexColumn } from '../Flex';

export const StyledDropdown = styled.div`
  display: none;

  @media ${(props) => props.theme.media.mobile} {
    display: block;
  }
`;

export const DropdownContainer = styled(FlexColumn)`
  height: 100%;
  position: fixed;
  width: 94%;
  left: 0;
  padding: 2em 3%;
  gap: ${(props) => props.theme.constants.gap.lg};
  background-color: ${(props) => props.theme.colors.mainColors.white};
`;
