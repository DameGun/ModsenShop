export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export type FooterEmailFormValues = {
  email: string;
};

export type EmailType = 'contact' | 'newsletter';
