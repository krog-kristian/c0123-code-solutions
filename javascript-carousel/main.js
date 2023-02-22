var imageLinks = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $img = document.querySelector('img');
var $selectors = document.querySelectorAll('#selector i');
var $selector = document.querySelector('#selector');
var $leftSelect = document.querySelector('.fa-chevron-left');
var $rightSelect = document.querySelector('.fa-chevron-right');
var previousImg = 0;
var currentImg = 1;
var nInterval = null;

$selector.addEventListener('click', choose);

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
    currentImg = 5;
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
  if (currentImg === 5) {
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
