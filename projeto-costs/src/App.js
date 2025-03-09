import './App.css';

function App() {

  const name = 'Lorenzo'
  const newName = name.toUpperCase()

  const url = 'https://placehold.co/150'

  function soma(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h1>Entendendo o JSX</h1>
      <p>Olá, {name}</p>
      <p>Soma: {soma(5, 10)}</p>
      <img src={url} alt="Imagem de 150px"/>
    </div>
  );
}

export default App;
