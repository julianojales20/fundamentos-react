import React from "react";

export default (props) => {
  return (
    <div>
      <span>{props.nome} </span>
      <span>{props.idade} Anos </span>
      <span>{props.nerd ? "Nerd" : "Não é Nerd"}!</span>
    </div>
  );
};
