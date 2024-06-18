import { Component, ErrorInfo, ReactNode } from 'react';
import Fallback from '@components/containers/Fallback';
import Text from '@components/ui/Text';

interface Props {
  isLoading: boolean;
  isUninitialized: boolean;
  isError: boolean;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error', error, errorInfo);
  }

  public render() {
    if (this.props.isLoading || this.props.isUninitialized) {
      return (
        <Fallback>
          <Text $level='heading2'>Loading...</Text>
        </Fallback>
      );
    }

    if (this.state.hasError || this.props.isError) {
      return (
        <Fallback>
          <Text $level='heading2'>Sorry. Error happened</Text>
        </Fallback>
      );
    }

    return this.props.children;
  }
}
