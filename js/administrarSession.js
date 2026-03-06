let botonIngresar = document.getElementById('ingresar');
let botonRegistrar = document.getElementById("registrar");
botonIngresar.addEventListener("click", iniciarSesion);
botonRegistrar.addEventListener("click", crearUsuario);

function iniciarSesion() {
  let contrasenaGuardada = localStorage.getItem("password1");
  let saldoGuardado = localStorage.getItem("saldoInicial1");
  let usuarioGuardado = localStorage.getItem("Usuario1");
  
  if(usuarioGuardado && contrasenaGuardada) {
    infoSesion ? mostrarMenu() : mostrarDatosUsuarioLogueado();
  }

  // Verificar que haya un usuario registrado
  if (!contrasenaGuardada || !usuarioGuardado) {
    alert("No hay ningún usuario registrado aún. El administrador debe registrar un usuario primero.");
    return;
  }

  let usuarioIngresado = prompt("Ingrese su nombre de usuario: ");

  if (usuarioIngresado !== usuarioGuardado) {
    alert("¡Usuario no encontrado!");
    return;
  }

  let intentos = 0;
  let autenticado = false;

  while (intentos < 3 && !autenticado) {
    let contrasena = prompt("Ingrese su contraseña:");

    if (contrasena === contrasenaGuardada) {
      alert(`Bienvenido ${usuarioGuardado}!\nSu saldo es de $${saldoGuardado}`);
      autenticado = true;
    } else {
      intentos++;
      if (intentos < 3) {
        alert(`Contraseña incorrecta. Te quedan ${3 - intentos} intentos`);
      }
    }
  }

  if (!autenticado) {
    alert("Superaste los intentos permitidos. Acceso bloqueado.");
  } else {
    mostrarDatosUsuarioLogueado();
    mostrarMenu();
  }
}

function cerrarSession() {
    let botonCerrarSesion = document.getElementById('cerrar-sesion');
    botonCerrarSesion.addEventListener('click', cerrarSession);
    ocultarDatosUsuarioNoLogueado();
    localStorage.removeItem("Usuario1");
    localStorage.removeItem("password1");
    localStorage.removeItem("saldoInicial1");
    localStorage.removeItem("saldoTotal");
    localStorage.removeItem("movimientos");
}