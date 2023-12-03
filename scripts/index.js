//declaro el dinero indicado.
let dinero = [{ valor: 500, cantidad: 10 },
{ valor: 200, cantidad: 10 },
{ valor: 100, cantidad: 20 },
{ valor: 50, cantidad: 20 },
{ valor: 20, cantidad: 20 },
{ valor: 10, cantidad: 20 },
{ valor: 5, cantidad: 20 },
{ valor: 2, cantidad: 20 },
{ valor: 1, cantidad: 10 },
{ valor: 0.50, cantidad: 200 },
{ valor: 0.20, cantidad: 200 },
{ valor: 0.10, cantidad: 500 },
{ valor: 0.05, cantidad: 500 },
{ valor: 0.02, cantidad: 800 },
{ valor: 0.01, cantidad: 1000 }
];


function mostrarEnLabel() {
    for (let i = 0; i < dinero.length; i++) {
        let labelId = "valor" + (i + 1);
        let label = document.getElementById(labelId)
        if (label) {
            if (dinero[i].valor >= 2) {
                label.textContent = (`Billetes de $${dinero[i].valor}: ${dinero[i].cantidad}, Monto total: $` + ((dinero[i].valor * dinero[i].cantidad)));
            }
            else {
                label.textContent = (`Monedas de $${dinero[i].valor}: ${dinero[i].cantidad}, Monto total: $` + ((dinero[i].valor * dinero[i].cantidad)));
            }
        }
    }
    sumarDinero()
}

function sumarDinero() {
    var total = 0;
    for (let i = 0; i < dinero.length; i++) {
        let tmpTotal = dinero[i].valor * dinero[i].cantidad;
        total += tmpTotal;
    }
    let label = document.getElementById("valor16");
    label.textContent = (`El total es: $${total}`);
    return total
}
mostrarEnLabel()

function retirar() {
    let monto = document.getElementById("monto").value
    if (monto == undefined || monto == "") {
        alert("Es necesario ingresar una cantida")
    } else {
        let i = 0;
            while(i < dinero.length){
            if (monto <= sumarDinero()) {
                /*Dejare nota en esta parte, tengo un problema con los valores 0.05, 0.02 y 0.01
                justamente con esos 3 los valores no son certeros por una centesima 
                pero al investigar adusco yo que es por como JavaScrip maneja los flotanes
                
                En dinero[i].cantidad >= 0 justamente si yo lo dejo como mayor pasa ese error,
                pero si lo dejo como mayor o igual el error se eliminar, pero a la hora de visualizar los billetes 
                me quedan como -1, pero en fin, solo dejo data de esto, por si sirve de algo.
                */
                if (dinero[i].cantidad > 0 && dinero[i].valor <= monto) {
                    monto -= dinero[i].valor;
                    dinero[i].cantidad--;
                    mostrarEnLabel();

                } else {
                    i++;
                }
            }
            else {
                alert("El cajero no tiene suficiente dinero");
                break;
            }
        }

    }
}

/*Tenia estás funciones para conocer la cantidad de dinero por billete, pero decidi no utilizarlas,
las deje por cualquier cosa.*/
// function mostarTotal(a) {
//     let encontrado = false
//     for (let i = 0; i < dinero.length; i++) {
//         if (dinero[i].valor == a) {
//             console.log(`Total de billetes de ${a}: $` + sumarBilletes(a));
//             encontrado = true
//             break;
//         }
//     }
//     if(!encontrado) {
//         console.log("El billete no existe", a)
//     }
// }
// function sumarBilletes(valor) {
//     const billetesDeDenominacion = dinero.find(b => b.valor === valor);
//     let total = billetesDeDenominacion.valor * billetesDeDenominacion.cantidad;
//     return total;
// }
