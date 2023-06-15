import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  // desestruturando pra consumir aqui na Home
  // o valor do contexto compartilhado em CounterContext.js
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Home;
