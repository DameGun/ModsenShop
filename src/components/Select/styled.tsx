import IconButton from '@components/IconButton';
import { BORDER_RADUIS_SM, GAP_LG, GAP_MD, GAP_SM, TRANSITION_TIME_MD } from '@constants/styles';
import styled, { css } from 'styled-components';

interface SelectStyleProps {
  $isActive: boolean;
}

const baseStyles = css`
  border: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
  border-radius: ${BORDER_RADUIS_SM};
  background-color: ${(props) => props.theme.colors.mainColors.white};
`;

export const SelectLabelButton = styled.button<SelectStyleProps>`
  ${baseStyles}
  padding: ${GAP_MD} ${GAP_SM};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  :nth-child(2) {
    transition: transform ${TRANSITION_TIME_MD};
    transform: rotate(${(props) => (props.$isActive ? '180deg' : '0')});
  }
`;

export const SelectResetButton = styled(IconButton)`
  position: absolute;
  top: 30%;
  right: -${GAP_LG};
`;

export const SelectDropdown = styled.div`
  ${baseStyles}
  margin-top: ${GAP_SM};
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
  padding: ${GAP_SM} ${GAP_SM};
`;
