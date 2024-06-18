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
  padding-right: ${(props) => props.theme.constants.gap.md};
  border-radius: 0;
  color: ${(props) => props.theme.colors.mainColors.black};
  padding: ${(props) => props.theme.constants.gap.sm} 0;
  font-size: ${(props) => props.theme.fonts.default.heading5.size};

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralColors.darkGray};
  }

  &:focus {
    outline: none;
    caret-color: ${(props) => props.theme.colors.mainColors.black};
  }
`;
