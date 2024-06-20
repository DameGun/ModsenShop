import { ReactNode } from 'react';
import { CloseIcon } from '@assets/icons';
import Icon from '@components/ui/Icon';
import IconButton from '@components/ui/IconButton';
import { ResetButtonChildrenContainer, ResetButtonContainer } from './styled';

interface ResetButtonProps {
  isVisible: boolean;
  onReset: () => void;
  children: ReactNode;
}

export default function ResetButton({ children, isVisible, onReset }: ResetButtonProps) {
  return (
    <ResetButtonContainer>
      <ResetButtonChildrenContainer>{children}</ResetButtonChildrenContainer>
      <IconButton
        type='reset'
        $desktopVisible
        $mobileVisible
        onClick={onReset}
        className={isVisible ? 'visible' : ''}
      >
        <Icon src={<CloseIcon />} $iconsize='sm' />
      </IconButton>
    </ResetButtonContainer>
  );
}
