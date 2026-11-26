// Importación de los módulos.

import {
    crearGestorTickets,
    validarTicket,
    filtrarTickets,
    calcularResumen
} from "./logic.js";

import {
    mostrarMensaje,
    mostrarTickets,
    actualizarResumen
} from "./ui.js";

import { guardarTicket } from "./async.js";


// Inicialización de la aplicación.

const gestor = crearGestorTickets();

const formulario = document.getElementById("formTicket");
const filtro = document.getElementById("filtro");
const boton = document.getElementById("btnRegistrar");


// Actualizar el listado y los contadores.

function actualizarPantalla() {

    const tickets = gestor.obtenerTodos();

    const filtrados = filtrarTickets(
        tickets,
        filtro.value
    );

    mostrarTickets(filtrados);

    const resumen = calcularResumen(tickets);

    actualizarResumen(resumen);
}


// Registrar una incidencia de forma asíncrona.

formulario.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    boton.disabled = true;

    try {

        const datos = {

            descripcion:
                document.getElementById("descripcion").value,

            prioridad:
                document.getElementById("prioridad").value,

            horas:
                document.getElementById("horas").value
        };

        const ticketValidado = validarTicket(datos);

        const simularError =
            document.getElementById("simularError").checked;

        mostrarMensaje(
            "Registrando incidencia...",
            "info"
        );

        const respuesta = await guardarTicket(
            ticketValidado,
            simularError
        );

        gestor.agregar(respuesta);

        formulario.reset();

        filtro.value = "Todas";

        actualizarPantalla();

        mostrarMensaje(
            "Incidencia registrada correctamente.",
            "exito"
        );

    } catch (error) {

        mostrarMensaje(
            error.message,
            "error"
        );

        console.error(error.message);

    } finally {

        boton.disabled = false;

    }

});


// Actualizar el listado al cambiar el filtro.

filtro.addEventListener("change", actualizarPantalla);


// Mostrar el estado inicial.

actualizarPantalla();