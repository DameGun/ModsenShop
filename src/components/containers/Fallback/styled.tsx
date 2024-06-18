import { FlexColumn } from '@components/ui/Flex';
import styled from 'styled-components';

export const FallbackContainer = styled(FlexColumn)`
  gap: ${(props) => props.theme.constants.gap.lg};
  text-align: center;
  transform: translate(0, 50%);
`;

export const FallbackTextContainer = styled(FlexColumn)`
  gap: ${(props) => props.theme.constants.gap.md};

  .info-text {
    max-width: 50%;
  }
`;
