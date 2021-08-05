import React from "react";

const InicioScreen = () => {
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col">
          <h1 className="text-white">Inicio</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col col-md-8 offset-md-2"></div>
      </div>
    </div>
  );
};

export default InicioScreen;
