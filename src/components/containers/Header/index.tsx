import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeTheme, selectCurrentTheme } from '@store/theme/themeSlice';
import { SwitchButton, Nav, StyledHeader, Switch, ThemeSwitch, HoverableNavLink } from './styled';
import Icon from '@components/ui/Icon';
import Logo from '@components/containers/Logo';
import Dropdown from '@components/ui/Dropdown';
import { CartIcon, SearchIcon } from '@assets/icons';
import { Link } from '@components/ui/Link';
import { ROUTES } from '@constants/routes';

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
