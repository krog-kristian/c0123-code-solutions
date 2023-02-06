function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $clickBtn = document.querySelector('.click-button');
// console.log('click button is:', $clickBtn);

$clickBtn.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $hoveredButton = document.querySelector('.hover-button');

$hoveredButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $doubleClicked = document.querySelector('.double-click-button');
// console.log('double click target:', $doubleClicked);

$doubleClicked.addEventListener('dblclick', handleDoubleClick);
