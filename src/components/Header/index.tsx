import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeTheme, selectCurrentTheme } from '@store/theme/themeSlice';
import { SwitchButton, Nav, StyledHeader, Switch, ThemeSwitch } from './styled';
import Icon from '@components/Icon';
import { HoverableNavLink } from '@components/Link';
import Logo from '@components/Logo';
import { searchIcon, cartIcon } from '@assets/icons';
import Dropdown from '@components/Dropdown';
import Text from '@components/Text';

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
            checked={currentColorMode == 'DARK'}
            onClick={() => dispatch(changeTheme())}
          />
          <Switch />
        </ThemeSwitch>
        <HoverableNavLink to='search'>
          <Icon src={searchIcon} alt='Search' />
        </HoverableNavLink>
        <HoverableNavLink to='cart' className='nav-cart'>
          <Icon src={cartIcon} alt='Shopping Cart' />
        </HoverableNavLink>
        <Dropdown>
          <Text $level='heading1'>Home</Text>
          <Text $level='heading1'>Shop</Text>
          <Text $level='heading1'>About</Text>
          <Text $level='heading1'>Blog</Text>
          <Text $level='heading1'>Help</Text>
          <Text $level='heading1'>Contact</Text>
          <Text $level='heading1'>Search</Text>
        </Dropdown>
      </Nav>
    </StyledHeader>
  );
}
