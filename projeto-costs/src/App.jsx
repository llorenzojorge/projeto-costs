import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <Frase />
      <Frase />
      
      <Pessoa nome="Lorenzo" idade="20" profissao="Progamador" foto="https://placehold.co/250" />

      <List />

    </div>
  );

}

export default App;
