var $modalBtn = document.getElementById('modal');

var $noBtn = document.getElementById('no-btn');

var $fullscreen = document.querySelector('.fullscreen');

function popUp(event) {
  $fullscreen.id = '';
}

function popDown(event) {
  $fullscreen.id = 'hidden';
}

$modalBtn.addEventListener('click', popUp);

$noBtn.addEventListener('click', popDown);
