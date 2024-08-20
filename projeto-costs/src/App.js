import './App.css';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Maria"/>
      <SayMyName nome="Leandro"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Lorenzo" idade="19" profissao="Web Developer"/>
      <List />
    </div>
  );
}

export default App;
