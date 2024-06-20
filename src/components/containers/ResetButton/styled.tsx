import { FlexRow } from '@components/ui/Flex';
import IconButton from '@components/ui/IconButton';
import styled from 'styled-components';

export const ResetButtonContainer = styled(FlexRow)`
  position: relative;
  gap: ${(props) => props.theme.constants.gap.md};

  & > ${IconButton} {
    visibility: hidden;
    padding: ${(props) => props.theme.constants.gap.sm};
  }

  & > ${IconButton}.visible {
    visibility: visible;
  }
`;

export const ResetButtonChildrenContainer = styled.div`
  width: 100%;
`;
