import "./Input.css";
import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input value={valor} type="text" onChange={quandoMudar} />
        <input value={valor} readOnly />
        <input value={undefined} />
      </div>
    </div>
  );
};
