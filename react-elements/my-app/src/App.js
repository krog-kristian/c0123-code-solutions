import logo from './logo.svg';
import './App.css';

const appNum = Math.round(Math.random() * 10)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kristian's #{appNum} React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React @ Learning Fuze
        </a>
      </header>
    </div>
  );
}

export default App;
