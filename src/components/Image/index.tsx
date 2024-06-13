import { TRANSITION_TIME_MD } from '@constants/styles';
import styled from 'styled-components';

export const ImageFillContainer = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: contain;
  background-color: white;
  user-select: none;

  transition: all ${TRANSITION_TIME_MD};
`;
