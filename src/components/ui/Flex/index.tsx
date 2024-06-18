import styled, { css } from 'styled-components';

interface FlexProps {
  $gap?: string;
  $justify?: React.CSSProperties['justifyContent'];
  $align?: React.CSSProperties['alignItems'];
  $mobileDirection?: React.CSSProperties['flexDirection'];
  $flex?: number;
}

const mobileStyles = css<FlexProps>`
  @media ${(props) => props.theme.media.mobile} {
    flex-direction: ${(props) => props.$mobileDirection};
  }
`;

const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${(props) => props.$gap};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  flex: ${(props) => props.$flex};
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
  ${mobileStyles}
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
  ${mobileStyles}
`;
