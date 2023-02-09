var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', taskCheck);

function taskCheck(event) {
  console.log('target:', event.target);
  console.log('target tag:', event.target.tagName);
  if (event.target.matches('button')) {
    var ancestor = event.target.closest('.task-list-item');
    console.log('target parent:', ancestor);
    ancestor.remove();
  }
}
