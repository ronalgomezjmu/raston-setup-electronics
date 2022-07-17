import React from "react";
import Database from "./inputs/Resolution";
import MinRange from "./inputs/MinRange";
import NumOfScans from "./inputs/NumOfScans";
import Beamsplitter from "./inputs/Beamsplitter";
import CellWin from "./inputs/CellWindows";
import Source from "./inputs/Source";
import Detector from "./inputs/Detector";
import ZeroFilling from "./inputs/ZeroFilling";
import Table from "./inputs/Electronics";
import MaxRange from "./inputs/MaxRange";

function Input({ params, setParams }) {
  return (
    <div id="fourm">
      <Database params={params} setParams={setParams} />

      <NumOfScans params={params} setParams={setParams} />

      <MinRange params={params} setParams={setParams} />

      <MaxRange params={params} setParams={setParams} />

      <Beamsplitter params={params} setParams={setParams} />

      <CellWin params={params} setParams={setParams} />

      <Source params={params} setParams={setParams} />

      <Detector params={params} setParams={setParams} />

      <ZeroFilling params={params} setParams={setParams} />

      <Table params={params} setParams={setParams} />
    </div> 
  );
}

export default Input; 
