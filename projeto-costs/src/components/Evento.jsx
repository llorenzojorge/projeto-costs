function Evento() {

    function meuEvento() {
        window.prompt('Teste')
    }

    return (
        <div>
            <p>Clique para disparar um evento!</p>
            <button onClick={meuEvento}>Clicar</button>
        </div>
    )

}

export default Evento