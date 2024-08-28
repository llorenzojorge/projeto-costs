function Evento({ numero }) {

    function meuEvento() {
        console.log('Opa, você me disparou!')
    }

    return (
        <div>
            <p>Clique para disparar</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento