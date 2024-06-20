import { SectionHeader } from '@components/ui/Section';
import styled from 'styled-components';

export const ProductSectionHeader = styled(SectionHeader)`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.gray};

  @media ${(props) => props.theme.media.mobile} {
    border-top: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
  }

  & > h3 {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.darkGray};
    padding: ${(props) => props.theme.constants.gap.lg} 0;

    @media ${(props) => props.theme.media.mobile} {
      border-bottom: none;
      padding: ${(props) => props.theme.constants.gap.md} 0;
    }
  }
`;
