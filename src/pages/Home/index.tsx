import Carousel from '@components/Carousel';
import { Link } from '@components/Link';
import Products from '@components/Products';
import Section, { SectionHeader } from '@components/Section';
import Text from '@components/Text';
import { useGetAllProductsQuery } from '@store/products/productsApi';
import { Fragment } from 'react/jsx-runtime';
import { useTheme } from 'styled-components';

export default function HomePage() {
  const { data } = useGetAllProductsQuery({ limit: 6 });
  const { colors } = useTheme();
  return (
    <Fragment>
      <Section>{data && <Carousel products={data} />}</Section>
      <Section>
        <SectionHeader>
          <Text $level='heading1'>Shop The Latest</Text>
          <Link to='shop'>
            <Text $level='heading4' $color={colors.mainColors.accent}>
              View All
            </Text>
          </Link>
        </SectionHeader>
        {data && <Products products={data} />}
      </Section>
    </Fragment>
  );
}
