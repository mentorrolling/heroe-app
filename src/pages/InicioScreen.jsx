import React, { useState, useEffect } from "react";
import HeroesTable from "../components/HeroesTable";
import { getHeroes } from "../helpers/heroeFetch";
const InicioScreen = () => {
  const [heroes, setHeroes] = useState({
    response: "",
    datos: [],
    loading: false,
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setHeroes({
      response: "",
      datos: JSON.parse(localStorage.getItem("heroes")) || [],
      loading: false,
    });
  }, []);

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length > 3) {
      setHeroes({
        ...heroes,
        loading: true,
      });

      getHeroes(inputValue).then((respuesta) => {
        const arrayHeroes = respuesta.results;
        setHeroes({
          response: respuesta.response,
          datos: respuesta.results,
          loading: false,
        });
        setInputValue("");
        localStorage.setItem("heroes", JSON.stringify(arrayHeroes));
      });
    }
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col">
          <h1 className="text-white text-center">Search Heroes</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={inputValue}
                onChange={changeInput}
                onClick={() => setHeroes({ ...heroes, datos: [] })}
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
