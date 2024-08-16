import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Lorenzo'

  return (
    <div className="App">
      <h1>Hello React World</h1>
      <p>Pronto pra codar o Costs?</p>
      <p>Vamos nessa, {name.toUpperCase()}?</p>
      <HelloWorld />
    </div>
  );
}

export default App;
