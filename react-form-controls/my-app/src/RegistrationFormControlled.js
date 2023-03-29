import { useState } from "react";

export default function RegistrationFormControlled() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Controlled', { user, pass })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Username:
        <input name="username" type="text" value={user} onChange={e => setUser(e.target.value)}></input>
      </label>
      <br />
      <label>
        Password:
        <input name="password" type="password" value={pass} onChange={e => setPass(e.target.value)}></input>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}
