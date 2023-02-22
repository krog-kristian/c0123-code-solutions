var $title = document.querySelector('.countdown-display');

function changeTitle(title1, title2, title3, title4) {
  if ($title.textContent === '4') {
    $title.textContent = title1;
  } else if ($title.textContent === title1) {
    $title.textContent = title2;
  } else if ($title.textContent === title2) {
    $title.textContent = title3;
  } else if ($title.textContent === title3) {
    $title.textContent = title4;
    clearInterval(interval);
    interval = null;
  }
}

var interval;

window.addEventListener('DOMContentLoaded', function () {
  if (!interval) {
    interval = setInterval(changeTitle, 1000, '3', '2', '1', '~Earth Beeeelooowww Us~');
  }
});
