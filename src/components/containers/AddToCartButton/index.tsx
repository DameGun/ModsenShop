import { Fragment, ReactNode, useState } from 'react';
import Button from '@components/ui/Button';
import { useAppDispatch } from '@hooks/redux';
import { addAlert, removeAlert } from '@store/alerts/alertsSlice';
import { addCartItem } from '@store/cart/cartSlice';
import { createAlert } from '@utils/alert';
import { CartItem } from 'types/cart';
import { Product } from 'types/product';
import { CardButtonContainer } from './styled';
import CartItemsCount from '../CartItemsCount';

interface AddToCartButtonProps {
  children?: ReactNode;
  isWithCounter: boolean;
  product: Product;
}

export default function AddToCartButton({
  children,
  isWithCounter,
  product,
}: AddToCartButtonProps) {
  const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    const newItem: CartItem = {
      product,
      quantity: count,
      total: count * product.price,
    };
    dispatch(addCartItem(newItem));

    createAlert({
      name: `Added (${count})`,
      text: product.title,
      type: 'success',
      createCallback: (alert) => dispatch(addAlert(alert)),
      timeoutCallback: (alert) => dispatch(removeAlert(alert.id)),
    });
  }

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  return isWithCounter ? (
    <Fragment>
      <CartItemsCount
        quantity={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Button $size='md' onClick={handleAddToCart}>
        Add to cart
      </Button>
    </Fragment>
  ) : (
    <CardButtonContainer onClick={handleAddToCart}>{children}</CardButtonContainer>
  );
}
