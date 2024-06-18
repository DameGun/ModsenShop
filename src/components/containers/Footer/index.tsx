import { useMemo } from 'react';
import {
  FacebookIcon,
  FooterEmailIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@assets/icons';
import Icon from '@components/ui/Icon';
import Input from '@components/ui/Input';
import { IconLink, Link } from '@components/ui/Link';
import Text from '@components/ui/Text';
import { ROUTES } from '@constants/routes';
import { useTheme } from 'styled-components';
import { FooterContainer, FooterSocials, FooterText } from './styled';

export default function Footer() {
  const { colors } = useTheme();
  const contactsLinkColor = useMemo(() => colors.neutralColors.darkGray, [colors]);
  const contactsHoverLinkColor = useMemo(() => colors.mainColors.black, [colors]);

  return (
    <FooterContainer>
      <FooterText className='contacts'>
        <Link
          to=''
          $level='heading5'
          $textTransform='uppercase'
          $color={contactsLinkColor}
          $hoverColor={contactsHoverLinkColor}
        >
          Contact
        </Link>
        <Link
          to=''
          $level='heading5'
          $textTransform='uppercase'
          $color={contactsLinkColor}
          $hoverColor={contactsHoverLinkColor}
        >
          Terms Of Services
        </Link>
        <Link
          to=''
          $level='heading5'
          $textTransform='uppercase'
          $color={contactsLinkColor}
          $hoverColor={contactsHoverLinkColor}
        >
          Shipping and Returns
        </Link>
      </FooterText>
      <Input
        placeholder='Give an email, get the newsletter.'
        className='email-input'
        icon={<Icon src={<FooterEmailIcon />} $iconsize='sm' />}
        onChange={() => {}}
      />
      <Text $level='heading5' $spanColor={colors.neutralColors.darkGray}>
        &#169; 2023 Shelly. <span>Terms of use</span> and <span>privacy policy</span>
      </Text>
      <FooterSocials>
        <span className='caption'>Follow us</span>
        <span className='placeholder' />
        <span className='socials-icons'>
          <IconLink to={ROUTES.linkedIn}>
            <Icon src={<LinkedinIcon />} $hoverable aria-label='LinkedIn icon' />
          </IconLink>
          <IconLink to={ROUTES.facebook}>
            <Icon src={<FacebookIcon />} $hoverable aria-label='Facebook icon' />
          </IconLink>
          <IconLink to={ROUTES.instagram}>
            <Icon src={<InstagramIcon />} $hoverable aria-label='Instagram icon' />
          </IconLink>
          <IconLink to={ROUTES.twitter}>
            <Icon src={<TwitterIcon />} $hoverable aria-label='Twitter icon' />
          </IconLink>
        </span>
      </FooterSocials>
    </FooterContainer>
  );
}
