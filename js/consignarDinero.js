function consignarDinero() {
    const saldo = consultarSaldo();
    let monto = Number(prompt("Ingrese el monto a consignar:"));

    if (monto > 0) {

        // este es una funcion
        const saldoTotal = añadirTransaccion('consignacion', monto);
        
        console.log("Consignación exitosa.");
        console.log("Monto consignado: $" + monto);
        console.log("Nuevo saldo: $" + saldoTotal);

    } else {
        console.log(" Monto inválido");
    }
}