import {
  BORDER_RADUIS_SM,
  BUTTON_MD_PADDING_Y,
  BUTTON_PADDING_X,
  BUTTON_SM_PADDING_Y,
  FontWeight,
  TRANSITION_TIME_SM,
} from '@constants/styles';
import styled, { css } from 'styled-components';

interface ButtonProps {
  $size: 'sm' | 'md';
}

const smButtonStyles = css`
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.mainColors.white};
  color: ${(props) => props.theme.colors.mainColors.white};
  background-color: transparent;
  font-weight: ${FontWeight.bold};

  padding-left: ${BUTTON_SM_PADDING_Y};
  padding-right: ${BUTTON_SM_PADDING_Y};

  &:hover {
    background-color: ${(props) => props.theme.colors.mainColors.white};
    color: ${(props) => props.theme.colors.mainColors.black};
  }
`;

const mdButtonStyles = css`
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.mainColors.black};
  color: ${(props) => props.theme.colors.mainColors.black};
  background-color: transparent;
  font-weight: ${FontWeight.regular};

  padding-left: ${BUTTON_MD_PADDING_Y};
  padding-right: ${BUTTON_MD_PADDING_Y};

  &:hover {
    background-color: ${(props) => props.theme.colors.mainColors.black};
    color: ${(props) => props.theme.colors.mainColors.white};
  }
`;

const Button = styled.button<ButtonProps>`
  border-style: solid;
  border-radius: ${BORDER_RADUIS_SM};
  font-size: ${(props) => props.theme.fonts.default.bodyLarge.size};
  padding-top: ${BUTTON_PADDING_X};
  padding-bottom: ${BUTTON_PADDING_X};
  transition: all ${TRANSITION_TIME_SM};

  ${(props) => (props.$size == 'sm' ? smButtonStyles : mdButtonStyles)}
`;

export default Button;
