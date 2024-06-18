import styled, { css } from 'styled-components';

interface ButtonProps {
  $size: 'sm' | 'md';
}

const smButtonStyles = css`
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.mainColors.white};
  color: ${(props) => props.theme.colors.mainColors.white};
  background-color: transparent;
  font-weight: ${(props) => props.theme.constants.fontWeight.bold};

  padding-left: ${(props) => props.theme.constants.button.paddingY.sm};
  padding-right: ${(props) => props.theme.constants.button.paddingY.sm};

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
  font-weight: ${(props) => props.theme.constants.fontWeight.regular};

  padding-left: ${(props) => props.theme.constants.button.paddingY.md};
  padding-right: ${(props) => props.theme.constants.button.paddingY.md};

  &:hover {
    background-color: ${(props) => props.theme.colors.mainColors.black};
    color: ${(props) => props.theme.colors.mainColors.white};
  }
`;

const Button = styled.button<ButtonProps>`
  border-style: solid;
  border-radius: ${(props) => props.theme.constants.borderRadius.md};
  font-size: ${(props) => props.theme.fonts.default.bodyLarge.size};
  padding-top: ${(props) => props.theme.constants.button.paddingX};
  padding-bottom: ${(props) => props.theme.constants.button.paddingX};
  transition: all ${(props) => props.theme.constants.transitionTime.sm};
  cursor: pointer;

  ${(props) => (props.$size == 'sm' ? smButtonStyles : mdButtonStyles)}
`;

export default Button;
