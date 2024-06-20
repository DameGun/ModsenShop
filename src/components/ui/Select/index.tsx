import { useState } from 'react';
import { SelectIcon } from '@assets/icons';
import ResetButton from '@components/containers/ResetButton';
import Icon from '@components/ui/Icon';
import Text from '@components/ui/Text';
import { SelectDropdown, SelectDropdownItem, SelectLabelButton } from './styled';

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

  function handleReset() {
    setCurrentValue('');
    onChange('');
    handleClose();
  }

  return (
    <ResetButton isVisible={Boolean(currentValue)} onReset={handleReset}>
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
    </ResetButton>
  );
}
