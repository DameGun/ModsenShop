import styled, { css } from 'styled-components';
import { FlexRow } from '../Flex';

export const InputContainer = styled(FlexRow)`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
`;

export const inputStyles = css`
  flex-grow: 1;
  border-color: transparent;
  background-color: transparent;
  border-radius: 0;
  color: ${(props) => props.theme.colors.mainColors.black};
  font-size: ${(props) => props.theme.fonts.default.heading5.size};

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralColors.darkGray};
  }

  &:focus {
    outline: none;
    caret-color: ${(props) => props.theme.colors.mainColors.black};
  }
`;

export const StyledInput = styled.input.attrs({
  type: 'text',
})`
  ${inputStyles}

  padding-right: ${(props) => props.theme.constants.gap.md};
  padding: ${(props) => props.theme.constants.gap.sm} 0;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.mainColors.white} inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.colors.mainColors.black};
  }
`;
