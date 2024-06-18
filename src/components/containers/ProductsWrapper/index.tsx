import ProductCard, { ProductCardStyleProps } from '@components/containers/ProductCard';
import { Product } from 'types/product';
import { ProductsWrapperContainer } from './styled';

interface ProductsWrapperProps extends ProductCardStyleProps {
  items: Product[];
}

export default function ProductsWrapper({ items, $cardSize }: ProductsWrapperProps) {
  return (
    <ProductsWrapperContainer $cardSize={$cardSize}>
      {items.map((product) => (
        <ProductCard key={product.id} item={product} $cardSize={$cardSize} />
      ))}
    </ProductsWrapperContainer>
  );
}
