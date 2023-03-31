import { useState } from 'react'
import './Hamburger.css'
export default function Hamburger({ items, title }) {
  const [open, setOpen] = useState(false)
  const [header, setHeader] = useState(0)

  function handleClick(index) {
    setOpen(!open)
    setHeader(index)
  }
  const hamburgerOpen = open ? 'container' : 'hidden'
  const openAnimation = open ? 'bar' : ''
  const hamburgerButton = open ? 'hidden' : 'hamburger-icon'

  return (
    <>
      <button className={hamburgerButton} onClick={() => setOpen(!open)}>🍔</button>
      <h1>{items[header]}</h1>
    <div className={hamburgerOpen}>
      <div className={openAnimation}>
        <h3>{title}</h3>
        <MenuItems items={items} onClick={handleClick}/>
      </div>
    </div>
    </>
  )
}

function MenuItems({ items, onClick}) {
  const menu = items.map((item, index) => <button className='menu-button' key={index} onClick={() => onClick(index)}>{item}</button>)
  return <div className='fullscreen'>{menu}</div>
}
