import styled from 'styled-components';

const Section = styled.section``;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 3em;
  margin-bottom: 2em;

  @media ${(props) => props.theme.media.mobile} {
    margin-top: 2em;
    margin-bottom: 1em;
  }
`;

export default Section;
