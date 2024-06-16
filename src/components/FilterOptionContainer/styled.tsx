import IconButton from '@components/IconButton';
import { GAP_MD, GAP_SM } from '@constants/styles';
import styled from 'styled-components';

export const FilterOptionMainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${GAP_MD};

  & > ${IconButton} {
    visibility: hidden;
    padding: ${GAP_SM};
  }

  & > ${IconButton}.visible {
    visibility: visible;
  }
`;

export const FilterOptionChildernContainer = styled.div`
  width: 100%;
`;
