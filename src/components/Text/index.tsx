import { CommonFonts, MobileFonts } from '@constants/styles';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const Truncate = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export interface TextProps {
  $level: keyof typeof CommonFonts;
  $isTruncated?: boolean;
  $color?: string;
  $textTransform?: 'capitalize' | 'uppercase';
  children: ReactNode;
  className?: string;
}

export default function Text({ children, ...props }: TextProps) {
  return (
    <StyledHeading as={CommonFonts[props.$level]} {...props}>
      {children}
    </StyledHeading>
  );
}

export const textStyles = css<TextProps>`
  font-size: ${(props) => props.theme.fonts.default[props.$level].size};
  font-weight: ${(props) => props.theme.fonts.default[props.$level].weight};
  line-height: ${(props) => props.theme.fonts.default[props.$level].lineHeight};

  ${(props) =>
    props.$level in MobileFonts &&
    css`
      @media ${props.theme.media.mobile} {
        font-size: ${props.theme.fonts.mobile[props.$level as keyof typeof MobileFonts].size};
        font-weight: ${props.theme.fonts.mobile[props.$level as keyof typeof MobileFonts].weight};
        line-height: ${props.theme.fonts.mobile[props.$level as keyof typeof MobileFonts]
          .lineHeight};
      }
    `}

  ${(props) => props.$isTruncated && Truncate}

  text-transform: ${(props) => props.$textTransform};

  color: ${(props) => props.$color || props.theme.colors.mainColors.black};
`;

const StyledHeading = styled.div<TextProps>`
  ${textStyles}
`;
