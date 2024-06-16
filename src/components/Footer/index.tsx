import Text from '@components/Text';
import { FooterContainer, FooterSocials, FooterText } from './styled';
import Input from '@components/Input';
import Icon from '@components/Icon';
import { IconLink, Link } from '@components/Link';
import {
  FacebookIcon,
  FooterEmailIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@assets/icons';
import { useTheme } from 'styled-components';
import { useMemo } from 'react';

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
      <Text $level='heading5' className='terms'>
        &#169; 2023 Shelly. <span>Terms of use</span> and <span>privacy policy</span>
      </Text>
      <FooterSocials>
        <span className='caption'>Follow us</span>
        <span className='placeholder' />
        <span className='socials-icons'>
          <IconLink to='https://www.linkedin.com'>
            <Icon src={<LinkedinIcon />} $hoverable aria-label='LinkedIn icon' />
          </IconLink>
          <IconLink to='https://www.facebook.com'>
            <Icon src={<FacebookIcon />} $hoverable aria-label='Facebook icon' />
          </IconLink>
          <IconLink to='https://www.instagram.com'>
            <Icon src={<InstagramIcon />} $hoverable aria-label='Instagram icon' />
          </IconLink>
          <IconLink to='https://www.x.com'>
            <Icon src={<TwitterIcon />} $hoverable aria-label='Twitter icon' />
          </IconLink>
        </span>
      </FooterSocials>
    </FooterContainer>
  );
}
