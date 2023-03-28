import './CustomButton.css'

export default function CustomButton({ text, classes, onCustomClick}) {
  const allClasses = `Btn-primary, ${classes}`
return (
  <button className={allClasses} onClick={() => onCustomClick(text)}>
    {text}
  </button>
)
}
