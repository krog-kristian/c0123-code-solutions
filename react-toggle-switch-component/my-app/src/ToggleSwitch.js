import './ToggleSwitch.css'
import { useState } from 'react'

export default function ToggleSwitch () {
  const [toggle, setToggle] = useState(true)

  function handleClick() {
    setToggle(!toggle)
  }
  return (
    <div>
    <button className={toggle ? 'Switch-off' : 'Switch-on'} onClick={() => handleClick()}><i className={toggle ? 'Left' : 'Right'}>{toggle ? '🔕' : '🔔' }</i></button>
    <label>{toggle ? 'Off' : 'On'}</label>
    </div>
  )
}
