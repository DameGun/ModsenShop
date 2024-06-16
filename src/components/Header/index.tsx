import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeTheme, selectCurrentTheme } from '@store/theme/themeSlice';
import { SwitchButton, Nav, StyledHeader, Switch, ThemeSwitch, HoverableNavLink } from './styled';
import Icon from '@components/Icon';
import Logo from '@components/Logo';
import Dropdown from '@components/Dropdown';
import { CartIcon, SearchIcon } from '@assets/icons';
import { Link } from '@components/Link';

export default function Header() {
  const dispatch = useAppDispatch();
  const currentColorMode = useAppSelector(selectCurrentTheme);

  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <HoverableNavLink to='shop'>Shop</HoverableNavLink>
        <ThemeSwitch>
          <SwitchButton
            type='checkbox'
            defaultChecked={currentColorMode == 'DARK'}
            onClick={() => dispatch(changeTheme())}
          />
          <Switch />
        </ThemeSwitch>
        <HoverableNavLink to='search'>
          <Icon src={<SearchIcon />} />
        </HoverableNavLink>
        <HoverableNavLink to='cart' className='nav-cart'>
          <Icon src={<CartIcon />} />
        </HoverableNavLink>
        <Dropdown>
          <Link $level='heading1' to=''>
            Home
          </Link>
          <Link $level='heading1' to='shop'>
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
