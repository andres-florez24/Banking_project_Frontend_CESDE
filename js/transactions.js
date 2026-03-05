const transactionsList = [];

function addNewTransaction (type, ammount) {
  transactionsList.push([Date.Now(), type, ammount]);
}

function listAllTransactions() {
  transactionsList.forEach(transaction => {
    console.log(`Fecha: ${transaction[0]} Tipo: ${transaction[1]} Monto: ${transaction[2]}`);
  });
}

function showTransactionsMenu() {
  let userOption = prompt("Seleccione la transacción deseada: \n" +
  "1. Consultar saldo.\n" +
  "2. Retirar dinero.\n" +
  "3. Consignar dinero.\n" +
  "4. Consultar movimientos.")
  startTransaction(userOption);
}

function startTransaction(userOption) {
  switch (userOption) {
    case "1":
      consultarSaldo();
    break;
    case "2":
      withdrawMoney();
    break;
    case "3":
      consignarDinero();
    break;
    case "4":
      listAllTransactions();
    break;
    default:
      alert("Opción no válida, intente nuevamente");
      showTransactionsMenu();
  }
}