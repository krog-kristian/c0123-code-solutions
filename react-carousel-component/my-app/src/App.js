import Container from './Container';
import './App.css';

const items = ["/images/001.png", "/images/004.png", "/images/007.png", "/images/025.png", "/images/039.png"];

export default function App() {
  return (
    <div className="App">
      <Container items={items} />
    </div>
  );
}
