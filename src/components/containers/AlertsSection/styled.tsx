import { FlexColumn } from '@components/ui/Flex';
import styled from 'styled-components';

export const AlertsSectionContainer = styled(FlexColumn)`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 20%;
  max-height: 50%;
  padding: ${(props) => props.theme.constants.gap.md};
  margin-bottom: ${(props) => props.theme.constants.gap.sm};
  overflow: hidden;
  gap: ${(props) => props.theme.constants.gap.sm};
  z-index: ${(props) => props.theme.constants.zIndexes.alertsSection};

  @media ${(props) => props.theme.media.mobile} {
    max-height: 30%;
    width: 50%;
    top: 0;
  }
`;
