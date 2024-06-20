import { FlexColumn } from '@components/ui/Flex';
import styled from 'styled-components';

export const FormControlErrorMessage = styled.p`
  font-size: ${(props) => props.theme.fonts.default.formError.size};
  color: ${(props) => props.theme.colors.serviceColors.errors};
`;

export const FormControlContainer = styled(FlexColumn)`
  gap: ${(props) => props.theme.constants.gap.sm};
`;
