import { CartIcon, SearchIcon } from '@assets/icons';
import Logo from '@components/containers/Logo';
import Dropdown from '@components/ui/Dropdown';
import Icon from '@components/ui/Icon';
import { Link } from '@components/ui/Link';
import { ROUTES } from '@constants/routes';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeTheme, selectCurrentTheme } from '@store/theme/themeSlice';
import { HoverableNavLink, Nav, StyledHeader, Switch, SwitchButton, ThemeSwitch } from './styled';

export default function Header() {
  const dispatch = useAppDispatch();
  const currentColorMode = useAppSelector(selectCurrentTheme);

  function handleChangeTheme() {
    dispatch(changeTheme());
  }

  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <HoverableNavLink to={ROUTES.shop}>Shop</HoverableNavLink>
        <ThemeSwitch>
          <SwitchButton
            type='checkbox'
            defaultChecked={currentColorMode == 'DARK'}
            onClick={handleChangeTheme}
          />
          <Switch />
        </ThemeSwitch>
        <HoverableNavLink to='search'>
          <Icon src={<SearchIcon />} />
        </HoverableNavLink>
        <HoverableNavLink to={ROUTES.cart} className='nav-cart'>
          <Icon src={<CartIcon />} />
        </HoverableNavLink>
        <Dropdown>
          <Link $level='heading1' to={ROUTES.home}>
            Home
          </Link>
          <Link $level='heading1' to={ROUTES.shop}>
            Shop
          </Link>
          <Link $level='heading1' to=''>
            About
          </Link>
          <Link $level='heading1' to=''>
            Blog
          </Link>
          <Link $level='heading1' to=''>
            Help
          </Link>
          <Link $level='heading1' to=''>
            Contact
          </Link>
          <Link $level='heading1' to=''>
            Search
          </Link>
        </Dropdown>
      </Nav>
    </StyledHeader>
  );
}
