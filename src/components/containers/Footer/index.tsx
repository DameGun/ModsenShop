import { useMemo } from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@assets/icons';
import Icon from '@components/ui/Icon';
import { IconLink, Link } from '@components/ui/Link';
import Text from '@components/ui/Text';
import { ROUTES } from '@constants/routes';
import { useTheme } from 'styled-components';
import { FooterContainer, FooterSocials, FooterText } from './styled';
import FooterEmailForm from '../FooterEmailForm';

export default function Footer() {
  const { colors } = useTheme();
  const contactsLinkColor = useMemo(() => colors.neutralColors.darkGray, [colors]);
  const contactsHoverLinkColor = useMemo(() => colors.mainColors.black, [colors]);

  return (
    <FooterContainer>
      <FooterText className='contacts' $mobile={{ $direction: 'column' }}>
        <Link
          to={ROUTES.contact}
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
      <FooterEmailForm />
      <Text $level='heading5' $spanColor={colors.neutralColors.darkGray}>
        &#169; 2023 Shelly. <span>Terms of use</span> and <span>privacy policy</span>
      </Text>
      <FooterSocials $align='center' $justify='flex-end' $mobile={{ $justify: 'flex-start' }}>
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
