import { FlexColumn } from '@components/ui/Flex';
import IconButton from '@components/ui/IconButton';
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;

  @media ${(props) => props.theme.media.mobile} {
    gap: ${(props) => props.theme.constants.gap.sm};

    & > :not(${IconButton}) {
      display: none;
    }

    & > .visible {
      position: relative;
      display: flex;
      z-index: ${(props) => props.theme.constants.zIndexes.filterMenu};
      background-color: ${(props) => props.theme.colors.mainColors.white};
      width: 100%;
      border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
      padding-bottom: ${(props) => props.theme.constants.gap.lg};
    }
  }
`;

export const SidebarGroup = styled(FlexColumn)`
  gap: ${(props) => props.theme.constants.gap.md};
`;

export const SidebarInnerContainer = styled(FlexColumn)`
  gap: ${(props) => props.theme.constants.gap.lg};
`;
