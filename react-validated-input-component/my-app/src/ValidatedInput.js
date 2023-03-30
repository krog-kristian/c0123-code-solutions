import { useState } from "react";

export default function ValidatedInput() {
  const [pass, setPass] = useState('');

  const icons = (icon) => <i>{icon ? '✅' : '❌'}</i>
  const warning = (text) => <p style={{ color: (pass === '') ? 'white' : 'red' }}>{text}</p>
  let element;
  let icon;

  if (!pass){
    element = warning('Password is required.')
  }
  if (pass.length < 8 && pass.length > 0){
    element = warning('Password must be 8 Characters long')
    icon = icons(false)
  }
  if (pass.length >= 8) {
    icon = icons(true)
  }
  return (
    <div>
      <label>
        Password:
        <input name="password" type="password" value={pass} onChange={(e) => setPass(e.target.value.trim())}></input>
        {icon}
      </label>
      {element}
    </div>
  )
}
