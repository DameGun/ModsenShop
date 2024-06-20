import Button from '@components/ui/Button';
import { useAppDispatch } from '@hooks/redux';
import { addAlert, removeAlert } from '@store/alerts/alertsSlice';
import { handleSendEmail } from '@utils/alert';
import { Form, Formik, FormikHelpers } from 'formik';
import { ContactFormValues } from 'types/email';
import * as Yup from 'yup';
import { ContactFormContainer } from './styled';
import FormControl from '../FormControl';

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const initialValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  async function handleSubmit(
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) {
    const result = await handleSendEmail({
      data: values,
      createCallback: (alert) => dispatch(addAlert(alert)),
      timeoutCallback: (alert) => dispatch(removeAlert(alert.id)),
      emailType: 'contact',
    });

    if (result == 'success') resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <ContactFormContainer>
          <FormControl
            id='firstName'
            name='firstName'
            placeholder='First name'
            elementType='input'
          />
          <FormControl id='lastName' name='lastName' placeholder='Last name' elementType='input' />
          <FormControl id='email' name='email' placeholder='Email' elementType='input' />
          <FormControl id='subject' name='subject' placeholder='Subject' elementType='input' />
          <FormControl id='message' name='message' placeholder='Message' elementType='textArea' />
          <Button type='submit' $size='md' className='submit-button'>
            Send
          </Button>
        </ContactFormContainer>
      </Form>
    </Formik>
  );
}
