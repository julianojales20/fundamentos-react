import "./TabelaProdutos.css";
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr className={i % 2 == 0 ? "Par" : "Impar"} key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
