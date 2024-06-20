import styled, { css } from 'styled-components';
import { ThemeSizes } from 'types/themeConstants';

export interface IconStyleProps {
  $iconsize?: keyof ThemeSizes;
  $hoverable?: boolean;
}

export const StyledIcon = styled.span<IconStyleProps>`
  display: flex;
  align-items: start;
  filter: invert(${(props) => (props.theme.mode == 'DARK' ? 1 : 0)});

  & > svg {
    width: ${(props) =>
      props.$iconsize
        ? props.theme.constants.iconSize[props.$iconsize]
        : props.theme.constants.iconSize.md};
    height: ${(props) =>
      props.$iconsize
        ? props.theme.constants.iconSize[props.$iconsize]
        : props.theme.constants.iconSize.md};
  }

  ${(props) =>
    props.$hoverable &&
    css`
      &:hover > svg > path {
        fill: ${(props) => props.theme.colors.neutralColors.gray};
        transition: fill ${(props) => props.theme.constants.transitionTime.sm};
      }

      & > svg > path {
        transition: fill ${(props) => props.theme.constants.transitionTime.sm};
      }
    `}
`;
