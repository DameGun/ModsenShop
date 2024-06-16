import { TextProps, textStyles } from '@components/Text';
import { TRANSITION_TIME_SM } from '@constants/styles';
import { Link as RouteLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface BaseLinkProps {
  $hoverColor?: string;
}

interface TextLinkProps extends BaseLinkProps, TextProps {}

const baseLinkStyles = css<BaseLinkProps>`
  transition: all ${TRANSITION_TIME_SM};
  &:hover {
    color: ${(props) => props.$hoverColor || props.theme.colors.mainColors.black};
  }
`;

export const Link = styled(RouteLink)<TextLinkProps>`
  ${textStyles}
  ${baseLinkStyles}
`;

export const IconLink = styled(RouteLink)<BaseLinkProps>`
  ${baseLinkStyles}
`;
