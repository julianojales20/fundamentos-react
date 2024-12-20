/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./Familia";
import FamiliaMembro from "./FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import MegaSena from "./components/megaSena/MegaSena";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#13 - Mega Sena" color="#b9006e">
        <MegaSena />
      </Card>

      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10} />
      </Card>
      <Card titulo="#11 - Componente Controlado" color="#e45f56">
        <Input />
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8bad39">
        <IndiretaPai />
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#59323c">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={22} />
        <UsuarioInfo usuario={{ nome: "Juliano" }} />
        <UsuarioInfo />
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#3a9ad9">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parametro" color="#E8B71A">
        <ComParametro
          titulo="Primeira nota"
          aluno="Pedro"
          nota={9.3}
          color="#080"
        />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
