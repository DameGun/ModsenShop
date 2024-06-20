import Alert from '@components/ui/Alert';
import { useAppSelector } from '@hooks/redux';
import { selectAlertStack } from '@store/alerts/alertsSlice';
import { AlertsSectionContainer } from './styled';

export default function AlertsSection() {
  const alerts = useAppSelector(selectAlertStack);

  return (
    alerts.length > 0 && (
      <AlertsSectionContainer>
        {alerts.map((alert) => (
          <Alert key={alert.id} {...alert} />
        ))}
      </AlertsSectionContainer>
    )
  );
}
