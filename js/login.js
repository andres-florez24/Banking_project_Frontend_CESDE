let admin = prompt("Ingresa tu nombre");

if (admin === "Andres") {
  let nombre1 = prompt("Ingrese el nombre de usuario");
  let password1 = prompt("Ingrese la contraseña");
  let saldoInicial1 = parseFloat(prompt("Ingrese el saldo inicial"));

  localStorage.setItem("Usuario1", nombre1);
  localStorage.setItem("password1", password1);
  localStorage.setItem("saldoInicial1", saldoInicial1);
} else {
  alert("No tienes permisos para esto");
}

// Login

let passwordGuardada = localStorage.getItem("password1");
let saldoGuardado = localStorage.getItem("saldoInicial1");

let intentos = 0;
let autenticado = false;

while (intentos < 3 && !autenticado) {
  let contra = prompt("Ingrese su contraseña");

  if (contra === passwordGuardada) {
    alert(`Su saldo es de ${saldoGuardado}`);
    autenticado = true;
  } else {
    intentos++;
    alert("Contraseña incorrecta, intenta nuevamente");
    alert("Te quedan " + (3 - intentos) + " intentos");
  }
}

if (!autenticado) {
  alert("Superaste los intentos permitidos");
}