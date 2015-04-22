//Taquilla Tercera Edad
var taquilla3ra = new Array();
var num = 200;
var tiempo = 0;
var cont = 0;

function agregarCliente1() {
    taquilla3ra.push(num);
    console.log(taquilla3ra);
    if (cont == 0) {
        document.getElementById("numtaquilla3ra").innerHTML =
            "Bienvenido a MyBank, usted será llamado por el número " + num + " y será atendido inmediatamente";
    } else {
        cont = taquilla3ra.length;
        tiempo = (cont - 1) * 5;
        document.getElementById("numtaquilla3ra").innerHTML =
            "Bienvenido a MyBank, usted será llamado por el número " + num + " dentro de " + tiempo + " minutos. Tiene " + cont + " personas por delante";
    }
    num++;
    tiempo = tiempo + 5;
    cont++;
}

function atenderCliente1() {
    cont = taquilla3ra.length;
    if (cont == 0) {
        document.getElementById("llamtaquilla3ra").innerHTML =
            "Felicitaciones! has atendido a todos los clientes";
    } else {
        numAtend = taquilla3ra[0];
        taquilla3ra.shift(num);
        document.getElementById("llamtaquilla3ra").innerHTML =
            "Número " + numAtend + " Taquilla 1";
    }
    console.log(taquilla3ra);
}

//Taquilla General

var taquillaGral = new Array();
var num3 = 600;
var tiemp3 = 0;
var cont3 = 0;

function agregarCliente3() {
    taquillaGral.push(num3);
    console.log(taquillaGral)
    if (cont3 == 0) {
        document.getElementById("numtaquillaGral").innerHTML =
            "Bienvenido a MyBank, usted será llamado por el número " + num3 + " y será atendido inmediatamente";
    } else {
        cont3 = taquillaGral.length
        tiemp3 = (cont3 - 1) * 3
        document.getElementById("numtaquillaGral").innerHTML =
            "Bienvenido a MyBank, usted será llamado por el número " + num3 + " dentro de " + tiemp3 + " minutos. Tiene " + cont3 + " personas por delante";
    }
    num3++;
    tiemp3 = tiemp3 + 3;
    cont3++;
}

function atenderCliente3() {
    cont3 = taquillaGral.length;
    if (cont3 == 0) {
        document.getElementById("llamtaquillaGral").innerHTML =
            "Felicitaciones! has atendido a todos los clientes";
    } else {
        numAtend = taquillaGral[0];
        taquillaGral.shift(num3);
        document.getElementById("llamtaquillaGral").innerHTML =
            "Número " + numAtend + " Taquilla 2";
    }
    console.log(taquillaGral);
}


//Servicios Tercera Edad

var servicio3ra = new Array();
var cont2 = 0;
var num2 = 400;
var tiem2 = 0;

function agregarCliente2() {
    servicio3ra.push(num2);
    console.log(servicio3ra);
    if (cont2 == 0) {
        document.getElementById("numservicio3ra").innerHTML =
            "Bienvenido a MyBank, usted será llamado por el número " + num2 + " y será atendido inmediatamente";
    } else {
        cont2 = servicio3ra.length;
        tiem2 = (cont2 - 1) * 12;
        document.getElementById("numservicio3ra").innerHTML =
            "Bienvenido a MyBank, usted será llamado por el número " + num2 + " dentro de " + tiem2 + " minutos. Tiene " + cont2 + " personas por delante";
    }
    num2++;
    tiem2 = tiem2 + 12;
    cont2++;
}

function atenderCliente2() {
    cont2 = servicio3ra.length;
    if (cont2 == 0) {
        document.getElementById("llamservicio3ra").innerHTML =
            "Felicitaciones! has atendido a todos los clientes";
    } else {
        numAtend = servicio3ra[0];
        servicio3ra.shift(num3);
        document.getElementById("llamservicio3ra").innerHTML =
            "Número " + numAtend + " Oficina 2";
    }
    console.log(servicio3ra);
}

//Servicios General

var servicioGral = new Array();
var cont5 = 0;
var num5 = 800;
var tiempos5 = 0;

function agregarCliente4() {
    servicioGral.push(num5);
    console.log(servicioGral)
    if (cont5 == 0) {
        document.getElementById("numservicioGral").innerHTML =
            "Bienvenido a MyBank, usted será llamado por el número " + num5 + " y será atendido inmediatamente";
    } else {
        cont5 = servicioGral.length;
        tiempos5 = (cont5 - 1) * 8;
        document.getElementById("numservicioGral").innerHTML =
            "Bienvenido a MyBank, usted será llamado por el número " + num5 + " dentro de " + tiempos5 + " minutos. Tiene " + cont5 + " personas por delante";
    }
    num5++;
    tiempos5 = tiempos5 + 8;
    cont5++;
}

function atenderCliente4() {
    cont5 = servicioGral.length;
    if (cont5 == 0) {
        document.getElementById("llamservicioGral").innerHTML =
            "Felicitaciones! has atendido a todos los clientes";
    } else {
        numAtend = servicioGral[0];
        servicioGral.shift(num5);
        document.getElementById("llamservicioGral").innerHTML =
            "Número " + numAtend + " Oficina 3 ";
    }
    console.log(servicioGral);
}