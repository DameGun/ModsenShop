import { GAP_SM } from '@constants/styles';
import { ReactNode } from 'react';
import styled from 'styled-components';

export interface IconButtonProps {
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
    gap: ${GAP_SM};
    align-items: center;
  }
`;

export default IconButton;
