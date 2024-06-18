import styled from 'styled-components';

export const StyledDropdown = styled.div`
  display: none;

  @media ${(props) => props.theme.media.mobile} {
    display: block;
  }
`;

export const DropdownContainer = styled.div`
  contain: portal;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 94%;
  left: 0;
  padding: 2em 3%;
  gap: ${(props) => props.theme.constants.gap.lg};
  background-color: ${(props) => props.theme.colors.mainColors.white};
`;
