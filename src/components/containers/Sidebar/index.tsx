import { useState } from 'react';
import { FilterIcon, SearchIcon } from '@assets/icons';
import Slider from '@components/containers/Slider';
import Icon from '@components/ui/Icon';
import IconButton from '@components/ui/IconButton';
import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import Text from '@components/ui/Text';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { useGetAllCategoriesQuery } from '@store/products/productsApi';
import {
  selectPriceConstants,
  setPriceValues,
  setSearchTerm,
  setSortCategory,
  setSortOrder,
} from '@store/products/productsSlice';
import { useTheme } from 'styled-components';
import { SortType } from 'types/product';
import { SidebarContainer, SidebarGroup, SidebarInnerContainer } from './styled';

export default function Sidebar() {
  const { colors } = useTheme();
  const { data } = useGetAllCategoriesQuery();
  const priceConstants = useAppSelector(selectPriceConstants);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleSideBar() {
    setIsOpen(!isOpen);
  }

  function handleSearchTerm(event: React.ChangeEvent<HTMLInputElement> | string) {
    if (typeof event == 'string') {
      dispatch(setSearchTerm(''));
    } else {
      dispatch(setSearchTerm(event.target.value));
    }
  }

  function handleSortCategory(value: string) {
    dispatch(setSortCategory(value));
  }

  function handleSortOrder(value: string) {
    dispatch(setSortOrder(value as SortType));
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
        <Input
          name='search'
          placeholder='Search...'
          icon={<Icon src={<SearchIcon />} />}
          onChange={handleSearchTerm}
        />
        <SidebarGroup>
          {data && <Select label='Shop By' values={data} onChange={handleSortCategory} />}
          <Select label='Sort By' values={Object.values(SortType)} onChange={handleSortOrder} />
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
