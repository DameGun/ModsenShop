import { GAP_MD } from '@constants/styles';
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.darkGray};
  align-items: center;
`;

export const StyledInput = styled.input.attrs({
  type: 'text',
})`
  flex-grow: 1;
  border-color: transparent;
  background-color: transparent;
  padding-right: ${GAP_MD};
  border-radius: 0;
  color: ${(props) => props.theme.colors.mainColors.black};
  padding: 1em 0;
  font-size: ${(props) => props.theme.fonts.default.heading5.size};

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralColors.darkGray};
  }

  &:focus {
    outline: none;
    caret-color: ${(props) => props.theme.colors.mainColors.black};
  }
`;
