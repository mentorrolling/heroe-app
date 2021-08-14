import React from "react";
import { useParams } from "react-router-dom";

const HeroeScreen = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-white">Heroe: </h1>
          <hr />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-12 col-md-6">
          <img className="card-datos img-heroe-id" src="" alt="" />
        </div>
        <div className="col-12 col-md-6">
          <div className="card card-datos">
            <div className="card-body">
              <h5 className="card-title">Data</h5>
              <hr />
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <h6 className="card-subtitle mb-2 text-muted">Powerstats</h6>
              <ul>
                <li>
                  <b>Intelligence:</b>
                </li>
                <li>
                  <b>Strength:</b>
                </li>
                <li>
                  <b>Speed:</b>
                </li>
                <li>
                  <b>Durability:</b>
                </li>
                <li>
                  <b>Power:</b>
                </li>
                <li>
                  <b>Combat:</b>
                </li>
              </ul>
              <h6 className="card-subtitle mb-2 text-muted">
                First appearance
              </h6>
              <h6></h6>
              <h6 className="card-subtitle mb-2 text-muted">Connections</h6>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeScreen;
