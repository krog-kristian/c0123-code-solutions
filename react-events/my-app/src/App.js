import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';



function App() {
  const handleCustomClick = (text) => {
  alert(text)};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton text="This is green." classes="Btn-green" onCustomClick={handleCustomClick}/>
        <CustomButton text="This is red." classes="Btn-red" onCustomClick={handleCustomClick} />
        <CustomButton text="This is blue." classes="Btn-blue" onCustomClick={handleCustomClick} />
      </header>
    </div>
  );
}

export default App;
