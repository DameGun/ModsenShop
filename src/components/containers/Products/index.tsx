import { ProductCardStyleProps } from '@components/containers/ProductCard';
import { FilterParams } from 'types/product';
import { useGetAllProductsQuery } from '@store/products/productsApi';
import { useCallback } from 'react';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Text from '@components/ui/Text';
import ProductsWrapper from '@components/containers/ProductsWrapper';

export interface ProductsProps extends FilterParams, ProductCardStyleProps {}

export default function Products({
  sort,
  category,
  searchTerm,
  priceSortValues,
  limit,
  $cardSize,
}: ProductsProps) {
  const { data, ...queryProps } = useGetAllProductsQuery();

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
        return <ProductsWrapper items={result} $cardSize={$cardSize} />;
      }

      return <Text $level='heading2'>No products found</Text>;
    }
  }, [category, sort, searchTerm, priceSortValues, data]);

  return (
    <ErrorBoundary {...queryProps}>
      <Filtered />
    </ErrorBoundary>
  );
}
