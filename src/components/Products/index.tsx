import ProductCard, { ProductCardStyleProps } from '@components/ProductCard';
import { FilterParams } from '@ts/product';
import { ProductsContainer } from './styled';
import { useGetAllProductsQuery } from '@store/products/productsApi';
import { useCallback } from 'react';
import ErrorBoundary from '@components/ErrorBoundary';
import Text from '@components/Text';

export interface ProductsProps extends FilterParams, ProductCardStyleProps {}

export default function Products({
  sort,
  category,
  searchTerm,
  priceSortValues,
  limit,
  $cardSize,
}: ProductsProps) {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  const Filtered = useCallback(() => {
    if (data) {
      const result = data
        .slice(0, limit)
        .filter((product) => (category ? product.category == category : true))
        .filter((product) =>
          searchTerm
            ? product.title.toLowerCase().includes(searchTerm) ||
              product.title.toLowerCase().includes(searchTerm)
            : true
        )
        .filter((product) =>
          priceSortValues
            ? product.price >= priceSortValues[0] && product.price <= priceSortValues[1]
            : product
        )
        .sort((a, b) =>
          sort == 'asc' ? a.price - b.price : sort == 'desc' ? b.price - a.price : 0
        );

      if (result.length) {
        return result.map((product) => (
          <ProductCard key={product.id} item={product} $cardSize={$cardSize} />
        ));
      }

      return <Text $level='heading2'>No products found</Text>;
    }
  }, [category, sort, searchTerm, priceSortValues, data]);

  return (
    <ErrorBoundary isError={isError} isLoading={isLoading}>
      <ProductsContainer $cardSize={$cardSize}>
        <Filtered />
      </ProductsContainer>
    </ErrorBoundary>
  );
}
