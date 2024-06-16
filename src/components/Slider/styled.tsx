import { GAP_MD, SLIDER_HEIGHT, SLIDER_THUMB_HEIGHT, SLIDER_THUMB_WIDTH } from '@constants/styles';
import styled, { css } from 'styled-components';

const sliderThumbStyle = css`
  -webkit-appearance: none;
  appearance: none;
  height: ${SLIDER_THUMB_HEIGHT};
  width: ${SLIDER_THUMB_WIDTH};
  background-color: ${(props) => props.theme.colors.mainColors.black};
  cursor: pointer;
  pointer-events: auto;
`;

export const StyledRangeInput = styled.input.attrs({
  type: 'range',
})`
  position: absolute;
  width: 100%;
  height: ${SLIDER_HEIGHT};
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-slider-thumb {
    ${sliderThumbStyle}
  }

  &::-moz-range-thumb {
    ${sliderThumbStyle}
  }
`;

export const SliderTextContainer = styled.div`
  margin-top: ${GAP_MD};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SliderTrack = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.neutralColors.gray};
  width: 100%;
  height: ${SLIDER_HEIGHT};
`;

export const SliderRange = styled.div`
  position: absolute;
  height: ${SLIDER_HEIGHT};
  background: ${(props) => props.theme.colors.mainColors.black};
`;
