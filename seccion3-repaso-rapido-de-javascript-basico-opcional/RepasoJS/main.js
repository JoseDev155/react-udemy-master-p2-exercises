alert("hola mundo!!")

var nombre = "Víctor Robles";
var altura = 189;

/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
`;

if (altura >= 190) {
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
} else {
    datos.innerHTML = '<h1>Eres una persona BAJITA</h1>';
}

for (var i = 2000; i <= 2020; i++) {
    // bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: " + i + "</h2>";
}
*/

function MuestraMiNombre(nombre, altura) {
    var misDatos = `
        <h1>Soy la caja de datos</>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura}</h3>
    `;

    return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Víctor Robles WEB 111", 190);
}

imprimir();

var nombres = ['Víctor', 'Antonio', 'Joaquin'];

document.write('<h1>Listado de nombres</h1>');
/*
for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br />');
}
*/

nombres.forEach((nombre) => {
    document.write(nombre + '<br />');
});


var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>" + coche.antiguedad + "</h1>");
coche.mostrarDatos();
console.log(coche);


var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos chavales!!!";
        saludo = false;

        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000)
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
})