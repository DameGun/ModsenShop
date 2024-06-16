import IconButton from '@components/IconButton';
import { FILTER_MENU_Z_INDEX, GAP_LG, GAP_MD, GAP_SM } from '@constants/styles';
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;

  @media ${(props) => props.theme.media.mobile} {
    gap: ${GAP_SM};

    & > :not(${IconButton}) {
      display: none;
    }

    & > .visible {
      position: relative;
      display: flex;
      z-index: ${FILTER_MENU_Z_INDEX};
      background-color: ${(props) => props.theme.colors.mainColors.white};
      width: 100%;
      border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
      padding-bottom: ${GAP_LG};
    }
  }
`;

export const SidebarGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP_MD};
`;

export const SidebarInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP_LG};
`;
