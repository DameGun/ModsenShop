import { useRef } from 'react';
import ResetButton from '@components/containers/ResetButton';
import useAutosizeTextArea from '@hooks/useAutosizeTextArea';
import { StyledTextArea, TextAreaStyleProps } from './styled';
import { InputProps } from '../Input';
import { InputContainer } from '../Input/styled';

interface TextAreaProps
  extends Omit<InputProps<HTMLTextAreaElement>, 'icon' | 'type'>,
    TextAreaStyleProps {}

export default function TextArea({ className, onChange, ...props }: TextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, textAreaRef.current ? textAreaRef.current.value : null);

  function handleReset() {
    const currentRef = textAreaRef.current;

    if (currentRef) currentRef.value = '';

    onChange('');
  }

  return (
    <ResetButton
      isVisible={textAreaRef.current ? Boolean(textAreaRef.current.value) : false}
      onReset={handleReset}
    >
      <InputContainer className={className}>
        <StyledTextArea ref={textAreaRef} onChange={onChange} {...props} />
      </InputContainer>
    </ResetButton>
  );
}
