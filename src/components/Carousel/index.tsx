import { CAROUSEL_ANIMATION_DURATION, CAROUSEL_LENGTH } from '@constants/styles';
import { useEffect, useState } from 'react';
import {
  CarouselContainer,
  CarouselIndicator,
  CarouselIndicatorContainer,
  CarouselInfoContainer,
} from './styled';
import { Product } from '@ts/product';
import { ImageFillContainer } from '@components/Image';
import Text from '@components/Text';
import { useTheme } from 'styled-components';
import Button from '@components/Button';
import { Link } from 'react-router-dom';

interface CarouselProps {
  products: Product[];
}

export default function Carousel({ products }: CarouselProps) {
  const [index, setIndex] = useState<number>(0);
  const { colors } = useTheme();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prev) => {
        const newIndex = prev == CAROUSEL_LENGTH - 1 ? 0 : prev + 1;
        return newIndex;
      });
    }, CAROUSEL_ANIMATION_DURATION);

    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <CarouselContainer>
      <ImageFillContainer src={products[index].image} />
      <CarouselInfoContainer>
        <Text $level='heading4' $color={colors.mainColors.white}>
          {products[index].title}
        </Text>
        <Text $level='bodyMedium' $color={colors.mainColors.white}>
          $ {products[index].price}
        </Text>
        <Link to=''>
          <Button $size='sm'>View Product</Button>
        </Link>
      </CarouselInfoContainer>
      <CarouselIndicatorContainer>
        {Array.from({ length: CAROUSEL_LENGTH }, (_, indicatorIndex) => (
          <CarouselIndicator
            key={indicatorIndex}
            className={indicatorIndex == index ? 'active' : ''}
            onClick={() => setIndex(indicatorIndex)}
          />
        ))}
      </CarouselIndicatorContainer>
    </CarouselContainer>
  );
}
