import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: 'text',
})`
  border-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.darkGray};
  background-color: ${(props) => props.theme.colors.mainColors.white};
  border-radius: 0;

  padding: 1em 0;
  font-size: ${(props) => props.theme.fonts.default.heading5.size};

  &:focus {
    outline: none;
    caret-color: ${(props) => props.theme.colors.mainColors.black};
  }
`;
