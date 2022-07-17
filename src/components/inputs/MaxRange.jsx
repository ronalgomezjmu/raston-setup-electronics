import React from "react";

function MaxRange({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="max-wave">
        Max Range
      </label>
      <input
        id="max-wave"
        type="number"
        defaultValue={12500}
        min={400}
        max={12500}
        onChange={(e) =>
          setParams({ ...params, max_wavenumber_range: e.target.value })
        }
      ></input>
    </div>
  );
}

export default MaxRange;
