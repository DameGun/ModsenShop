import IconButton from '@components/ui/IconButton';
import styled from 'styled-components';

export const FilterOptionMainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.constants.gap.md};

  & > ${IconButton} {
    visibility: hidden;
    padding: ${(props) => props.theme.constants.gap.sm};
  }

  & > ${IconButton}.visible {
    visibility: visible;
  }
`;

export const FilterOptionChildernContainer = styled.div`
  width: 100%;
`;
