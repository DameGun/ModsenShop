import { MinusIcon, PlusIcon } from '@assets/icons';
import { FlexRow } from '@components/ui/Flex';
import Icon from '@components/ui/Icon';
import IconButton from '@components/ui/IconButton';
import Text from '@components/ui/Text';
import { CountDisplay } from './styled';

interface CartItemsCountProps {
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export default function CartItemsCount({
  quantity,
  handleDecrement,
  handleIncrement,
}: CartItemsCountProps) {
  return (
    <FlexRow>
      <IconButton $mobileVisible $desktopVisible onClick={handleDecrement}>
        <Icon src={<MinusIcon />} />
      </IconButton>
      <CountDisplay>
        <Text $level='heading5'>{quantity}</Text>
      </CountDisplay>
      <IconButton $mobileVisible $desktopVisible onClick={handleIncrement}>
        <Icon src={<PlusIcon />} />
      </IconButton>
    </FlexRow>
  );
}
