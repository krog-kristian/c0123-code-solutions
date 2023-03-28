import './MyButton.css'

export default function MyButton( { text, classes }) {
  return (
    <button className={classes}>
      {text}
    </button>
  )
}
