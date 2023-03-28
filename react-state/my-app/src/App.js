import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ToggleButton color='Red' text='Tiger' />
        <ToggleButton color='Blue' text='Fish' />
        <ToggleButton color='Green' text='Frog' />
      </header>
    </div>
  );
}

export default App;
