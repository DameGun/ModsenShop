import styled, { css } from 'styled-components';

interface SelectStyleProps {
  $isActive: boolean;
}

const baseStyles = css`
  border: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
  border-radius: ${(props) => props.theme.constants.borderRadius.sm};
  background-color: ${(props) => props.theme.colors.mainColors.white};
`;

export const SelectLabelButton = styled.button<SelectStyleProps>`
  ${baseStyles}
  padding: ${(props) => props.theme.constants.gap.md} ${(props) => props.theme.constants.gap.sm};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  :nth-child(2) {
    transition: transform ${(props) => props.theme.constants.transitionTime.md};
    transform: rotate(${(props) => (props.$isActive ? '180deg' : '0')});
  }
`;

export const SelectDropdown = styled.div`
  ${baseStyles}
  margin-top: ${(props) => props.theme.constants.gap.sm};
  position: absolute;
  min-width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

export const SelectDropdownItem = styled.div<SelectStyleProps>`
  &:hover {
    background-color: ${(props) => props.theme.colors.neutralColors.lightGray};
  }
  cursor: pointer;
  padding: ${(props) => props.theme.constants.gap.sm} ${(props) => props.theme.constants.gap.sm};
`;
