import { StyledDropdown } from '@components/Dropdown/styled';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0;

  @media ${(props) => props.theme.media.mobile} {
    margin: 1em 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2em;

  @media ${(props) => props.theme.media.mobile} {
    gap: 1em;

    & > :not(${StyledDropdown}, .nav-cart) {
      display: none;
    }
  }
`;

export const ThemeSwitch = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  border-left: 2px solid ${(props) => props.theme.colors.neutralColors.gray};
  padding-left: 1em;
`;

export const Input = styled.input`
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
  transition: 300ms all;

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
    transition: 300ms all;
  }
`;
