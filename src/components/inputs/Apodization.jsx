import React from "react";

function Apodization ({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Apodization">Apodization</label>
      <select
        id="Apodization"
        defaultValue={params.database}
        onChange={(e) => setParams({ ...params, database: e.target.value })}
      >
        <option value="Triangular">Triangular</option>
        <option value="Boxcar">Boxcar</option>
      </select>
    </div>
  );
}

export default Apodization;