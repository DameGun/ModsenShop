import { ReactNode } from 'react';
import { CloseIcon } from '@assets/icons';
import Icon from '@components/ui/Icon';
import IconButton from '@components/ui/IconButton';
import { FilterOptionChildernContainer, FilterOptionMainContainer } from './styled';

interface FilterItemProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function FilterOptionContainer({ children, isVisible, onClose }: FilterItemProps) {
  return (
    <FilterOptionMainContainer>
      <FilterOptionChildernContainer>{children}</FilterOptionChildernContainer>
      <IconButton
        $desktopVisible
        $mobileVisible
        onClick={onClose}
        className={isVisible ? 'visible' : ''}
      >
        <Icon src={<CloseIcon />} $iconsize='sm' />
      </IconButton>
    </FilterOptionMainContainer>
  );
}
