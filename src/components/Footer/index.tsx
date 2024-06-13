import Text from '@components/Text';
import { FooterContainer, FooterSocials, FooterText } from './styled';
import { Input } from '@components/Input';
import Icon from '@components/Icon';
import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from '@assets/icons';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText className='contacts'>
        <Text $level='heading5' $uppercase>
          Contact
        </Text>
        <Text $level='heading5' $uppercase>
          Terms Of Services
        </Text>
        <Text $level='heading5' $uppercase>
          Shipping and Returns
        </Text>
      </FooterText>
      <Input placeholder='Give an email, get the newsletter.' className='email-input' />
      <Text $level='heading5' className='terms'>
        &#169; 2023 Shelly. <span>Terms of use</span> and <span>privacy policy</span>
      </Text>
      <FooterSocials>
        <span className='caption'>Follow us</span>
        <span className='placeholder' />
        <span className='socials-icons'>
          <Icon src={linkedinIcon} aria-label='LinkedIn icon' />
          <Icon src={facebookIcon} aria-label='Facebook icon' />
          <Icon src={instagramIcon} aria-label='Instagram icon' />
          <Icon src={twitterIcon} aria-label='Twitter icon' />
        </span>
      </FooterSocials>
    </FooterContainer>
  );
}
