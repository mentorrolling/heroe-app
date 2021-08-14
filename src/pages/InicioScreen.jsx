import React, { useState } from "react";

import HeroesTable from "../components/HeroesTable";

import { getHeroes } from "../helpers/heroesFetch";

const InicioScreen = () => {
  const [heroes, setHeroes] = useState({
    response: "",
    datos: [],
    loading: false,
  });

  const [inputValue, setInputValue] = useState("");

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const submitHeroes = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      setHeroes({
        ...heroes,
        loading: true,
      });

      //peticion http
      getHeroes(inputValue).then((respuesta) => {
        // console.log(respuesta);
        setHeroes({
          response: respuesta.response,
          datos: respuesta.results,
          loading: false,
        });
      });
      setInputValue("");
    }
  };

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
          <form onSubmit={submitHeroes}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={inputValue}
                onChange={changeInput}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col col-md-8 offset-md-2">
          {heroes.loading ? (
            <h3 className="text-white text-center">Cargando...</h3>
          ) : (
            <HeroesTable heroes={heroes} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InicioScreen;
