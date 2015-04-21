//Taquilla

var taquilla3ra = new Array();
var cont1 = 200

function agregarCliente1() {
    taquilla3ra.push(cont1);
    cont1++;
    console.log(taquilla3ra)
}

function atenderCliente1() {
    taquilla3ra.shift(cont1);
    cont1++;
    console.log(taquilla3ra)
}

var taquillaGral = new Array();
var cont3 = 600

function agregarCliente3() {
    taquillaGral.push(cont3);
    cont3++;
    console.log(taquillaGral)
}

function atenderCliente3() {
    taquillaGral.shift(cont3);
    cont3++;
    console.log(taquillaGral)
}

function atenderCliente() {
    long = taquilla3ra.length
    if (long / 3 == 0) {
        atenderCliente1()
    } else {
        atenderCliente3()
    }
    console.log(taquilla3ra)
}


//Servicios

var servicio3ra = new Array();
var cont2 = 400

function agregarCliente2() {
    servicio3ra.push(cont2);
    cont2++;
    console.log(servicio3ra)
}

function atenderCliente2() {
    servicio3ra.shift(cont2);
    cont2++;
    console.log(servicio3ra)
}

var servicioGral = new Array();
var cont5 = 800

function agregarCliente4() {
    servicioGral.push(cont5);
    cont5++;
    console.log(servicioGral)
}

function atenderCliente4() {
    servicioGral.shift(cont5);
    cont5++;
    console.log(servicioGral)
}

function llamarCliente1() {

}