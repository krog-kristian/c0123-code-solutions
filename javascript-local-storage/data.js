/* exported todos */

var todos = [];
var previousTodos = localStorage.getItem('javascript-local-storage');
// console.log('retrieving todos', previousTodos);
todos = JSON.parse(previousTodos);

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
