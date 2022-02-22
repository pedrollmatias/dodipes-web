import React from "react";

export class ErrorBoundary extends React.Component {
  state = { error: false };

  static getDerivedStateFromError(error) {
    console.error("getDerivedStateFromError");
    return { error };
  }

  componentDidCatch(error) {
    console.error("componentDidCatch");
    // Log or store the error
    console.error(error);
  }

  render() {
    return this.state.error ? this.props.fallback : this.props.children;
    
    // return (
    //   <>
    //     <h3>Erro de renderizacao</h3>
    //     <p>
    //     </p>
    //   </>
    // );
  }
}
