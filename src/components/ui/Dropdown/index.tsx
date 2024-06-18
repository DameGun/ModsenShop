import { DropdownContainer, StyledDropdown } from './styled';
import { CloseIcon, DropdownIcon } from '@assets/icons';
import IconButton from '@components/ui/IconButton';
import Icon from '@components/ui/Icon';
import React from 'react';

interface DropdownProps {
  children: React.ReactNode;
}

export default function Dropdown({ children }: DropdownProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  function handleDropdown() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <StyledDropdown>
      <IconButton onClick={handleDropdown} $mobileVisible>
        <Icon src={open ? <CloseIcon /> : <DropdownIcon />} $iconsize='lg' />
      </IconButton>
      {open && (
        <DropdownContainer>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
              return child;
            }
            const dropdownItem: React.ReactElement = child;
            return React.cloneElement(dropdownItem, { onClick: handleClose });
          })}
        </DropdownContainer>
      )}
    </StyledDropdown>
  );
}
