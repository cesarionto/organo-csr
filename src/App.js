import { useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  };
  return (
    <>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
    </>
  );
}

export default App;
