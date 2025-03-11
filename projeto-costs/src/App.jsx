import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Angolan"

  return (
    <div className="App">

      <SayMyName nome="Lorenzo" />
      <SayMyName nome="Caio" />
      <SayMyName nome={nome} />

      <Pessoa nome="Lorenzo" idade="20" profissao="Progamador" foto="https://placehold.co/250" />

    </div>
  );

}

export default App;
