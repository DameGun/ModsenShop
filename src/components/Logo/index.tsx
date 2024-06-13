import { NavLink } from '@components/Link';
import styled from 'styled-components';

const StyledLogo = styled(NavLink)`
  color: ${(props) => props.theme.colors.mainColors.accent};
  font-family: 'Allerta Stencil';
  font-weight: 400;
  font-size: 35px;
  padding: 0;
  user-select: none;

  & > span:nth-child(2) {
    color: ${(props) => props.theme.colors.mainColors.black};
  }
`;

export default function Logo() {
  return (
    <StyledLogo to=''>
      <span>Modsen S</span>
      <span>HOPPE</span>
    </StyledLogo>
  );
}
