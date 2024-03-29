import logo from './logo.svg';
import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RegistrationFormUncontrolled />
        <RegistrationFormControlled />
      </header>
    </div>
  );
}

export default App;
