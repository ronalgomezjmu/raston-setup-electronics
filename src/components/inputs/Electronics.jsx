import React from "react";

function Display({ params, setParams }) {
  return (
    <div className="display">
      <label htmlFor="display">
    
      </label>
      <input
        id="display"
        type="text"
        defaultValue={""}
        min={1}
        max={1000}
        onChange={(e) =>
          setParams({ ...params, min_wavelength_range: e.target.value })
        }
      ></input>
    </div>
  );
}

function Table(params, setParams) {
    return (
      <div className="Table">
        <table>
          <tr>
            <th>Electronics</th>
          </tr>
          <tr>
            <td>Source</td>
            <Display params={params} setParams={setParams} />
          </tr>
          <tr>
            <td>Beamsplitter</td>
            <Display params={params} setParams={setParams} />
          </tr>
          <tr>
            <td>Gas</td>
            <Display params={params} setParams={setParams} />
          </tr>
          <tr>
            <td>Detector</td>
            <Display params={params} setParams={setParams} />
          </tr>
          <tr>
            <td>OPD</td>
            <Display params={params} setParams={setParams} />
          </tr>
          <tr>
            <td>Number of Scans</td>
            <Display params={params} setParams={setParams} />
          </tr>
          <tr>
            <td>Range</td>
            <Display params={params} setParams={setParams} />
          </tr>
          <tr>
            <td>Resolution</td>
            <Display params={params} setParams={setParams} />
          </tr>
        </table>
      </div>
    );
  }

export default Table;