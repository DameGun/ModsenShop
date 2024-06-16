import Products from '@components/Products';
import Section, { SectionHeader } from '@components/Section';
import Sidebar from '@components/Sidebar';
import Text from '@components/Text';
import { ShopContainer } from './styled';
import { useAppSelector } from '@hooks/redux';
import {
  selectCurrentCategory,
  selectCurrentSearchTerm,
  selectCurrentSortOrder,
  selectPriceSortValues,
} from '@store/products/productsSlice';

export default function Shop() {
  const sort = useAppSelector(selectCurrentSortOrder);
  const category = useAppSelector(selectCurrentCategory);
  const searchTerm = useAppSelector(selectCurrentSearchTerm);
  const priceValues = useAppSelector(selectPriceSortValues);

  return (
    <Section>
      <SectionHeader>
        <Text $level='heading1'>Shop The Latest</Text>
      </SectionHeader>
      <ShopContainer>
        <Sidebar />
        <Products
          $cardSize='md'
          sort={sort}
          category={category}
          searchTerm={searchTerm}
          priceSortValues={priceValues}
        />
      </ShopContainer>
    </Section>
  );
}
