import {
  EMAIL_CONTACT_TEMPLATE_ID,
  EMAIL_NEWS_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
} from '@constants/environment';
import emailjs from '@emailjs/browser';
import { ContactFormValues, EmailType } from 'types/email';

export interface SendEmailProps {
  data: Partial<ContactFormValues>;
  emailType: EmailType;
}

export async function sendEmail({ data, emailType }: SendEmailProps) {
  const serviceId = EMAIL_SERVICE_ID;
  const template = emailType == 'contact' ? EMAIL_CONTACT_TEMPLATE_ID : EMAIL_NEWS_TEMPLATE_ID;
  const publicKey = EMAIL_PUBLIC_KEY;

  if (!serviceId || !template || !publicKey) {
    throw new Error('Some of email method credentials are missing');
  }

  return await emailjs.send(serviceId, template, data, { publicKey: publicKey });
}
