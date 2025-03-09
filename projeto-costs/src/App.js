import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Lorenzo'
  const newName = name.toUpperCase()

  const url = 'https://placehold.co/150'

  function soma(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <HelloWorld />
    </div>
  );
}

export default App;
