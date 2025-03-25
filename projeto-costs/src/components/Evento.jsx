function Evento() {

    function meuEvento() {
        window.alert('Você clicou no botão!')
    }

    return (
        <div>
            <p>Clique para disparar um evento!</p>
            <button onClick={meuEvento}>Clicar</button>
        </div>
    )

}

export default Evento