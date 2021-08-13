import React from "react";

import { Link } from "react-router-dom";

const HeroesTable = ({ heroes }) => {
  const { datos, response } = heroes;
  if (response === "error" || datos.length === 0) {
    return (
      <h3 className="text-center text-white">No hay datos para mostrar</h3>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Alias</th>
            <th>Full name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {datos?.map((heroe) => (
            <tr key={heroe.id}>
              <td>
                <img
                  className="img-heroe"
                  src={heroe.image.url}
                  alt={heroe.name}
                />
              </td>
              <td>
                <Link className="text-white nav-link" to={`/heroe/${heroe.id}`}>
                  {heroe.name}
                </Link>
              </td>
              <td>{heroe.biography["full-name"]}</td>
              <td>{heroe.biography["publisher"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeroesTable;
