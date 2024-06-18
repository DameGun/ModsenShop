import styled from 'styled-components';

export const ImageFillContainer = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: contain;
  background-color: white;
  user-select: none;

  transition: all ${(props) => props.theme.constants.transitionTime.md};
`;
