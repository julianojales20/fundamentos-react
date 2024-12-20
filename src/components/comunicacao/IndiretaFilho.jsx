import React from "react";

export default (props) => {
  const cb = props.quandoClicar;

  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <button
        onClick={(e) => {
          cb("João", gerarIdade(), gerarNerd());
        }}
      >
        Forncer Informações
      </button>
    </div>
  );
};
