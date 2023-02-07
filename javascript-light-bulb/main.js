var $bulb = document.querySelector('.background > div');

var $background = document.querySelector('.background');

function lightSwitch(event) {
  if ($bulb.className === 'bulb-on') {
    $bulb.className = 'bulb-off';
    $background.className = 'background night';
  } else {
    $bulb.className = 'bulb-on';
    $background.className = 'background day';
  }
}

$bulb.addEventListener('click', lightSwitch);
