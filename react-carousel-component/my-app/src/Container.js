import { useState, useEffect } from 'react';
import './Container.css'

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 */
export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrent((current + 1) % items.length)
    }, 3000);
    return () => clearInterval(timerID)
  } )

  function toggleBackground(i) {
    setCurrent(i)
  }

  function increase() {
    setCurrent((current + 1) % items.length)
  }

  function decrease() {
    setCurrent(((current - 1) + items.length) % items.length)
  }

  return (
    <div className='row'>
      <div className='col-1-6'>
        <Button text="Prev" onClick={decrease}/>
      </div>
      <div className='col-2-3'>
        <div className='card'><img src={items[current]} alt='A pokemon.' /></div>
        <Buttons count={items.length} current={current} onClick={toggleBackground} />
      </div>
      <div className='col-1-6'>
        <Button text="Next" onClick={increase} />
      </div>
    </div>
  );
}

/**
 * A button that toggles its color between white and lightblue.
 */
function Button({ text, backgroundColor = 'white', onClick }) {
  return <button onClick={() => onClick()} style={{ backgroundColor: backgroundColor }}>{text}</button>;
}

/**
 * An array of buttons.
 */
function Buttons({ count, current, onClick }) {

  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        key={i}
        text={i}
        onClick={() => onClick(i)}
        backgroundColor={i === current ? 'lightblue' : undefined} />)
  }
  return <div>{buttons}</div>;
}
