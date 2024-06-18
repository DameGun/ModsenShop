import { Fragment } from 'react';
import CartItemContainer from '@components/containers/CartItemContainer';
import Fallback from '@components/containers/Fallback';
import { FlexColumn } from '@components/ui/Flex';
import Modal from '@components/ui/Modal';
import Section, { SectionHeader } from '@components/ui/Section';
import Text from '@components/ui/Text';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { clearCart, selectCartCache } from '@store/cart/cartSlice';
import { CartSubmitContainer } from './styled';

export default function CartPage() {
  const cartCache = useAppSelector(selectCartCache);
  const dispatch = useAppDispatch();

  function handleSubmit() {
    dispatch(clearCart());
  }

  return (
    <Section>
      <SectionHeader>
        <Text $level='heading1' $textTransform='capitalize'>
          Your cart
        </Text>
      </SectionHeader>
      {cartCache.items.length > 0 ? (
        <Fragment>
          <FlexColumn>
            {cartCache.items.map((item, index) => (
              <CartItemContainer key={index} cartItemIndex={index} cartItem={item} />
            ))}
          </FlexColumn>
          <CartSubmitContainer $align='end'>
            <Text $level='heading2' className='total-price'>
              Total price: ${cartCache.totalPrice}
            </Text>
            <Modal
              buttonText='Shop now'
              headerText='Buy'
              onClick={handleSubmit}
              submitButtonText='Buy'
            >
              <Text $level='heading5'>Are you sure you wanna pay for all of this?</Text>
              <Text $level='heading4' className='total-price'>
                Total price: ${cartCache.totalPrice}
              </Text>
            </Modal>
          </CartSubmitContainer>
        </Fragment>
      ) : (
        <Fallback button={{ text: 'Go to shop', routeLink: 'shop' }}>
          <Text $level='heading2'>Cart is empty</Text>
        </Fallback>
      )}
    </Section>
  );
}
