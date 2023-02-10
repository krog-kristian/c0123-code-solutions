/* exported todos */

var todos = [];
var previousTodos = localStorage.getItem('javascript-local-storage');
// console.log('retrieving todos', previousTodos);
if (previousTodos !== null) {
  todos = JSON.parse(previousTodos);
}
// if statement helpes prevent corrupted data
window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
