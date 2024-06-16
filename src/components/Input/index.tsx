import { ReactNode } from 'react';
import { InputContainer, StyledInput } from './styled';

interface InputProps {
  icon?: ReactNode;
  placeholder: string;
  className?: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
}

export default function Input({ type, icon, placeholder, className, onChange }: InputProps) {
  return (
    <InputContainer className={className}>
      <StyledInput
        type={type && 'text'}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {icon}
    </InputContainer>
  );
}
