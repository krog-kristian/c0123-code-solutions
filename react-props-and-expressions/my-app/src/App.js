import logo from './logo.svg';
import './App.css';
import MyButton from './Btn-component';
import './Btn-component.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {MyButton('I', 'Btn-green Btn-standard')}
        {MyButton('know', 'Btn-red Btn-standard')}
        {MyButton('React!', 'Btn-blue Btn-standard')}
      </header>
    </div>
  );
}

export default App;
