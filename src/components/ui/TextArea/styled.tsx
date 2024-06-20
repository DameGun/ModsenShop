import styled from 'styled-components';
import { inputStyles } from '../Input/styled';

export interface TextAreaStyleProps {
  $resizable?: boolean;
}

export const StyledTextArea = styled.textarea<TextAreaStyleProps>`
  ${inputStyles}

  resize: ${(props) => !props.$resizable && 'none'};
`;
