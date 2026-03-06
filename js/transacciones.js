function guardarListaTransaccionesLocalStorage (transacciones) {
  const transaccionesString = JSON.stringify(transacciones);
  localStorage.setItem("movimientos", transaccionesString);
}

function obtenerListaMovimientosLocalStorage() {
  const transacciones = localStorage.getItem("movimientos");
  const transaccionesJSON = JSON.parse(transacciones || []);
  return transaccionesJSON;
}

function añadirTransaccion (tipo, monto) {
  const listaTransacciones = obtenerListaMovimientosLocalStorage(); 
  listaTransacciones.push([new Date(), tipo, monto]);
  const nuevoSaldo = actualizarSaldo(tipo, monto);
  guardarListaTransaccionesLocalStorage(listaTransacciones);
  return nuevoSaldo;
}

function consultarMovimientos() {
  const transactionsList = obtenerListaMovimientosLocalStorage();
  if(!transactionsList) {
    alert('¡No hay datos de movimientos disponibles!');
  } else {
     transactionsList.forEach(transaction => {
    console.log(`Fecha: ${transaction[0]} Tipo: ${transaction[1]} Monto: ${transaction[2]}`);
  });
  }
 
}

function actualizarSaldo (tipo, monto) {
  let saldo = consultarSaldo();
  if( tipo === 'consignacion') {
    saldo += monto;
    localStorage.setItem('saldoTotal', saldo);
  }
  else if (tipo === 'retiro') {
    saldo -= monto;
    localStorage.setItem('saldoTotal', saldo);
  }
  return saldo;
}

function consultarSaldo (){
  return parseFloat(localStorage.getItem("saldoTotal") || localStorage.getItem("saldoInicial1"));
}

function mostrarMenu() {
  let opcionUsuario = prompt("Seleccione la transacción deseada: \n" +
  "1. Consultar saldo.\n" +
  "2. Retirar dinero.\n" +
  "3. Consignar dinero.\n" +
  "4. Consultar movimientos.")
  iniciarTransaccion(opcionUsuario);
}

function iniciarTransaccion(opcionUsuario) {
  switch (opcionUsuario) {
    case "1":
      validarSaldo();
    break;
    case "2":
      retirarDinero();
    break;
    case "3":
      consignarDinero();
    break;
    case "4":
      consultarMovimientos();
    break;
    case "5": 
    return;
    case null:
    return;
    default:
      alert("Opción no válida, intente nuevamente");
    break;
  }
  mostrarMenu();
}