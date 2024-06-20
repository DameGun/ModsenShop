import { CheckIcon, CloseIcon, ErrorIcon } from '@assets/icons';
import { useAppDispatch } from '@hooks/redux';
import { removeAlert } from '@store/alerts/alertsSlice';
import { Alert as AlertDeclaration } from 'types/alert';
import { AlertContainer } from './styled';
import { FlexColumn } from '../Flex';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Text from '../Text';

interface AlertProps extends AlertDeclaration {}

export default function Alert({ id, type, name, text }: AlertProps) {
  const dispatch = useAppDispatch();

  function handleRemove() {
    dispatch(removeAlert(id));
  }

  return (
    <AlertContainer $align='center'>
      <Icon src={type == 'error' ? <ErrorIcon /> : type == 'success' ? <CheckIcon /> : ''} />
      <FlexColumn $flex={1} className='alert-text'>
        <Text $level='bodyMedium' $isTruncated className='alert-name'>
          {name}
        </Text>
        <Text $level='bodySmall' $isTruncated>
          {text}
        </Text>
      </FlexColumn>
      <IconButton $mobileVisible $desktopVisible onClick={handleRemove}>
        <Icon src={<CloseIcon />} $iconsize='sm' />
      </IconButton>
    </AlertContainer>
  );
}
