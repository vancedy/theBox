import logo from './logo.svg';
import './App.css';
import TheForm from './TheForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <TheForm/>
  
      </header>
    </div>
  );
}


export default App;
