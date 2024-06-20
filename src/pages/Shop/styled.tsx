import { FlexRow } from '@components/ui/Flex';
import styled from 'styled-components';

export const ShopContainer = styled(FlexRow)`
  gap: ${(props) => props.theme.constants.gap.sm};

  & > :nth-child(2) {
    flex: 4;
    align-items: center;
  }

  & > :nth-child(1) {
    flex: 1;
  }

  @media ${(props) => props.theme.media.mobile} {
    gap: ${(props) => props.theme.constants.gap.xl};
  }
`;
