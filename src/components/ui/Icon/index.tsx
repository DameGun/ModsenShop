import { ReactNode } from 'react';
import { IconStyleProps, StyledIcon } from './styled';

interface IconProps extends IconStyleProps {
  src: ReactNode;
}

export default function Icon({ src, ...props }: IconProps) {
  return <StyledIcon {...props}>{src}</StyledIcon>;
}
