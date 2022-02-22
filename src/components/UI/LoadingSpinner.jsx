import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = ({ size = "md" }) => {
  return <Spinner animation="grow" variant="primary" size={size} />;
};

export default LoadingSpinner;
