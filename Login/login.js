window.addEventListener('load', function () {
  const enlaces = document.querySelectorAll('a');
  
  enlaces.forEach((enlace) => {
    enlace.innerHTML += '<button type="button" class="btn btn-info">Info</button>';
  });

});


