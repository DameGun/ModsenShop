import { Product } from '@ts/product';
import {
  CardHoverSpan,
  ProductCardContainer,
  ProductCardContent,
  ProductCardImage,
  ProductCardImageContainer,
} from './styled';
import Text from '@components/Text';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  const { colors } = useTheme();
  return (
    <ProductCardContainer>
      <ProductCardImageContainer>
        <Link to=''>
          <ProductCardImage src={item.image} alt={`${item.title} image`} />
        </Link>
        <CardHoverSpan>
          <Text $level='bodyLarge'>Add to cart</Text>
        </CardHoverSpan>
      </ProductCardImageContainer>
      <ProductCardContent>
        <Text $level='heading3' $isTruncated>
          {item.title}
        </Text>
        <Text $level='heading4' $color={colors.mainColors.accent}>
          $ {item.price}
        </Text>
      </ProductCardContent>
    </ProductCardContainer>
  );
}
