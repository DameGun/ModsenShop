import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  margin: 0 15%;
  display: grid;
  align-items: center;
  grid-column-gap: 6em;
  grid-row-gap: ${(props) => props.theme.constants.gap.xl};
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.media.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr) auto;

    margin: ${(props) => props.theme.constants.gap.xl} 0;

    .submit-button {
      grid-column: 1;
    }

    :nth-last-child(2) {
      grid-column: 1;
    }
  }

  :nth-last-child(2) {
    grid-column: span 2;
  }

  .submit-button {
    grid-column: 2;
  }

  @media ${(props) => props.theme.media.mobile} {
    .submit-button {
      grid-column: 1;
    }

    :nth-last-child(2) {
      grid-column: 1;
    }
  }
`;
