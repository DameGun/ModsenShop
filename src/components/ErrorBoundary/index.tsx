import Text from '@components/Text';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  isLoading: boolean;
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
    if (this.props.isLoading) {
      return <Text $level='heading2'>Loading...</Text>;
    }

    if (this.state.hasError || this.props.isError) {
      return <Text $level='heading1'>Sorry. Error happened</Text>;
    }

    return this.props.children;
  }
}
