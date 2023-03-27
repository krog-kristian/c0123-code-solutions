import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{ color: 'blue', padding: '1rem', backgroundColor: 'red', fontWeight: 600, fontSize: '4rem' }}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
