 let ingreseNombre= prompt("Bienvenido al stock de Zappa, Ingrese su nombre por favor.");



function saludar (nombre) {
    alert ("Hola" + " " +  nombre + " " + "nos complace ayudarte. Precione Aceptar para continuar");
    alert ("En este momento contamos con Stcok de zapatillas: Vnas Knu Green y Vans Knu Black. Presione Aceptar si desea uno de estos pares.");

}
saludar (ingreseNombre);

function verificarOpcion(opcion) {
    if (opcion === "Vans Knu Black" || opcion === "Vans Knu Green") {
        let talle = prompt("¡Excelente elección! Por favor, elija el talle de calzado (por ejemplo, 38, 39, 40, etc.):");
        return "Perfecto, has seleccionado " + opcion + " en talle " + talle + ". Gracias por tu pedido.";
    } else {
        return "Lo siento, la opción seleccionada no es válida. Por favor elija entre Vans Knu Black y Vans Knu Green.";
    }
}

let opcionUsuario = prompt("Por favor, elija entre Vans Knu Black y Vans Knu Green.");
let mensaje = verificarOpcion(opcionUsuario);
alert(mensaje);




















/* Necesito, saludar a la persona, luego pedirle que tipo de zapatillas quiere, si no ingresa una de las dos opciones que se salga otro reintento, luego de esto preguntarle que talle prediere y por ultimo decirle Gracias.*/



 






