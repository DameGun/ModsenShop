import { useAppDispatch } from '@hooks/redux';
import { changeTheme } from '@store/theme/themeSlice';
import { Input, Nav, StyledHeader, Switch, ThemeSwitch } from './styled';
import Icon from '@components/Icon';
import { HoverableNavLink } from '@components/Link';
import Logo from '@components/Logo';
import { searchIcon, cartIcon } from '@assets/icons';
import Dropdown from '@components/Dropdown';
import { DropdownItem } from '@components/Dropdown/styled';

export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <HoverableNavLink to='shop'>Shop</HoverableNavLink>
        <ThemeSwitch>
          <Input type='checkbox' onClick={() => dispatch(changeTheme())} />
          <Switch />
        </ThemeSwitch>
        <HoverableNavLink to='search'>
          <Icon src={searchIcon} alt='Search' />
        </HoverableNavLink>
        <HoverableNavLink to='cart' className='nav-cart'>
          <Icon src={cartIcon} alt='Shopping Cart' />
        </HoverableNavLink>
        <Dropdown>
          <DropdownItem>Home</DropdownItem>
          <DropdownItem>Shop</DropdownItem>
          <DropdownItem>About</DropdownItem>
          <DropdownItem>Blog</DropdownItem>
          <DropdownItem>Help</DropdownItem>
          <DropdownItem>Contact</DropdownItem>
          <DropdownItem>Search</DropdownItem>
        </Dropdown>
      </Nav>
    </StyledHeader>
  );
}
