import React, { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work correctly!
 */
export default function Container({ items }) {
  const [current, setCurrent] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');

  function toggleBackground(i) {
    setCurrent(i)
    setBackgroundColor(backgroundColor === 'lightblue' ? 'white' : 'lightblue');
  }
  function increase() {
    setCurrent(current + 1)
    if ((current + 1) === items.length) {
      setCurrent(0)
    }
  }
  function decrease() {
    setCurrent(current - 1)
    if (current === 0) {
      setCurrent(items.length - 1)
    }
  }
  return (
    <div>
      <div>{items[current]}</div>
      <div>
        <Button text="Prev" onClick={decrease}/>
        <Buttons count={items.length} current={current} onClick={toggleBackground} />
        <Button text="Next" onClick={increase} />
      </div>
    </div>
  );
}

/**
 * A button that toggles its color between white and lightblue.
 * TODO: Remove the toggle behavior and make the background color a prop, default white.
 * TODO: When clicked, change the current item in the Container.
 */
function Button({ text, backgroundColor = 'white', onClick }) {
  return <button onClick={() => onClick()} style={{ backgroundColor: backgroundColor }}>{text}</button>;
}

/**
 * An array of buttons.
 * TODO: Highlight only the active button lightblue.
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
