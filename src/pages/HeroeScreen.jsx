import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getHeroeId } from "../helpers/heroesFetch";

const HeroeScreen = () => {
  const { id } = useParams();
  const [heroe, setHeroe] = useState({
    datos: {},
    loading: true,
  });

  useEffect(() => {
    getHeroeId(id).then((respuesta) => {
      setHeroe({
        datos: respuesta,
        loading: false,
      });
    });
  }, [id]);

  if (heroe.loading) {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h1 className="text-white text-center">Cargando...</h1>
            <hr />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-white">Heroe: {heroe.datos.name} </h1>
          <hr />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-12 col-md-6">
          <img
            className="card-datos img-heroe-id"
            src={heroe.datos.image.url}
            alt={heroe.datos.name}
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="card card-datos">
            <div className="card-body">
              <h5 className="card-title">Data</h5>
              <hr />
              <h6 className="card-subtitle mb-2 text-muted">
                {heroe.datos.biography["full-name"]}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">Powerstats</h6>
              <ul>
                <li>
                  <b>Intelligence: {heroe.datos.powerstats.intelligence}</b>
                </li>
                <li>
                  <b>Strength: {heroe.datos.powerstats.strength}</b>
                </li>
                <li>
                  <b>Speed: {heroe.datos.powerstats.speed}</b>
                </li>
                <li>
                  <b>Durability: {heroe.datos.powerstats.durability}</b>
                </li>
                <li>
                  <b>Power: {heroe.datos.powerstats.power}</b>
                </li>
                <li>
                  <b>Combat: {heroe.datos.powerstats.combat}</b>
                </li>
              </ul>
              <h6 className="card-subtitle mb-2 text-muted">
                First appearance
              </h6>
              <h6>{heroe.datos.biography["first-appearance"]}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Connections</h6>
              <p>{heroe.datos.connections["group-affiliation"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeScreen;
