var $contactForm = document.forms[0];
console.log('button target:', $contactForm);

function submitData(event) {
  event.preventDefault();
  console.log('submit fired');
  var submission = {};
  submission.name = $contactForm.elements.name.value;
  submission.email = $contactForm.elements.email.value;
  submission.message = $contactForm.elements.message.value;
  console.log('Form Info:', submission);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submitData);
