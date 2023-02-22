var $title = document.querySelector('.countdown-display');
var countdown = Number($title.textContent);

function changeTitle() {
  if (countdown === 0) {
    $title.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
    interval = false;
  } else {
    $title.textContent = countdown;
    countdown--;
  }
}

var interval = true;

if (interval) {
  interval = setInterval(changeTitle, 1000);
}
