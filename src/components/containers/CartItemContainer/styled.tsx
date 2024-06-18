import { FlexRow } from '@components/ui/Flex';
import styled from 'styled-components';

export const CartItemRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 0.5fr;

  @media ${(props) => props.theme.media.mobile} {
    grid-template-columns: 1fr 1.5fr 1.6fr 0.4fr;
  }

  align-items: center;
  padding: ${(props) => props.theme.constants.gap.md} 0;

  border-bottom: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
`;

export const CartItemColumn = styled.div`
  justify-self: center;

  &.image {
    width: 30%;
  }

  @media ${(props) => props.theme.media.mobile} {
    &.image {
      width: 70%;
    }
  }

  &.title {
    justify-self: start;
  }
`;

export const CartItemColumnGroup = styled(FlexRow)`
  margin-left: ${(props) => props.theme.constants.gap.lg};

  @media ${(props) => props.theme.media.mobile} {
    gap: ${(props) => props.theme.constants.gap.md};
    margin-left: ${(props) => props.theme.constants.gap.sm};
  }
`;
