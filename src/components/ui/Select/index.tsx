import Icon from '@components/ui/Icon';
import { SelectDropdown, SelectDropdownItem, SelectLabelButton } from './styled';
import { useState } from 'react';
import { SelectIcon } from '@assets/icons';
import Text from '@components/ui/Text';
import FilterOptionContainer from '@components/containers/FilterOptionContainer';

interface SelectProps {
  label: string;
  values: string[];
  onChange: (v: string) => void;
}

export default function Select({ label, values, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>('');

  function handleSelect() {
    setIsOpen(!isOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleChange(value: string) {
    setCurrentValue(value);
    onChange(value);
    handleClose();
  }

  return (
    <FilterOptionContainer isVisible={Boolean(currentValue)} onClose={() => handleChange('')}>
      <SelectLabelButton onClick={handleSelect} $isActive={isOpen}>
        <Text $level='bodyMedium' $textTransform='capitalize'>
          {currentValue !== '' ? currentValue : label}
        </Text>
        <Icon src={<SelectIcon />} $iconsize='sm' />
      </SelectLabelButton>
      {isOpen && (
        <SelectDropdown>
          {values.map((value, index) => (
            <SelectDropdownItem
              key={index}
              defaultValue={value}
              onClick={() => handleChange(value)}
              $isActive={currentValue == value}
            >
              <Text $level='bodyMedium' $textTransform='capitalize'>
                {value}
              </Text>
            </SelectDropdownItem>
          ))}
        </SelectDropdown>
      )}
    </FilterOptionContainer>
  );
}
