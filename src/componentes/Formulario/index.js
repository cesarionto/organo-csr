import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

const Formulario = () => {

  const times = ['Programação', 'Frontend', 'Data Science', 'DevOps', 'Ux e Design', 'Mobile', 'Inovacao e Gestao'];

  return (
    <section className="formulario">
      <form>
        <h1>Preencha os dados para criar o card do colaborador</h1>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens= {times} />
        <Botao label="Criar card"/>
      </form>
    </section>
  );
};

export default Formulario;
