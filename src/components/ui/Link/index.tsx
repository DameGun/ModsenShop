import { TextProps } from '@components/ui/Text';
import { Link as RouteLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { textStyles } from '../Text/styled';

interface BaseLinkProps {
  $hoverColor?: string;
}

interface TextLinkProps extends BaseLinkProps, TextProps {}

const baseLinkStyles = css<BaseLinkProps>`
  transition: all ${(props) => props.theme.constants.transitionTime.sm};
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
