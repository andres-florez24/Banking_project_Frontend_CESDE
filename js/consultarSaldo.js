function actualizarSaldo() {
    
}

function consultarSaldo () {

    let saldo = localStorage.getItem("saldo");
    if(saldo > 0){
        return saldo;
    }

    else if (saldo === 0){
        alert ("Actualmente no tienes saldo disponible");
    } else {
        alert (" Tu saldo no puede ser negativo")
    }

}