import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Lorenzo'

  return (
    <div className="App">
      <h1>Hello React World</h1>
      <p>Pronto pra codar o Costs?</p>
      <p>Vamos nessa, {name.toUpperCase()}?</p>
      <HelloWorld />
      <SayMyName nome="Maria"/>
      <SayMyName nome="Leandro"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Lorenzo" idade="19" profissao="Web Developer"/>
    </div>
  );
}

export default App;
