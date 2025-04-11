import { Navigate } from "react-router-dom";

const withAuthenticate = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthenticate;
