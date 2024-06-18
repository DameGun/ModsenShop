import { FlexColumn } from '@components/ui/Flex';
import styled from 'styled-components';

export const CartSubmitContainer = styled(FlexColumn)`
  margin-top: ${(props) => props.theme.constants.gap.lg};
  gap: ${(props) => props.theme.constants.gap.md};

  &.total-price {
    min-width: 10em;
  }
`;
