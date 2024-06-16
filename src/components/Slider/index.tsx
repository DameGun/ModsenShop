import Text from '@components/Text';
import { SliderRange, SliderTextContainer, SliderTrack, StyledRangeInput } from './styled';
import { useState } from 'react';
import { SLIDER_STEP } from '@constants/styles';
import { useTheme } from 'styled-components';
import IconButton from '@components/IconButton';
import FilterOptionContainer from '@components/FilterOptionContainer';

interface RangeInputProps {
  minValue: number;
  maxValue: number;
  labelText: string;
  onSubmit: (value: [number, number]) => void;
}

export default function Slider({ minValue, maxValue, labelText, onSubmit }: RangeInputProps) {
  const [leftValue, setLeftValue] = useState<number>(minValue);
  const [rightValue, setRightValue] = useState<number>(maxValue);
  const { colors } = useTheme();

  const handleLeftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value <= rightValue) {
      setLeftValue(value);
    }
  };

  const handleRightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= leftValue) {
      setRightValue(value);
    }
  };

  return (
    <FilterOptionContainer
      isVisible={leftValue !== minValue || rightValue !== maxValue}
      onClose={() => {
        setLeftValue(minValue);
        setRightValue(maxValue);
        onSubmit([minValue, maxValue]);
      }}
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
          step={SLIDER_STEP}
          onChange={handleLeftChange}
          style={{ zIndex: leftValue === maxValue ? 1 : 0 }}
        />
        <StyledRangeInput
          className='max'
          min={minValue}
          max={maxValue}
          value={rightValue}
          step={SLIDER_STEP}
          onChange={handleRightChange}
        />
      </SliderTrack>
      <SliderTextContainer>
        <Text $level='bodyMedium'>
          {labelText}${leftValue} - ${rightValue}
        </Text>
        <IconButton
          $mobileVisible
          $desktopVisible
          onClick={() => onSubmit([leftValue, rightValue])}
        >
          <Text $level='bodyMedium' $color={colors.mainColors.accent}>
            Filter
          </Text>
        </IconButton>
      </SliderTextContainer>
    </FilterOptionContainer>
  );
}
