import { Component, ReactNode } from "react";
import "./TimerErrorBoundary.css";

interface TimerErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

interface TimerErrorBoundaryProps {
  children: ReactNode;
}

class TimerErrorBoundary extends Component<
  TimerErrorBoundaryProps,
  TimerErrorBoundaryState
> {
  state: TimerErrorBoundaryState = {
    hasError: false,
    errorMessage: "",
  };

  static getDerivedStateFromError(_: Error): TimerErrorBoundaryState {
    return { hasError: true, errorMessage: "An error occurred" };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="timer">
            <div className="timer-container">
              <h3 className="error-message">{this.state.errorMessage}</h3>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default TimerErrorBoundary;
