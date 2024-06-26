import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@assets/icons';
import ErrorBoundary from '@components/common/ErrorBoundary';
import AddToCartButton from '@components/containers/AddToCartButton';
import SimilarItems from '@components/containers/SimilarItems';
import { FlexColumn, FlexRow } from '@components/ui/Flex';
import Icon from '@components/ui/Icon';
import { ImageFillContainer } from '@components/ui/Image';
import Section, { SectionHeader } from '@components/ui/Section';
import Text from '@components/ui/Text';
import { GAP_MD, GAP_SM, GAP_XL } from '@constants/styles';
import { useGetProductQuery } from '@store/products/productsApi';
import { useTheme } from 'styled-components';
import { ProductSectionHeader } from './styled';

export default function ProductPage() {
  const { id } = useParams();
  const { data: itemData, ...queryProps } = useGetProductQuery(Number(id));
  const { colors } = useTheme();

  return (
    <ErrorBoundary {...queryProps}>
      {itemData && (
        <Fragment>
          <Section>
            <FlexRow
              $gap={GAP_XL}
              $mobile={{
                $direction: 'column',
              }}
            >
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
                  <AddToCartButton isWithCounter product={itemData} />
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
