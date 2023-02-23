var $userList = document.querySelector('#user-list');

var users = new XMLHttpRequest();
users.open('GET', 'https://jsonplaceholder.typicode.com/users');
users.responseType = 'json';
users.addEventListener('load', function () {
  console.log('status', users.status);
  console.log('users.respones', users.response);
  for (var i = 0; i < users.response.length; i++) {
    var $userItem = document.createElement('li');
    $userItem.textContent = users.response[i].name;
    $userList.appendChild($userItem);
  }
});
users.send();
