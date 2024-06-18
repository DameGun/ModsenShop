import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.constants.borderRadius.lg};
  height: ${(props) => props.theme.constants.carousel.maxHeight};
  overflow: hidden;
  box-shadow: ${(props) =>
    props.theme.constants.boxShadow + ' ' + props.theme.colors.mainColors.blackAlpha200};

  @media ${(props) => props.theme.media.mobile} {
    height: auto;
  }

  ${(props) => props.theme.constants.animations.opacityAnimation(1)}
`;

export const CarouselIndicatorContainer = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.constants.gap.sm};
  padding: 1em 0;

  background-color: ${(props) => props.theme.colors.mainColors.blackAlpha700};
`;

export const CarouselIndicator = styled.span`
  height: 0.5em;
  width: 0.5em;
  background-color: ${(props) => props.theme.colors.mainColors.white};
  border: 2px solid transparent;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;

  &.active {
    background-color: transparent;
    height: 1em;
    width: 1em;
    border-color: ${(props) => props.theme.colors.mainColors.white};
  }
`;

export const CarouselInfoContainer = styled.span`
  display: none;
  background-color: ${(props) => props.theme.colors.mainColors.blackAlpha700};
  padding: 1em;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 20%;
  margin-left: 5%;
  gap: ${(props) => props.theme.constants.gap.md};

  @media ${(props) => props.theme.media.mobile} {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.constants.gap.sm};
    align-items: flex-start;
  }
`;
