import ProductCard from '@components/ProductCard';
import { Product } from '@ts/product';
import { ProductsContainer } from './styled';

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </ProductsContainer>
  );
}
