import { Component, ReactNode } from "react";
import "./TimerErrorBoundary.css";
import { toast } from "react-toastify";

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
    toast.error(error.message);
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="timer error">
            <div className="timer-container">
              <h3 className="title">Component crashed</h3>
              <p className="message">{this.state.errorMessage}</p>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default TimerErrorBoundary;
