import Input from '@components/ui/Input';
import { SidebarContainer, SidebarGroup, SidebarInnerContainer } from './styled';
import Select from '@components/ui/Select';
import Icon from '@components/ui/Icon';
import Text from '@components/ui/Text';
import { useTheme } from 'styled-components';
import { useGetAllCategoriesQuery } from '@store/products/productsApi';
import IconButton from '@components/ui/IconButton';
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
import Slider from '@components/containers/Slider';
import FilterOptionContainer from '@components/containers/FilterOptionContainer';
import { useState } from 'react';

export default function Sidebar() {
  const { colors } = useTheme();
  const { data } = useGetAllCategoriesQuery();
  const priceConstants = useAppSelector(selectPriceConstants);
  const searchTerm = useAppSelector(selectCurrentSearchTerm);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  function handleSideBar() {
    setIsOpen(!isOpen);
  }

  function handleSearchTerm(value: string) {
    dispatch(setSearchTerm(value));
  }

  function handleSortCategory(value: string) {
    dispatch(setSortCategory(value));
  }

  function handleSortOrder(value: string) {
    dispatch(setSortOrder(value));
  }

  function handlePriceValues(value: [number, number]) {
    dispatch(setPriceValues(value));
  }

  return (
    <SidebarContainer>
      <IconButton $mobileVisible onClick={handleSideBar}>
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
            onChange={handleSearchTerm}
          />
        </FilterOptionContainer>
        <SidebarGroup>
          {data && <Select label='Shop By' values={data} onChange={handleSortCategory} />}
          <Select label='Sort By' values={['asc', 'desc']} onChange={handleSortOrder} />
        </SidebarGroup>
        {priceConstants && (
          <Slider
            minValue={priceConstants[0]}
            maxValue={priceConstants[1]}
            labelText='Price: '
            onSubmit={handlePriceValues}
          />
        )}
      </SidebarInnerContainer>
    </SidebarContainer>
  );
}
