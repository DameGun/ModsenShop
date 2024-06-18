import { CommonFonts } from '@constants/styles';
import { ReactNode } from 'react';
import { StyledHeading } from './styled';

export interface TextProps {
  $level: keyof typeof CommonFonts;
  $isTruncated?: boolean;
  $color?: string;
  $textTransform?: 'capitalize' | 'uppercase';
  $spanColor?: string;
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
