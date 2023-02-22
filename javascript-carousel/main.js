var imageLinks = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'];
var $img = document.querySelector('img');
var $selectors = document.querySelectorAll('#selector i');
var $selector = document.querySelector('#selector');
var $leftSelect = document.querySelector('.fa-chevron-left');
var $rightSelect = document.querySelector('.fa-chevron-right');
var previousImg = 0;
var currentImg = 1;
var nInterval = null;

$selector.addEventListener('click', choose);

window.addEventListener('DOMContentLoaded', function () {
  var $defaultIconDiv = document.createElement('div');
  var $defaultIcon = document.createElement('i');
  $defaultIcon.setAttribute('class', 'fa-sharp fa-regular fa-circle-dot');
  $defaultIconDiv.appendChild($defaultIcon);
  $selector.appendChild($defaultIconDiv);
  for (var i = 0; i < imageLinks.length - 1; i++) {
    var $iconDiv = document.createElement('div');
    var $icon = document.createElement('i');
    $icon.setAttribute('class', 'fa-sharp fa-solid fa-circle-dot');
    $iconDiv.appendChild($icon);
    $selector.appendChild($icon);
  }
  $selectors = document.querySelectorAll('#selector i');
}
);

function choose(event) {
  for (var i = 0; i < $selectors.length; i++) {
    if ($selectors[i] === event.target) {
      if (i + 1 === currentImg) {
        return;
      }
      previousImg = currentImg;
      currentImg = i + 1;
      switchItem();
    }
  }
  clearInterval(nInterval);
  nInterval = setInterval(nextImage, 3000);
}

$leftSelect.addEventListener('click', function () {
  if (currentImg === 1) {
    previousImg = currentImg;
    currentImg = imageLinks.length;
    switchItem();
  } else {
    previousImg = currentImg;
    currentImg--;
    switchItem();
  }
  clearInterval(nInterval);
  nInterval = setInterval(nextImage, 3000);
});

$rightSelect.addEventListener('click', nextImage);

function nextImage() {
  if (currentImg === imageLinks.length) {
    previousImg = currentImg;
    currentImg = 1;
    switchItem();
  } else {
    previousImg = currentImg;
    currentImg++;
    switchItem();
  }
  clearInterval(nInterval);
  nInterval = setInterval(nextImage, 3000);
}

nInterval = setInterval(nextImage, 3000);

function switchItem() {
  $img.setAttribute('src', imageLinks[currentImg - 1]);
  $selectors[currentImg - 1].classList.remove('fa-solid');
  $selectors[currentImg - 1].classList.add('fa-regular');
  $selectors[previousImg - 1].classList.remove('fa-regular');
  $selectors[previousImg - 1].classList.add('fa-solid');
}
