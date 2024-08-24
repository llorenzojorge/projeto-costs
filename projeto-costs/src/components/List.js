import Item from "./Item"

function List() {
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Honda" ano_lancamento={1980}/>
            <Item marca="Yamaha" ano_lancamento={1978}/>
            <Item marca="Kawasaki" ano_lancamento={1986}/>
        </ul>
        </>
    )
}

export default List