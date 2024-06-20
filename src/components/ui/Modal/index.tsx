import { ReactNode, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { CloseIcon } from '@assets/icons';
import { ModalBody, ModalContainer, ModalContent, ModalFooter, ModalHeader } from './styled';
import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Text from '../Text';

interface ModalProps {
  buttonText: string;
  headerText?: string;
  submitButtonText?: string;
  children: ReactNode;
  onClick: () => void;
}

export default function Modal({
  children,
  buttonText,
  headerText,
  onClick,
  submitButtonText,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    // document.body.style.overflowY = 'hidden';
    setIsOpen(true);
  }

  function handleClose() {
    // document.body.style.overflowY = 'unset';
    setIsOpen(false);
  }

  function handleSubmit() {
    onClick();
    handleClose();
  }

  return (
    <Fragment>
      <Button $size='md' onClick={handleOpen}>
        {buttonText}
      </Button>
      {isOpen && (
        <ModalContainer className='block-overflow'>
          <ModalContent>
            <ModalHeader $justify='space-between'>
              {headerText && <Text $level='heading5'>{headerText}</Text>}
              <IconButton $mobileVisible $desktopVisible onClick={handleClose}>
                <Icon src={<CloseIcon />} />
              </IconButton>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter $justify='end'>
              <Button $size='md' onClick={handleSubmit}>
                {submitButtonText ?? 'Done'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalContainer>
      )}
    </Fragment>
  );
}
