import React from "react";

function MinRange({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="Range">
        Minimum Range
      </label>
      <input
        id="Range"
        type="number"
        defaultValue={400}
        min={400}
        max={12500}
        onChange={(e) =>
          setParams({ ...params, min_wavelength_range: e.target.value })
        }
      ></input>
    </div>
  );
}

export default MinRange;
