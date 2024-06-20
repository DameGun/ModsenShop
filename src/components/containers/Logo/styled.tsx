import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogo = styled(NavLink)`
  color: ${(props) => props.theme.colors.mainColors.accent};

  & > span {
    font-family: 'Allerta Stencil';
    font-weight: 400;
    font-size: 35px;

    @media ${(props) => props.theme.media.mobile} {
      font-size: 25px;
    }
  }
  user-select: none;

  & > span:nth-child(2) {
    color: ${(props) => props.theme.colors.mainColors.black};
  }
`;
