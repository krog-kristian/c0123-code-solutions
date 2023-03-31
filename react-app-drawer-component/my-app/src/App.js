
import './App.css';
import Hamburger from './Hamburger';

const menuItems = ['Home', 'About', 'Service', 'Help', 'Legal Stuff']

function App() {
  return (
    <div className="App">
     <Hamburger items={menuItems} title={'Menu'}/>
    </div>
  );
}

export default App;
