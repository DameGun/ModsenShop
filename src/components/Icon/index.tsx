import { TRANSITION_TIME_SM } from '@constants/styles';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export enum IconSize {
  sm = '1em',
  md = '1.5em',
  lg = '2em',
}

interface IconStyleProps {
  $iconsize?: keyof typeof IconSize;
  $hoverable?: boolean;
}

export interface IconProps extends IconStyleProps {
  src: ReactNode;
}

const StyledIcon = styled.div<IconStyleProps>`
  display: flex;
  align-items: start;
  filter: invert(${(props) => (props.theme.mode == 'DARK' ? 1 : 0)});

  & > svg {
    width: ${(props) => (props.$iconsize ? IconSize[props.$iconsize] : IconSize.md)};
    height: ${(props) => (props.$iconsize ? IconSize[props.$iconsize] : IconSize.md)};
  }

  ${(props) =>
    props.$hoverable &&
    css`
      &:hover > svg > path {
        fill: ${(props) => props.theme.colors.neutralColors.gray};
        transition: fill ${TRANSITION_TIME_SM};
      }

      & > svg > path {
        transition: fill ${TRANSITION_TIME_SM};
      }
    `}
`;

export default function Icon({ src, ...props }: IconProps) {
  return <StyledIcon {...props}>{src}</StyledIcon>;
}
