import { ALERT_DEFAULT_LIFETIME_MS } from '@constants/styles';
import { Alert, AlertType } from 'types/alert';
import { sendEmail, SendEmailProps } from './email';

interface CreateAlertProps extends Omit<Alert, 'id' | 'timeoutId'> {
  createCallback: (alert: Alert) => void;
  timeoutCallback: (alert: Alert) => void;
}

interface HandleSendEmailProps
  extends Pick<CreateAlertProps, 'createCallback' | 'timeoutCallback'>,
    SendEmailProps {}

export function createAlert({
  name,
  text,
  type,
  timeoutCallback,
  createCallback,
}: CreateAlertProps) {
  const alert: Alert = {
    id: crypto.randomUUID(),
    name,
    text,
    type,
  };

  createCallback(alert);
  setTimeout(() => timeoutCallback(alert), ALERT_DEFAULT_LIFETIME_MS);

  return alert;
}

export async function handleSendEmail({
  data,
  createCallback,
  timeoutCallback,
  emailType,
}: HandleSendEmailProps): Promise<AlertType> {
  let operationResultStatus: AlertType = 'error';

  try {
    const emailResponse = await sendEmail({ data, emailType });

    if (emailResponse.status == 200) operationResultStatus = 'success';
    else operationResultStatus = 'error';
  } catch (err) {
    operationResultStatus = 'error';
  } finally {
    if (operationResultStatus == 'success') {
      createAlert({
        name: 'Success',
        text: 'Your request was recieved',
        type: operationResultStatus,
        timeoutCallback,
        createCallback,
      });
    } else {
      createAlert({
        name: 'Error',
        text: 'Something went wrong when sending an email',
        type: operationResultStatus,
        timeoutCallback,
        createCallback,
      });
    }
  }

  return operationResultStatus;
}
