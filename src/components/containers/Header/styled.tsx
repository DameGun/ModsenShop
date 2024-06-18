import { StyledDropdown } from '@components/ui/Dropdown/styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0;
  z-index: ${(props) => props.theme.constants.zIndexes.headerMenu};

  @media ${(props) => props.theme.media.mobile} {
    margin: 1em 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.constants.gap.lg};

  @media ${(props) => props.theme.media.mobile} {
    gap: ${(props) => props.theme.constants.gap.md};

    & > :not(${StyledDropdown}, .nav-cart) {
      display: none;
    }
  }
`;

export const ThemeSwitch = styled.label`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.constants.gap.sm};
  cursor: pointer;

  border-left: 2px solid ${(props) => props.theme.colors.neutralColors.gray};
  padding-left: 1em;
`;

export const SwitchButton = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + div {
    background: ${(props) => props.theme.colors.neutralColors.gray};

    &:before {
      transform: translate(100%, -50%);
    }
  }
`;

export const Switch = styled.div`
  position: relative;
  width: 52px;
  height: 28px;
  background: ${(props) => props.theme.colors.neutralColors.gray};
  border-radius: 28px;
  transition: all ${(props) => props.theme.constants.transitionTime.md};

  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 35px;
    top: 50%;
    left: 2px;
    background: ${(props) => props.theme.colors.mainColors.white};
    transform: translate(0, -50%);
    transition: all ${(props) => props.theme.constants.transitionTime.md};
  }
`;

export const HoverableNavLink = styled(Link)`
  padding: 0.5em;
  border-bottom: 2px solid transparent;
  transition: border-color ${(props) => props.theme.constants.transitionTime.md};

  &:hover,
  &.active {
    border-bottom-color: ${(props) => props.theme.colors.mainColors.black};
  }
`;
