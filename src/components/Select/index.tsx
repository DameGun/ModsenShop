import Icon from '@components/Icon';
import { SelectDropdown, SelectDropdownItem, SelectLabelButton } from './styled';
import { useState } from 'react';
import { SelectIcon } from '@assets/icons';
import Text from '@components/Text';
import FilterOptionContainer from '@components/FilterOptionContainer';

interface SelectProps {
  label: string;
  values: string[];
  onChange: (v: string) => void;
}

export default function Select({ label, values, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>('');

  const handleClose = () => setIsOpen(false);
  const handleChange = (value: string) => {
    setCurrentValue(value);
    onChange(value);
    handleClose();
  };

  return (
    <FilterOptionContainer isVisible={Boolean(currentValue)} onClose={() => handleChange('')}>
      <SelectLabelButton onClick={() => setIsOpen(!isOpen)} $isActive={isOpen}>
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
