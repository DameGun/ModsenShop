import styled from 'styled-components';
import { FlexRow } from '../Flex';

const Section = styled.section`
  margin-top: ${(props) => props.theme.constants.gap.xl};
  @media ${(props) => props.theme.media.mobile} {
    margin-top: ${(props) => props.theme.constants.gap.lg};
  }
`;

export const SectionHeader = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2em;

  @media ${(props) => props.theme.media.mobile} {
    margin-bottom: 1em;
  }
`;

export default Section;
