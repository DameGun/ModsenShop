import styled from 'styled-components';

export enum IconSize {
  sm = '1em',
  md = '1.5em',
  lg = '2em',
}

export interface IconProps {
  $iconsize?: IconSize;
}

const Icon = styled.img<IconProps>`
  width: ${(props) => props.$iconsize || IconSize.md};
  height: ${(props) => props.$iconsize || IconSize.md};
  filter: invert(${(props) => (props.theme.mode == 'DARK' ? 1 : 0)});
`;

export default Icon;
