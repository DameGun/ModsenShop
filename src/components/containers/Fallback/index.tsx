import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/ui/Button';
import Text from '@components/ui/Text';
import { ROUTES } from '@constants/routes';
import { useTheme } from 'styled-components';
import { FallbackContainer, FallbackTextContainer } from './styled';

interface FallbackProps {
  children: ReactNode;
  additionalText?: string;
  button?: {
    text: string;
    routeLink: keyof Omit<typeof ROUTES, 'products'>;
  };
}

export default function Fallback({ children, additionalText, button }: FallbackProps) {
  const { colors } = useTheme();

  return (
    <FallbackContainer $align='center' $justify='center'>
      <FallbackTextContainer $align='center'>
        {children}
        {additionalText && (
          <Text $level='heading3' $color={colors.neutralColors.darkGray} className='info-text'>
            {additionalText}
          </Text>
        )}
      </FallbackTextContainer>
      {button && (
        <Link to={ROUTES[button.routeLink]}>
          <Button $size='md'>{button.text}</Button>
        </Link>
      )}
    </FallbackContainer>
  );
}
