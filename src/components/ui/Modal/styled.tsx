import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../Flex';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.mainColors.blackAlpha200};

  @keyframes modalOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: modalOverlay;
  animation-duration: ${(props) => props.theme.constants.transitionTime.md};
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.mainColors.white};
  margin: 15% auto;
  padding: 20px;
  width: 25%;
  border-radius: ${(props) => props.theme.constants.borderRadius.sm};
  box-shadow: ${(props) =>
    props.theme.constants.boxShadow + ' ' + props.theme.colors.mainColors.blackAlpha200};

  @media ${(props) => props.theme.media.mobile} {
    margin: 60% auto;
    width: 50%;
  }
`;

export const ModalHeader = styled(FlexRow)`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
  padding-bottom: ${(props) => props.theme.constants.gap.sm};
`;

export const ModalBody = styled(FlexColumn)`
  padding: ${(props) => props.theme.constants.gap.md} 0;
  gap: ${(props) => props.theme.constants.gap.md};
`;

export const ModalFooter = styled(FlexRow)`
  border-top: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
  padding-top: ${(props) => props.theme.constants.gap.sm};
`;
