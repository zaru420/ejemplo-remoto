
window.addEventListener('load', function () {
	//el siguiente boton es con el desplegable:
	// Obtener el botón y el menú desplegable
	var dropdownBtn = document.querySelector(".dropdown-btn");
	console.log(dropdownBtn);
	var dropdownContent = document.querySelector(".dropdown-content");

	// Mostrar/ocultar el menú desplegable al hacer clic en el botón
	dropdownBtn.addEventListener("click", function() {
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});

	// Ocultar el menú desplegable cuando se hace clic fuera de él
	window.addEventListener("click", function(event) {
		if (!event.target.matches(".dropdown-btn")) {
			dropdownContent.style.display = "none";
		}
	});
	 
})