import {
  CardHoverSpan,
  ProductCardContainer,
  ProductCardContent,
  ProductCardImage,
  ProductCardImageContainer,
} from './styled';
import Text from '@components/ui/Text';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { ROUTES } from '@constants/routes';
import { Product } from 'types/product';
import { ThemeSizes } from 'types/themeConstants';

export interface ProductCardStyleProps {
  $cardSize: keyof ThemeSizes;
}

export interface ProductCardProps extends ProductCardStyleProps {
  item: Product;
}

export default function ProductCard({ item, $cardSize }: ProductCardProps) {
  const { colors } = useTheme();

  return (
    <ProductCardContainer $cardSize={$cardSize}>
      <ProductCardImageContainer>
        <Link to={ROUTES.products(item.id.toString())}>
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
