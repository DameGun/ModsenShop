import { SectionHeader } from '@components/ui/Section';
import { GAP_LG, GAP_MD } from '@constants/styles';
import styled from 'styled-components';

export const ProductSectionHeader = styled(SectionHeader)`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.gray};

  @media ${(props) => props.theme.media.mobile} {
    border-top: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
  }

  & > h3 {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.darkGray};
    padding: ${GAP_LG} 0;

    @media ${(props) => props.theme.media.mobile} {
      border-bottom: none;
      padding: ${GAP_MD} 0;
    }
  }
`;
