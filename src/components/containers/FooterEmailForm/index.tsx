import { FooterEmailIcon } from '@assets/icons';
import Icon from '@components/ui/Icon';
import IconButton from '@components/ui/IconButton';
import { useAppDispatch } from '@hooks/redux';
import { addAlert, removeAlert } from '@store/alerts/alertsSlice';
import { handleSendEmail } from '@utils/alert';
import { Form, Formik, FormikHelpers } from 'formik';
import { FooterEmailFormValues } from 'types/email';
import * as Yup from 'yup';
import FormControl from '../FormControl';

export default function FooterEmailForm() {
  const dispatch = useAppDispatch();
  const initialValues: FooterEmailFormValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  async function handleSubmit(
    values: FooterEmailFormValues,
    { resetForm }: FormikHelpers<FooterEmailFormValues>
  ) {
    const result = await handleSendEmail({
      data: values,
      createCallback: (alert) => dispatch(addAlert(alert)),
      timeoutCallback: (alert) => dispatch(removeAlert(alert.id)),
      emailType: 'newsletter',
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
        <FormControl
          id='footer-email'
          name='email'
          placeholder='Give an email, get the newsletter.'
          elementType='input'
          disableResetButton
          icon={
            <IconButton type='submit' $desktopVisible $mobileVisible>
              <Icon src={<FooterEmailIcon />} $iconsize='sm' />
            </IconButton>
          }
        />
      </Form>
    </Formik>
  );
}
