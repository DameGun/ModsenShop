import { GAP_LG, GAP_MD, GAP_XL } from '@constants/styles';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${GAP_XL};
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
    grid-gap: ${GAP_LG};
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 0.5fr);
    grid-template-areas:
      'email-input'
      'contacts'
      'socials'
      'terms';

    border-top-color: transparent;

    .terms {
      color: ${(props) => props.theme.colors.neutralColors.darkGray};
    }
  }
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${GAP_LG};

  @media ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    gap: ${GAP_MD};
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterSocials = styled.div`
  grid-area: socials;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
    gap: ${GAP_MD};
  }

  @media ${(props) => props.theme.media.mobile} {
    justify-content: flex-start;

    .caption,
    .placeholder {
      display: block;
    }
  }
`;
