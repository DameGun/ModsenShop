import { MinusIcon, PlusIcon } from '@assets/icons';
import { FlexRow } from '@components/ui/Flex';
import Icon from '@components/ui/Icon';
import IconButton from '@components/ui/IconButton';
import Text from '@components/ui/Text';
import { useState } from 'react';
import { CountDisplay } from './styled';

export default function CartItemsCount() {
  const [count, setCount] = useState<number>(1);

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function handleMinus() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <FlexRow>
      <IconButton $mobileVisible $desktopVisible onClick={handleMinus}>
        <Icon src={<MinusIcon />} />
      </IconButton>
      <CountDisplay>
        <Text $level='heading4'>{count}</Text>
      </CountDisplay>
      <IconButton $mobileVisible $desktopVisible onClick={handlePlus}>
        <Icon src={<PlusIcon />} />
      </IconButton>
    </FlexRow>
  );
}
