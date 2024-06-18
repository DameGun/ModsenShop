import { useState } from 'react';
import FilterOptionContainer from '@components/containers/FilterOptionContainer';
import IconButton from '@components/ui/IconButton';
import Text from '@components/ui/Text';
import { useTheme } from 'styled-components';
import { SliderRange, SliderTextContainer, SliderTrack, StyledRangeInput } from './styled';

interface RangeInputProps {
  minValue: number;
  maxValue: number;
  labelText: string;
  onSubmit: (value: [number, number]) => void;
}

export default function Slider({ minValue, maxValue, labelText, onSubmit }: RangeInputProps) {
  const [leftValue, setLeftValue] = useState<number>(minValue);
  const [rightValue, setRightValue] = useState<number>(maxValue);
  const { colors, constants } = useTheme();

  function handleLeftChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    if (value <= rightValue) {
      setLeftValue(value);
    }
  }

  function handleRightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    if (value >= leftValue) {
      setRightValue(value);
    }
  }

  function handleOnClose() {
    setLeftValue(minValue);
    setRightValue(maxValue);
    onSubmit([minValue, maxValue]);
  }

  function handleSubmit() {
    onSubmit([leftValue, rightValue]);
  }

  return (
    <FilterOptionContainer
      isVisible={leftValue !== minValue || rightValue !== maxValue}
      onClose={handleOnClose}
    >
      <SliderTrack>
        <SliderRange
          style={{
            left: ((leftValue - minValue) / (maxValue - minValue)) * 100 + '%',
            right: ((maxValue - rightValue) / (maxValue - minValue)) * 100 + '%',
          }}
        />

        <StyledRangeInput
          className='min'
          min={minValue}
          max={maxValue}
          value={leftValue}
          step={constants.slider.step}
          onChange={handleLeftChange}
          style={{ zIndex: leftValue === maxValue ? 1 : 0 }}
        />
        <StyledRangeInput
          className='max'
          min={minValue}
          max={maxValue}
          value={rightValue}
          step={constants.slider.step}
          onChange={handleRightChange}
        />
      </SliderTrack>
      <SliderTextContainer>
        <Text $level='bodyMedium'>
          {labelText}${leftValue} - ${rightValue}
        </Text>
        <IconButton $mobileVisible $desktopVisible onClick={handleSubmit}>
          <Text $level='bodyMedium' $color={colors.mainColors.accent}>
            Filter
          </Text>
        </IconButton>
      </SliderTextContainer>
    </FilterOptionContainer>
  );
}
