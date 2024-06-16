import Carousel from '@components/Carousel';
import { Link } from '@components/Link';
import Products from '@components/Products';
import Section, { SectionHeader } from '@components/Section';
import Text from '@components/Text';
import { Fragment } from 'react/jsx-runtime';
import { useTheme } from 'styled-components';

export default function HomePage() {
  const { colors } = useTheme();
  return (
    <Fragment>
      <Section>
        <Carousel />
      </Section>
      <Section>
        <SectionHeader>
          <Text $level='heading1'>Shop The Latest</Text>
          <Link to='shop' $level='heading4' $color={colors.mainColors.accent}>
            View All
          </Link>
        </SectionHeader>
        <Products limit={6} $cardSize='lg' />
      </Section>
    </Fragment>
  );
}
