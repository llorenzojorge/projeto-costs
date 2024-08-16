import './App.css';

function App() {
  const name = 'Lorenzo'

  return (
    <div className="App">
      <h1>Hello React World</h1>
      <p>Pronto pra codar o Costs?</p>
      <p>Vamos nessa, {name.toUpperCase()}?</p>
    </div>
  );
}

export default App;
