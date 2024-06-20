import { useCallback, useEffect } from 'react';
import ErrorBoundary from '@components/common/ErrorBoundary';
import { ProductCardStyleProps } from '@components/containers/ProductCard';
import ProductsWrapper from '@components/containers/ProductsWrapper';
import Text from '@components/ui/Text';
import { useAppDispatch } from '@hooks/redux';
import { useGetAllProductsQuery } from '@store/products/productsApi';
import { resetSortState } from '@store/products/productsSlice';
import { FilterParams, SortType } from 'types/product';
import Fallback from '../Fallback';

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      if (sort || category || searchTerm || priceSortValues) {
        dispatch(resetSortState());
      }
    };
  }, []);

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
          sort == SortType.Asc ? a.price - b.price : sort == SortType.Desc ? b.price - a.price : 0
        );

      if (result.length) {
        return <ProductsWrapper items={result} $cardSize={$cardSize} />;
      }

      return (
        <Fallback>
          <Text $level='heading2'>No products found</Text>
        </Fallback>
      );
    }
  }, [category, sort, searchTerm, priceSortValues, data]);

  return (
    <ErrorBoundary {...queryProps}>
      <Filtered />
    </ErrorBoundary>
  );
}
