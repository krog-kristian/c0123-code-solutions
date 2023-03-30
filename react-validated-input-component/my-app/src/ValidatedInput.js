import { useState } from "react";

export default function ValidatedInput() {
  const [pass, setPass] = useState('');
  const [invalid, setInvalid] = useState(true)
  const [text, setText] = useState('Password is required.')
  const [icon, setIcon] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Controlled', { pass } )
  }

  function handlePassword(e)  {
    setPass(e.target.value.trim().replaceAll(' ', ''));
    setIcon('❌')
    if (e.target.value.length === 0) {
      setText('Password is required.')
      setIcon('❌')
    }
    if (e.target.value.length < 8 && e.target.value.length > 0) {
    setText('Password must be 8 Characters long')
    } else if (e.target.value.length >= 8) {
    setText('')
    setIcon('✅')
  }
  }

  return (
    <form id="login-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Password:
        <input name="password" type="password" value={pass} onChange={handlePassword} onFocus={() => setInvalid(false)}></input>
        <i>{icon}</i>
      </label>
      <p style={{ color: invalid ? 'white' : 'red' }}>{text}</p>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}
