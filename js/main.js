let ingreseNombre = prompt("Bienvenido al Stock de Zappa. Por favor, ingrese su nombre:");

function saludar(nombre) {
    alert("Hola " + nombre + ", nos complace tenerte aquí. Presiona Aceptar para continuar.");
    alert("En este momento contamos con Stock de zapatillas: Vans Knu Green y Vans Knu Black. Presiona Aceptar si deseas uno de estos pares.");
}

saludar(ingreseNombre);

function verificarOpcion(opcion) {
    let talle;
    do {
        if (opcion === "Vans Knu Black" || opcion === "Vans Knu Green") {
            talle = prompt("¡Excelente elección! En este momento contamos con talles 38, 39 y 42. Por favor, elige el talle de calzado.");
            if (talle !== "38" && talle !== "39" && talle !== "42") {
                alert("Por favor, ingrese un número de calzado válido (38, 39, o 42).");
            }
        } else {
            alert("Lo siento, la opción seleccionada no es válida. Por favor, elige entre Vans Knu Black y Vans Knu Green.");
            opcion = prompt("Por favor, elige entre Vans Knu Black y Vans Knu Green:");
        }
    } while (talle !== "38" && talle !== "39" && talle !== "42");
    
    return "Perfecto, has seleccionado " + opcion + " en talle " + talle + ". Gracias por tu pedido.";
}

let opcionUsuario = prompt("Por favor, elige entre Vans Knu Black y Vans Knu Green:");
let mensaje = verificarOpcion(opcionUsuario);
alert(mensaje);




