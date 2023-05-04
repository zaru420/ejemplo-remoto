window.addEventListener('load', function () {
  var users = [
    { name: 'Juan', age: 25, email: 'juan@example.com' },
    { name: 'Maria', age: 32, email: 'maria@example.com' },
    { name: 'Pedro', age: 18, email: 'pedro@example.com' },
    { name: 'Ana', age: 42, email: 'ana@example.com' },
    { name: 'Luis', age: 37, email: 'luis@example.com' }
  ];

  var userList = document.getElementById('user-list');

  for (var i = 0; i < users.length; i++) {
      var user = users[i];
      var li = document.createElement('li');
      li.innerHTML = '<b>Nombre:</b> ' + user.name + '<br>' +
                    '<b>Edad:</b> ' + user.age + '<br>' +
                    '<b>Email:</b> ' + user.email;
      userList.appendChild(li);
  }
})