import './Accordion.css'
import { useState } from 'react'
/**
 * Creates and accordion component
 * Accepts an array of objects containing title and text
 */
export default function Accordion({ articles, }) {
  const [current, setCurrent] = useState()
  function handleCustomClick(i) {
    if (i !== current) {
    setCurrent(i)
    } else {
      setCurrent()
    }
  }

  return (
    articles.map((article, index) => {
    return (<>
      <div className="headers" key={index} onClick={() => handleCustomClick(index)}>
        <h3>{article.title}</h3>
        <button>{current === index ? 'Hide' : 'Show'}</button>
      </div>
      {current === index && <Paragraph text={article.text} />}
    </>)
})
  )
}

function Paragraph({ text }) {
  return <p>{text}</p>
}
