import { FlexRow } from '@components/ui/Flex';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${(props) => props.theme.constants.gap.xl};
  align-items: center;
  grid-template-areas:
    'contacts email-input'
    'terms socials';

  border-top: 1px solid ${(props) => props.theme.colors.neutralColors.gray};
  padding: 3% 0;
  margin-top: 10%;

  .contacts,
  .terms > span {
    color: ${(props) => props.theme.colors.neutralColors.darkGray};
  }

  .contacts {
    grid-area: contacts;
  }

  .terms {
    grid-area: terms;
  }

  .email-input {
    grid-area: email-input;
  }

  @media ${(props) => props.theme.media.mobile} {
    grid-gap: ${(props) => props.theme.constants.gap.lg};
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 0.5fr);
    grid-template-areas:
      'email-input'
      'contacts'
      'socials'
      'terms';

    border-top-color: transparent;
  }
`;

export const FooterText = styled(FlexRow)`
  gap: ${(props) => props.theme.constants.gap.lg};

  @media ${(props) => props.theme.media.mobile} {
    gap: ${(props) => props.theme.constants.gap.md};
  }
`;

export const FooterSocials = styled(FlexRow)`
  grid-area: socials;

  .caption,
  .placeholder {
    display: none;
  }

  .placeholder {
    width: 3em;
    height: 1px;
    margin: 0 1em;
    bottom: 5;
    background-color: ${(props) => props.theme.colors.mainColors.black};
  }

  .socials-icons {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.constants.gap.md};
  }

  @media ${(props) => props.theme.media.mobile} {
    .caption,
    .placeholder {
      display: block;
    }
  }
`;
