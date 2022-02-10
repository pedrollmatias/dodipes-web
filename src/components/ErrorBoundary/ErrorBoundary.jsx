import React from "react";

export class ErrorBoundary extends React.Component {
  state = { error: false };

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError')
    return { error };
  }

  componentDidCatch(error) {
    console.log('componentDidCatch')
    // Log or store the error
    console.error(error);
  }

  render() {
    return this.state.error ? this.props.fallback : this.props.children;
  }
}
