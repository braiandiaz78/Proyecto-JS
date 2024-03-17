
let usuario = {
    nombre: "",
    seleccion: ""
};


let stockZapatillas = [
    { modelo: "Vans Knu Green", tallesDisponibles: ["38", "39", "42"], precioUSD: 50, disponible: true },
    { modelo: "Vans Knu Black", tallesDisponibles: ["38", "39", "42"], precioUSD: 60, disponible: true },
    { modelo: "Nike Air Force 1", tallesDisponibles: ["42", "38", "39"], precioUSD: 80, disponible: false }
];


function saludar() {
    usuario.nombre = prompt("Bienvenido al Stock de Zappa. Por favor, ingrese su nombre:");
    alert("Hola " + usuario.nombre + ", nos complace tenerte aquí. Presiona Aceptar para continuar.");
    alert("En este momento contamos con Stock de zapatillas: Vans Knu Green, Vans Knu Black, Nike Air Force 1. Presiona Aceptar si deseas uno de estos pares.");
}


function verificarOpcion(opcion) {
    let talle;
    let seleccionado = stockZapatillas.find(zapatilla => zapatilla.modelo.toLowerCase() === opcion.toLowerCase());

    if (seleccionado && seleccionado.disponible) {
        do {
            talle = prompt(`¡Excelente elección! En este momento contamos con talles ${seleccionado.tallesDisponibles.join(", ")}. Por favor, elige el talle de calzado.`);
            if (!seleccionado.tallesDisponibles.includes(talle)) {
                alert(`Por favor, ingrese un número de calzado válido (${seleccionado.tallesDisponibles.join(", ")}).`);
            }
        } while (!seleccionado.tallesDisponibles.includes(talle));

        let precioTotalUSD = seleccionado.precioUSD;
        let convertirAPesos = confirm(`El precio de las ${seleccionado.modelo} es ${precioTotalUSD} dólares. ¿Desea convertirlo a pesos uruguayos?`);

        if (convertirAPesos) {
            
            let precioTotalUYU = precioTotalUSD * 43;
            alert(`El precio de las ${seleccionado.modelo} es aproximadamente ${precioTotalUYU} pesos uruguayos.`);
        }

        usuario.seleccion = `${seleccionado.modelo} en talle ${talle}`;
        return "Perfecto, has seleccionado " + usuario.seleccion +  "con un precio de " + precioTotalUSD + "USD" + ". Gracias por tu pedido.";
    } else {
        return "Lo lamentamos, la opción seleccionada no está disponible en este momento.";
    }
}

saludar();

let opcionUsuario = prompt("Por favor, elige entre Vans Knu Black, Vans Knu Green y Nike Air Force 1");
opcionUsuario = opcionUsuario.toLowerCase(); 
let mensaje = verificarOpcion(opcionUsuario);
alert(mensaje);
