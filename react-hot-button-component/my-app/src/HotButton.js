import { useState } from 'react'
export default function HotButton ({ text }) {

  const [count, setCounter] = useState(0)
  const [modifier, setModifier] = useState(1)


  function handleRender (){
    console.log('modifier=', modifier);
    setCounter(count + 1);
    if ((count + 1) % 3 === 0 && modifier > 0.1) {
      setModifier(modifier - 0.1);
    }
  }

  const hue = (300 * modifier);
  const lightness = (20 / modifier);
  const color = `hsl(${hue}deg 50% ${lightness}%)`
  return (
    <>
    <button style={{ backgroundColor: color }} onClick={handleRender}>
      {text}
    </button>
    <p>{count}</p>
    </>
  )
}
