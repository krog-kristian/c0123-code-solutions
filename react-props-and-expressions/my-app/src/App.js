import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyButton text="I" classes="Btn-green Btn-standard" />
        <MyButton text="know" classes="Btn-red Btn-standard" />
        <MyButton text="React!" classes="Btn-blue Btn-standard" />
      </header>
    </div>
  );
}

export default App;
