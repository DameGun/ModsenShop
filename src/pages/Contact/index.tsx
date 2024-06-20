import ContactForm from '@components/containers/ContactForm';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import { ContactHeader } from './styled';

export default function ContactPage() {
  return (
    <Section>
      <ContactHeader $align='center' $mobile={{ $align: 'start' }}>
        <Text $level='heading1' $textTransform='capitalize'>
          Contact us
        </Text>
        <Text $level='heading3'>
          Say Hello send us your thoughts about our products or share your ideas with our Team!
        </Text>
      </ContactHeader>
      <ContactForm />
    </Section>
  );
}
