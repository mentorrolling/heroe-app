import React from "react";
import error404 from "../assets/error.gif";

const Error404 = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col d-flex justify-content-center">
          <img src={error404} alt="error 404" />
        </div>
      </div>
    </div>
  );
};

export default Error404;
