import './Botao.css'

const Botao = (props) => {
    return (
        <button className="botao">
            {props.label}
        </button>
    );
}

export default Botao;