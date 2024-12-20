import React from "react";

export default (props) => {
  return (
    <div>
      <div>
        {props.nome} <strong>{props.sobrenome}</strong>
      </div>
    </div>
  );
};
