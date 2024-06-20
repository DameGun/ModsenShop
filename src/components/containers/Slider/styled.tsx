import { FlexRow } from '@components/ui/Flex';
import styled, { css } from 'styled-components';

const sliderThumbStyle = css`
  -webkit-appearance: none;
  appearance: none;
  height: ${(props) => props.theme.constants.slider.thumbHeight};
  width: ${(props) => props.theme.constants.slider.thumbWidth};
  background-color: ${(props) => props.theme.colors.mainColors.black};
  cursor: pointer;
  pointer-events: auto;
`;

export const StyledRangeInput = styled.input.attrs({
  type: 'range',
})`
  position: absolute;
  width: 100%;
  height: ${(props) => props.theme.constants.slider.height};
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

export const SliderTextContainer = styled(FlexRow)`
  margin-top: ${(props) => props.theme.constants.gap.md};
`;

export const SliderTrack = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.neutralColors.gray};
  width: 100%;
  height: ${(props) => props.theme.constants.slider.height};
`;

export const SliderRange = styled.div`
  position: absolute;
  height: ${(props) => props.theme.constants.slider.height};
  background: ${(props) => props.theme.colors.mainColors.black};
`;
