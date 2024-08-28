function Evento({ numero }) {

    function meuEvento() {
        console.log(`Opa, você disparou o ${numero}`)
    }

    return (
        <div>
            <p>Clique para disparar</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento