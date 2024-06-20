import { ReactNode } from 'react';
import styled from 'styled-components';
import { IconStyleProps } from '../Icon/styled';

export interface IconButtonProps extends Omit<IconStyleProps, '$iconSize'> {
  className?: string;
  children: ReactNode;
  $desktopVisible?: boolean;
  $mobileVisible?: boolean;
  onClick?: React.MouseEventHandler;
}

const IconButton = styled.button<IconButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: ${(props) => (props.$desktopVisible ? 'block' : 'none')};

  @media ${(props) => props.theme.media.mobile} {
    display: ${(props) => (props.$mobileVisible ? 'flex' : 'none')};
    gap: ${(props) => props.theme.constants.gap.sm};
    align-items: center;
  }
`;

export default IconButton;
