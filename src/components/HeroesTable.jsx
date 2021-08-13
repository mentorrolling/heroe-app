import React from "react";

const HeroesTable = () => {
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default HeroesTable;
