import { ROUTES } from '@constants/routes';
import { StyledLogo } from './styled';

export default function Logo() {
  return (
    <StyledLogo to={ROUTES.home}>
      <span>Modsen S</span>
      <span>HOPPE</span>
    </StyledLogo>
  );
}
