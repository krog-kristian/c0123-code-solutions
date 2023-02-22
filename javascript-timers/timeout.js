var $title = document.querySelector('.message');

function delayedTitle() {
  $title.textContent = 'Hello There';
}

window.addEventListener('DOMContentLoaded', setTimeout(delayedTitle, 2000));
