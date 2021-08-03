import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { buscarHeroeById } from "../helpers/HeroesFetch";
const HeroeScreen = () => {
  let { id } = useParams();
  const [heroe, setHeroe] = useState({
    datos: {},
    loading: true,
  });

  useEffect(() => {
    buscarHeroeById(id).then((respuesta) => {
      setHeroe({
        datos: respuesta,
        loading: false,
      });
    });
  }, [id]);

  if (heroe.datos.response === "error") {
    return <h3 className="text-white">{heroe.datos.error}</h3>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-white">Heroe: {heroe.datos.name}</h1>
          <hr />
        </div>
      </div>
      {heroe.loading ? (
        <h3 className="text-white text-center">Cargando...</h3>
      ) : (
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
                    <b>Intelligence:</b> {heroe.datos.powerstats.intelligence}
                  </li>
                  <li>
                    <b>Strength:</b> {heroe.datos.powerstats.strength}
                  </li>
                  <li>
                    <b>Speed:</b> {heroe.datos.powerstats.speed}
                  </li>
                  <li>
                    <b>Durability:</b> {heroe.datos.powerstats.durability}
                  </li>
                  <li>
                    <b>Power:</b> {heroe.datos.powerstats.power}
                  </li>
                  <li>
                    <b>Combat:</b> {heroe.datos.powerstats.combat}
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
      )}
    </div>
  );
};

export default HeroeScreen;
