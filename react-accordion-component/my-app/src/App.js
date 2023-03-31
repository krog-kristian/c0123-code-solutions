import './App.css';
import Accordion from './Accordion';

const articles = [
  { title: 'Pokemon', text: 'Pokemon are fictious creatures' },
  { title: 'Digimon', text: 'Digital monsters in a digital world.' },
  { title: 'Stargate', text: 'Comical military sci-fi show.' },
  { title: 'Lord of The Rings', text: 'Book set in Middle Earth detailing the events of the one ring.' },
]

function App() {
  return (
    <div className="App">
      <Accordion articles={articles} />
    </div>
  );
}

export default App;
