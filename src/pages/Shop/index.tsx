import Products from '@components/containers/Products';
import Section, { SectionHeader } from '@components/ui/Section';
import Sidebar from '@components/containers/Sidebar';
import Text from '@components/ui/Text';
import { ShopContainer } from './styled';
import { useAppSelector } from '@hooks/redux';
import {
  selectCurrentCategory,
  selectCurrentSearchTerm,
  selectCurrentSortOrder,
  selectPriceSortValues,
} from '@store/products/productsSlice';

export default function ShopPage() {
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
