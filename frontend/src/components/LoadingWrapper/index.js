import React from "react";
import { Loader } from "simple-react-loader";

function LoadingHandle({ loading, error, children }) {
  return (
    <div>
      {loading ? (
        <Loader showLoader={true} type="pulse" />
      ) : error ? (
        error
      ) : (
        children
      )}
    </div>
  );
}

export default LoadingHandle;
