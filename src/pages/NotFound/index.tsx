import Fallback from '@components/containers/Fallback';
import Text from '@components/ui/Text';

export default function NotFoundPage() {
  return (
    <Fallback
      additionalText='This page not found; back to home and start again'
      button={{
        text: 'HOMEPAGE',
        routeLink: 'home',
      }}
    >
      <Text $level='heading1' $textTransform='uppercase'>
        404 Error
      </Text>
    </Fallback>
  );
}
