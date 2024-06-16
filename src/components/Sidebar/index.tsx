import Input from '@components/Input';
import { SidebarContainer, SidebarGroup, SidebarInnerContainer } from './styled';
import Select from '@components/Select';
import Icon from '@components/Icon';
import Text from '@components/Text';
import { useTheme } from 'styled-components';
import { useGetAllCategoriesQuery } from '@store/products/productsApi';
import IconButton from '@components/IconButton';
import { FilterIcon, SearchIcon } from '@assets/icons';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import {
  selectCurrentSearchTerm,
  selectPriceConstants,
  setPriceValues,
  setSearchTerm,
  setSortCategory,
  setSortOrder,
} from '@store/products/productsSlice';
import Slider from '@components/Slider';
import FilterOptionContainer from '@components/FilterOptionContainer';
import { useState } from 'react';

export default function Sidebar() {
  const { colors } = useTheme();
  const { data } = useGetAllCategoriesQuery();
  const priceConstants = useAppSelector(selectPriceConstants);
  const searchTerm = useAppSelector(selectCurrentSearchTerm);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <SidebarContainer>
      <IconButton $mobileVisible onClick={() => setIsOpen(!isOpen)}>
        <Icon src={<FilterIcon />} aria-label='Filter' />
        <Text $level='heading4' $color={colors.mainColors.accent}>
          Filters
        </Text>
      </IconButton>
      <SidebarInnerContainer className={isOpen ? 'visible' : ''}>
        <FilterOptionContainer
          isVisible={Boolean(searchTerm)}
          onClose={() => dispatch(setSearchTerm(''))}
        >
          <Input
            placeholder='Search...'
            icon={<Icon src={<SearchIcon />} />}
            onChange={(v) => dispatch(setSearchTerm(v))}
          />
        </FilterOptionContainer>
        <SidebarGroup>
          {data && (
            <Select label='Shop By' values={data} onChange={(v) => dispatch(setSortCategory(v))} />
          )}
          <Select
            label='Sort By'
            values={['asc', 'desc']}
            onChange={(v) => dispatch(setSortOrder(v))}
          />
        </SidebarGroup>
        {priceConstants && (
          <Slider
            minValue={priceConstants[0]}
            maxValue={priceConstants[1]}
            labelText='Price: '
            onSubmit={(value) => dispatch(setPriceValues(value))}
          />
        )}
      </SidebarInnerContainer>
    </SidebarContainer>
  );
}
