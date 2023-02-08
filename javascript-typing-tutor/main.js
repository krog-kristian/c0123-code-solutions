/* alternate way would be to push correct letters pressed into a span styled
and if wrong make a new span that is red with the letter and when pressed right push
it into the green span deleting where it came from? more complicated and would require
string manipulation try this method later when we learn more. */

/* the attempt is to add the green or red class to the next span whether the key
down matches the string inside (case sensitive) add and remove the underlined id
onto the next span.
bonus question, count everytime key press does not match and display at end
second bonus prompt that clears all the green classes and resets.

 */

var $listOfSpans = document.querySelectorAll('span');

var $body = document.querySelector('body');

var count = 0;
var currentSpan = $listOfSpans[count].textContent;
$listOfSpans[count].id = 'underlined';

var $yesBtn = document.getElementById('yes-btn');
var $fullscreen = document.querySelector('.fullscreen');

var $accuracyText = document.querySelector('p.full-row');

var accuracyCount = $listOfSpans.length;

var accuracy = 0;

function typingTest(event) {
  currentSpan = $listOfSpans[count].textContent;
  if ((count + 1) === $listOfSpans.length && event.key === currentSpan) {
    $listOfSpans[count].className = 'green-text';
    $fullscreen.id = '';
    accuracy = ((accuracyCount / $listOfSpans.length) * 100);
    $accuracyText.textContent = 'Your accuracy: ' + accuracy + '%';
  } else if (event.key === currentSpan) {
    $listOfSpans[count].id = '';
    $listOfSpans[count].className = 'green-text';
    count += 1;
    $listOfSpans[count].id = 'underlined';
  } else {
    $listOfSpans[count].className = 'red-text';
    accuracyCount = (accuracyCount - 1);
  }
}

$body.addEventListener('keydown', typingTest);

function playAgain(event) {
  for (var i = 0; i < $listOfSpans.length; i++) {
    $listOfSpans[i].className = '';
  }
  $listOfSpans[count].id = '';
  count = 0;
  accuracy = 0;
  accuracyCount = $listOfSpans.length;
  $fullscreen.id = 'hidden';
  $listOfSpans[count].id = 'underlined';
}

$yesBtn.addEventListener('click', playAgain);
