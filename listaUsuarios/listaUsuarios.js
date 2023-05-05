// function Estudiante (DNI, Nombre, Apellido, usuario, contraseña, foto, direccion, telefono, tipo_usuario, activo){
//     this.DNI = DNI;
//     this.Nombre = Nombre;
//     this.Apellido = Apellido;
//     this.usuario = usuario;
//     this.contraseña = contraseña;
//     this.foto = foto;
//     this.direccion = direccion;
//     this.telefono = telefono;
//     this.tipo_usuario = tipo_usuario;
//     this.activo = activo;
// }

// const Aaron = new Estudiante("123456789X", "Aaron", "Zaru", "AaronZaru", "contraseña_segura", "", "calleInventada01", "666555444", "admin", true);
// const Maria = new Estudiante("123456789Y", "Maria", "Gomez", "MariaGomez", "contraseña_segura", "", "calleInventada02", "666999888", "user", false);
// const Jose = new Estudiante("123456789Z", "Jose", "Martinez", "JoseMartinez", "contraseña_segura", "", "calleInventada03", "666333222", "user", false);

// console.log(Aaron)


  // const Aaron = {
  //   "DNI": "123456789X",
  //   "Nombre": "Aaron",
  //   "Apellido": "Zaru",
  //   "usuario": "AaronZaru",
  //   "contraseña": "contraseña_segura",
  //   "foto": "",
  //   "direccion": "calleInventada01",
  //   "telefono": "666555444",
  //   "tipo_usuario": "admin",
  //   "activo": true
  // };
  
  // const Maria = {
  //   "DNI": "123456789Y",
  //   "Nombre": "Maria",
  //   "Apellido": "Gomez",
  //   "usuario": "MariaGomez",
  //   "contraseña": "contraseña_segura",
  //   "foto": "",
  //   "direccion": "calleInventada02",
  //   "telefono": "666999888",
  //   "tipo_usuario": "user",
  //   "activo": false
  // };
  
  // const Jose = {
  //   "DNI": "123456789Z",
  //   "Nombre": "Jose",
  //   "Apellido": "Martinez",
  //   "usuario": "JoseMartinez",
  //   "contraseña": "contraseña_segura",
  //   "foto": "",
  //   "direccion": "calleInventada03",
  //   "telefono": "666333222",
  //   "tipo_usuario": "user",
  //   "activo": false
  // };
  
  // console.log(Aaron);
  
//--------------------------------------------------------------------------------------------------------------//

  // Objeto JSON con los datos del estudiante
const estudiante = {
  "DNI": "123456789X",
  "Nombre": "Aaron",
  "Apellido": "Zaru",
  "usuario": "AaronZaru",
  "contraseña": "contraseña_segura",
  "foto": "",
  "direccion": "calleInventada01",
  "telefono": "666555444",
  "tipo_usuario": "admin",
  "activo": true
};

// Seleccionar el elemento HTML con el id "datos-estudiante"
const datosEstudiante = document.getElementById("datos-estudiante");

// Establecer el contenido del elemento con los datos del estudiante
datosEstudiante.innerHTML = `
  <p>DNI: ${estudiante.DNI}</p>
  <p>Nombre: ${estudiante.Nombre}</p>
  <p>Apellido: ${estudiante.Apellido}</p>
  <p>Usuario: ${estudiante.usuario}</p>
  <p>Contraseña: ${estudiante.contraseña}</p>
  <p>Dirección: ${estudiante.direccion}</p>
  <p>Teléfono: ${estudiante.telefono}</p>
  <p>Tipo de usuario: ${estudiante.tipo_usuario}</p>
  <p>Activo: ${estudiante.activo}</p>
`;
