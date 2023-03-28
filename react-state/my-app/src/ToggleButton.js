import { useState } from 'react'


export default function ToggleButton( { text, color} ) {

  const [isClicked, setIsClick] = useState(false)

  function handleClick() {
    setIsClick(!isClicked)
    console.log(isClicked)
  }

  return (
    <button style={{ backgroundColor: (isClicked ? 'white' : color ) }} onClick={handleClick}>
     {text}
    </button>
  )
}
