import { CloseIcon } from '@assets/icons';
import Icon from '@components/ui/Icon';
import IconButton from '@components/ui/IconButton';
import { ImageFillContainer } from '@components/ui/Image';
import Text from '@components/ui/Text';
import { useAppDispatch } from '@hooks/redux';
import { removeCartItem, setCartItemQuantity } from '@store/cart/cartSlice';
import { CartItem, CartItemQuantityAction } from 'types/cart';
import { CartItemColumn, CartItemColumnGroup, CartItemRowContainer } from './styled';
import CartItemsCount from '../CartItemsCount';

interface CartItemProps {
  cartItemIndex: number;
  cartItem: CartItem;
}

export default function CartItemContainer({ cartItemIndex, cartItem }: CartItemProps) {
  const dispatch = useAppDispatch();

  function handleIncrement() {
    const payload: CartItemQuantityAction = {
      type: 'increment',
      index: cartItemIndex,
    };

    dispatch(setCartItemQuantity(payload));
  }

  function handleDecrement() {
    if (cartItem.quantity > 1) {
      const payload: CartItemQuantityAction = {
        type: 'decrement',
        index: cartItemIndex,
      };

      dispatch(setCartItemQuantity(payload));
    }
  }

  function handleRemove() {
    dispatch(removeCartItem(cartItemIndex));
  }

  return (
    <CartItemRowContainer>
      <CartItemColumn className='image'>
        <ImageFillContainer src={cartItem.product.image} />
      </CartItemColumn>
      <CartItemColumn className='title'>
        <Text $level='heading5'>{cartItem.product.title}</Text>
      </CartItemColumn>
      <CartItemColumnGroup
        $align='center'
        $justify='space-between'
        $mobile={{ $direction: 'column', $align: 'start', $justify: 'flex-start' }}
        className='subtotal'
      >
        <CartItemColumn className='price'>
          <Text $level='heading5'>Price: ${cartItem.product.price}</Text>
        </CartItemColumn>
        <CartItemColumn className='total'>
          <Text $level='bodyLarge'>Total: ${cartItem.total}</Text>
        </CartItemColumn>
        <CartItemColumn className='quantity'>
          <CartItemsCount
            quantity={cartItem.quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </CartItemColumn>
      </CartItemColumnGroup>
      <CartItemColumn className='remove'>
        <IconButton $desktopVisible $mobileVisible onClick={handleRemove}>
          <Icon src={<CloseIcon />} />
        </IconButton>
      </CartItemColumn>
    </CartItemRowContainer>
  );
}
