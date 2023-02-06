console.log('Hello World!');

var title = document.querySelector('h1');

console.log('targeting h1 element:', title);

console.dir(title);

var itemExplanation = document.querySelector('#explanation');

console.log('item with id explanation:', itemExplanation);

console.dir(itemExplanation);

var queryByClass = document.querySelector('.hint');

console.log('targeted by class hint:', queryByClass);

console.dir(queryByClass);

var nodeListOfP = document.querySelectorAll('p');

console.log('node list of p element:', nodeListOfP);

var allClass = document.querySelectorAll('.example-link');

console.log('All of class example-link:', allClass);
