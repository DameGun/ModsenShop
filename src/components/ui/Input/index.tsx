import { ReactNode, useRef } from 'react';
import ResetButton from '@components/containers/ResetButton';
import { InputContainer, StyledInput } from './styled';

export interface InputProps<T> {
  icon?: ReactNode;
  placeholder: string;
  className?: string;
  name: string;
  value?: string;
  onChange: (event: React.ChangeEvent<T> | string) => void;
  type?: React.HTMLInputTypeAttribute;
  disableResetButton?: boolean;
}

export default function Input({
  type,
  icon,
  className,
  onChange,
  disableResetButton,
  ...props
}: InputProps<HTMLInputElement>) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleReset() {
    const currentRef = inputRef.current;

    if (currentRef) currentRef.value = '';

    onChange('');
  }

  return disableResetButton ? (
    <InputContainer className={className} $align='center'>
      <StyledInput ref={inputRef} {...props} onChange={onChange} type={type && 'text'} />
      {icon}
    </InputContainer>
  ) : (
    <ResetButton
      onReset={handleReset}
      isVisible={inputRef.current ? Boolean(inputRef.current.value) : false}
    >
      <InputContainer className={className} $align='center'>
        <StyledInput ref={inputRef} {...props} onChange={onChange} type={type && 'text'} />
        {icon}
      </InputContainer>
    </ResetButton>
  );
}
