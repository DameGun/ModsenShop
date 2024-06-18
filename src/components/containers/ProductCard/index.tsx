import { Link } from 'react-router-dom';
import Text from '@components/ui/Text';
import { ROUTES } from '@constants/routes';
import { useTheme } from 'styled-components';
import { Product } from 'types/product';
import { ThemeSizes } from 'types/themeConstants';
import {
  CardHoverSpan,
  ProductCardContainer,
  ProductCardContent,
  ProductCardImage,
  ProductCardImageContainer,
} from './styled';
import AddToCartButton from '../AddToCartButton';

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
          <AddToCartButton isWithCounter={false} product={item}>
            <Text $level='bodyLarge'>Add to cart</Text>
          </AddToCartButton>
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
