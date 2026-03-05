function withdrawMoney() {
    let nombreU = prompt("¿Cuál es tu nombre?");
    localStorage.setItem("usuario", nombreU);
    let monto = 2000
    let nuevoMonto = 0  

    while (monto >0){
    alert (`hola  ${ nombreU } \n tu saldo actual es de :  ${monto} \n deseas retirar ?  `)
        let retirar = parseFloat(prompt("cuanto desea retirar" ))
        let totalRetiro = 0;

        if (monto >= retirar){
            monto =  monto - retirar
        } else { alert("No tienes suficiente saldo para retirar esa cantidad.");
        }
    }
    alert("Tu saldo es 0. No puedes retirar más.");

}