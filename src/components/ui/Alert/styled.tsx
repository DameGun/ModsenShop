import styled from 'styled-components';
import { FlexRow } from '../Flex';

export const AlertContainer = styled(FlexRow)`
  background-color: ${(props) => props.theme.colors.mainColors.white};
  box-shadow: ${(props) =>
    props.theme.constants.boxShadow + ' ' + props.theme.colors.mainColors.blackAlpha700};

  padding: ${(props) => props.theme.constants.gap.md};
  border-radius: ${(props) => props.theme.constants.borderRadius.sm};
  gap: ${(props) => props.theme.constants.gap.sm};

  .alert-text {
    overflow: hidden;

    .alert-name {
      font-weight: ${(props) => props.theme.constants.fontWeight.bold};
    }
  }

  @keyframes alert {
    from {
      transform: translate(100%, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }

  animation-name: alert;
  animation-duration: ${(props) => props.theme.constants.transitionTime.sm};
`;
