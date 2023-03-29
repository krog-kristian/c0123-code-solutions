export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = e.target
    const form = new FormData(data);
    const newUser = Object.fromEntries(form.entries()).username;
    const newPass = Object.fromEntries(form.entries()).username
    console.log('Uncontrolled', { newUser, newPass })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Username:
        <input name="username" type="text"></input>
      </label>
      <br />
      <label>
        Password:
        <input name="password" type="password"></input>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}
