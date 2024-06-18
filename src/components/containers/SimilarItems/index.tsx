import ErrorBoundary from '@components/common/ErrorBoundary';
import ProductsWrapper from '@components/containers/ProductsWrapper';
import { useGetProductsByCategoryQuery } from '@store/products/productsApi';

interface SimilarItemsProps {
  category: string;
}

export default function SimilarItems({ category }: SimilarItemsProps) {
  const { data, ...queryProps } = useGetProductsByCategoryQuery(category);

  return (
    <ErrorBoundary {...queryProps}>
      <ProductsWrapper items={data!} $cardSize='lg' />
    </ErrorBoundary>
  );
}
