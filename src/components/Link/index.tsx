import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(BaseNavLink)`
  padding: 0.5em;
`;

export const HoverableNavLink = styled(NavLink)`
  border-bottom: 2px solid transparent;
  transition: border-color 0.4s;

  &:hover,
  &.active {
    border-bottom-color: ${(props) => props.theme.colors.mainColors.black};
    transition: border-color 0.4s;
  }
`;
