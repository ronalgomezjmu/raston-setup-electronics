import React from "react";

function PhaseCorrection ({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="PhaseCorrection">Phase Correction</label>
      <select
        id="PhaseCorrection"
        defaultValue={params.database}
        onChange={(e) => setParams({ ...params, database: e.target.value })}
      >
        <option value="Mertz">Mertz</option>
        <option value="PowerSpectrum">Power Spectrum</option>
      </select>
    </div>
  );
}

export default PhaseCorrection;