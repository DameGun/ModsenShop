import { ReactNode, useState } from 'react';
import { DropdownButton, DropdownContainer, StyledDropdown } from './styled';
import { closeIcon, dropdownIcon } from '@assets/icons';

interface DropdownProps {
  children: ReactNode;
}

export default function Dropdown({ children }: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledDropdown>
      <DropdownButton
        src={open ? closeIcon : dropdownIcon}
        alt='Dropdown'
        onClick={() => setOpen(!open)}
      />
      {open && <DropdownContainer>{children}</DropdownContainer>}
    </StyledDropdown>
  );
}
