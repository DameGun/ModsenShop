import { TRANSITION_TIME_MD } from '@constants/styles';
import { NavLink as BaseNavLink, Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(RouteLink)`
  &:hover > h4 {
    color: ${(props) => props.theme.colors.mainColors.black};
  }
`;

export const NavLink = styled(BaseNavLink)`
  padding: 0.5em;
`;

export const HoverableNavLink = styled(NavLink)`
  border-bottom: 2px solid transparent;
  transition: border-color ${TRANSITION_TIME_MD};

  &:hover,
  &.active {
    border-bottom-color: ${(props) => props.theme.colors.mainColors.black};
  }
`;
