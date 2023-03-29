import logo from './logo.svg';
import './App.css';
import HotButton from './HotButton';

function App() {

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
      <HotButton text='Hot Button' />
      </div>
    </div>
  );
}

export default App;
