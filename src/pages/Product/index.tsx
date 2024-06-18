import ErrorBoundary from '@components/common/ErrorBoundary';
import Section, { SectionHeader } from '@components/ui/Section';
import Text from '@components/ui/Text';
import { useGetProductQuery } from '@store/products/productsApi';
import { useParams } from 'react-router-dom';
import { ProductSectionHeader } from './styled';
import { useTheme } from 'styled-components';
import { ImageFillContainer } from '@components/ui/Image';
import Button from '@components/ui/Button';
import { FlexColumn, FlexRow } from '@components/ui/Flex';
import { GAP_MD, GAP_SM, GAP_XL } from '@constants/styles';
import SimilarItems from '@components/containers/SimilarItems';
import { Fragment } from 'react';
import Icon from '@components/ui/Icon';
import { StarIcon } from '@assets/icons';
import CartItemsCount from '@components/containers/CartItemsCount';

export default function ProductPage() {
  const { id } = useParams();
  const { data: itemData, ...queryProps } = useGetProductQuery(Number(id));
  const { colors } = useTheme();

  return (
    <ErrorBoundary {...queryProps}>
      {itemData && (
        <Fragment>
          <Section>
            <FlexRow $gap={GAP_XL} $mobileDirection='column'>
              <FlexColumn $flex={2}>
                <ImageFillContainer src={itemData.image} />
              </FlexColumn>
              <FlexColumn $gap={GAP_XL} $justify='space-between' $flex={3}>
                <FlexColumn $gap={GAP_XL}>
                  <FlexColumn $gap={GAP_MD}>
                    <Text $level='heading2'>{itemData.title}</Text>
                    <Text $level='heading4' $color={colors.mainColors.accent}>
                      $ {itemData.price}
                    </Text>
                  </FlexColumn>
                  <FlexColumn $gap={GAP_SM}>
                    <FlexRow $align='center' $gap={GAP_MD}>
                      <FlexRow $align='center' $gap={GAP_SM}>
                        <Icon src={<StarIcon />} />
                        <Text $level='heading2'>{itemData.rating.rate}</Text>
                      </FlexRow>
                      <Text $level='heading5' $color={colors.neutralColors.darkGray}>
                        {itemData.rating.count} customer review
                      </Text>
                    </FlexRow>
                    <Text $level='heading5' $color={colors.neutralColors.darkGray}>
                      {itemData.description}
                    </Text>
                  </FlexColumn>
                </FlexColumn>
                <FlexColumn $align='start' $gap={GAP_MD}>
                  <CartItemsCount />
                  <Button $size='md'>Add to cart</Button>
                </FlexColumn>
                <FlexColumn>
                  <Text
                    $level='heading5'
                    $textTransform='capitalize'
                    $spanColor={colors.neutralColors.darkGray}
                  >
                    Category: <span>{itemData.category}</span>
                  </Text>
                </FlexColumn>
              </FlexColumn>
            </FlexRow>
          </Section>
          <Section>
            <ProductSectionHeader>
              <Text $level='heading3'>Description</Text>
            </ProductSectionHeader>
            <Text $level='heading5' $color={colors.neutralColors.darkGray}>
              {itemData.description}
            </Text>
          </Section>
          <Section>
            <SectionHeader>
              <Text $level='heading2'>Similar Items</Text>
            </SectionHeader>
            <SimilarItems category={itemData.category} />
          </Section>
        </Fragment>
      )}
    </ErrorBoundary>
  );
}
