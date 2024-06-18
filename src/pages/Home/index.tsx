import { Fragment } from 'react/jsx-runtime';
import Carousel from '@components/containers/Carousel';
import Products from '@components/containers/Products';
import { Link } from '@components/ui/Link';
import Section, { SectionHeader } from '@components/ui/Section';
import Text from '@components/ui/Text';
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
