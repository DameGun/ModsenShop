import { CartIcon } from '@assets/icons';
import Logo from '@components/containers/Logo';
import Dropdown from '@components/ui/Dropdown';
import Icon from '@components/ui/Icon';
import { Link } from '@components/ui/Link';
import Text from '@components/ui/Text';
import { ROUTES } from '@constants/routes';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { selectCartCache } from '@store/cart/cartSlice';
import { changeTheme, selectCurrentTheme } from '@store/theme/themeSlice';
import {
  CartItemsBadge,
  HoverableNavLink,
  Nav,
  StyledHeader,
  Switch,
  SwitchButton,
  ThemeSwitch,
} from './styled';

export default function Header() {
  const dispatch = useAppDispatch();
  const currentColorMode = useAppSelector(selectCurrentTheme);
  const { items } = useAppSelector(selectCartCache);

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
        <HoverableNavLink to={ROUTES.cart} className='nav-cart'>
          <Icon src={<CartIcon />} />
          {items.length > 0 && (
            <CartItemsBadge>
              <Text $level='bodySmall'>{items.length}</Text>
            </CartItemsBadge>
          )}
        </HoverableNavLink>
        <Dropdown className='block-overflow'>
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
          <Link $level='heading1' to={ROUTES.contact}>
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
