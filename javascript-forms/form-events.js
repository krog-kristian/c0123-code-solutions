function handleFocus(event) {
  console.log('focus fired!');
  console.log('Focus target name:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur in effect!');
  console.log('target of blur:', event.target.name);
}

function handleInput(event) {
  console.log('Input received!');
  console.log('Input target:', event.target.name);
}

var $nameInput = document.querySelector('#user-name');
console.log('query name', $nameInput);

var $emailInput = document.querySelector('#user-email');
console.log('user email selector:', $emailInput);

var $textArea = document.querySelector('#user-message');
console.log('text area select:', $textArea);

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
