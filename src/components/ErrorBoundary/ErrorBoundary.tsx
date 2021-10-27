import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

export type FallbackComponentProps = {
  error: string;
}

type ErrorBoundaryProps = {
  FallbackComponent: React.ComponentType<FallbackComponentProps>;
  children: ReactNode;
}

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: string;
}

function FallbackComponent({ error }: FallbackComponentProps): React.ReactElement {
  return <p>Oh no we have an error <pre>{error}</pre></p>
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: "",
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorInfo: error.message, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <this.props.FallbackComponent error={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary, FallbackComponent };