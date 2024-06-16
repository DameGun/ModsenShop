import { CAROUSEL_ANIMATION_DURATION, CAROUSEL_LENGTH } from '@constants/styles';
import { useEffect, useState } from 'react';
import {
  CarouselContainer,
  CarouselIndicator,
  CarouselIndicatorContainer,
  CarouselInfoContainer,
} from './styled';
import { ImageFillContainer } from '@components/Image';
import Text from '@components/Text';
import { useTheme } from 'styled-components';
import Button from '@components/Button';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '@store/products/productsApi';

export default function Carousel() {
  const { data } = useGetAllProductsQuery();
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
    data && (
      <CarouselContainer>
        <ImageFillContainer src={data[index].image} />
        <CarouselInfoContainer>
          <Text $level='heading4' $color={colors.mainColors.white}>
            {data.slice(0, CAROUSEL_LENGTH)[index].title}
          </Text>
          <Text $level='bodyMedium' $color={colors.mainColors.white}>
            $ {data[index].price}
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
    )
  );
}
