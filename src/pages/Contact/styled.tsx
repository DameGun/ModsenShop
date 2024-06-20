import { FlexColumn } from '@components/ui/Flex';
import styled from 'styled-components';

export const ContactHeader = styled(FlexColumn)`
  gap: ${(props) => props.theme.constants.gap.xl};
  margin-bottom: ${(props) => props.theme.constants.gap.xl};
  text-align: center;

  :last-child {
    max-width: 50%;

    @media ${(props) => props.theme.media.mobile} {
      display: none;
    }
  }
`;
