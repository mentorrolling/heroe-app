import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getHeroeId } from "../helpers/heroeFetch";

const HeroeScreen = () => {
  const history = useHistory();
  const { id } = useParams();
  const [heroe, setHeroe] = useState({
    response: null,
  });

  useEffect(() => {
    getHeroeId(id).then((respuesta) => {
      setHeroe(respuesta);
    });
  }, [id]);

  if (heroe.response === "error") {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h3 className="text-center text-white">
              No existe este Id de personaje
            </h3>
            <button
              className="btn btn-outline-info"
              onClick={() => history.goBack()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {heroe.response === "success" && (
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-white">Heroe: {heroe.name} </h1>
              <button
                className="btn btn-outline-info"
                onClick={() => history.goBack()}
              >
                Back
              </button>
              <hr />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-12 col-md-6">
              <img
                className="card-datos img-heroe-id"
                src={heroe.image.url}
                alt={heroe.name}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <div className="card card-datos">
                <div className="card-body">
                  <h5 className="card-title">Data</h5>
                  <hr />
                  <h6 className="card-subtitle mb-2 text-muted">
                    {heroe.biography["full-name"]}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">Powerstats</h6>
                  <ul>
                    <li>
                      <b>Intelligence: {heroe.powerstats.intelligence}</b>
                    </li>
                    <li>
                      <b>Strength: {heroe.powerstats.strength}</b>
                    </li>
                    <li>
                      <b>Speed: {heroe.powerstats.speed} </b>
                    </li>
                    <li>
                      <b>Durability: {heroe.powerstats.durability}</b>
                    </li>
                    <li>
                      <b>Power: {heroe.powerstats.power}</b>
                    </li>
                    <li>
                      <b>Combat: {heroe.powerstats.combat} </b>
                    </li>
                  </ul>
                  <h6 className="card-subtitle mb-2 text-muted">
                    First appearance
                  </h6>
                  <h6>{heroe.biography["first-appearance"]} </h6>
                  <h6 className="card-subtitle mb-2 text-muted">Connections</h6>
                  <p>{heroe.connections["group-affiliation"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroeScreen;
