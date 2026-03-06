let adminValidated = false;
let infoSesion = document.getElementById('infoUsuario');

function consultarDatosUsuario() {
     let usuario = localStorage.getItem('Usuario1');
     let contrasena = localStorage.getItem('password1');
    
     return [usuario, contrasena]
}

function usuarioEstaLogeado(infoUser) {
    return infoUser[0] && infoUser[1];
}

function mostrarDatosUsuarioLogueado() {
  const infoUsuario = consultarDatosUsuario();
  const usuarioLogueado = usuarioEstaLogeado(infoUsuario);

  if (usuarioLogueado) {
    infoSesion.style.display = 'block';
    infoSesion.innerHTML += `
    <h2> Usuario logueado </h2>
    <br>
    <h3> Usuario: ${infoUsuario[0]}</h3>
    <br>
    <button id='cerrar-sesion'> Cerrar sesión </button>`;
  } else {
    infoSesion.style.display = 'block';
    infoSesion.innerHTML= `<h2> HapiBank </h2>`;
  }
}

function ocultarDatosUsuarioNoLogueado() {
  infoSesion.innerHTML = '';
  infoSesion.style.display = 'none';
}

function crearUsuario() {
  let admin = prompt("Ingresa tu nombre: ");

  if (admin === "Andres") {
    let nombre1 = prompt("Ingrese el nombre de usuario: ");
    let password1 = prompt("Ingrese la contraseña: ");
    let saldoInicial1 = parseFloat(prompt("Ingrese el saldo inicial: "));

    localStorage.setItem("Usuario1", nombre1);
    localStorage.setItem("password1", password1);
    localStorage.setItem("saldoInicial1", saldoInicial1);
    localStorage.setItem("movimientos", "[]");

    adminValidated = true;
    alert(`Usuario "${nombre1}" registrado exitosamente`);
  } else {
    alert("No tienes permisos para esto");
    adminValidated = false;
  }
}

  mostrarDatosUsuarioLogueado();