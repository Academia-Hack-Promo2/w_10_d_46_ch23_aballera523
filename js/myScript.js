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
var cont3ra2 = 0;
var cont3ra = 0;

function atenderTaquilla() {

    if (agregarCliente1[0] != 0 && (cont3ra2 == 0 || cont3ra2 == 1 || cont3ra2 == 2)) {
        atenderCliente1();
        cont3ra++;
        cont3ra2 = 0;
        cont3ra2 = cont3ra;
    } else {
        atenderCliente3()
    }
    console.log(taquilla3ra)
    console.log(taquillaGral)
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

var cont3ra1 = 0;
var cont3ra3 = 0;

function atenderServicio() {
    if (agregarCliente2[0] != 0 && (cont3ra3 == 0 || cont3ra3 == 1 || cont3ra3 == 2)) {
        atenderCliente2();
        cont3ra1++;
        cont3ra3 = 0;
        cont3ra3 = cont3ra1;
    } else {
        atenderCliente4()
    }
    console.log(servicio3ra)
    console.log(servicioGral)
}