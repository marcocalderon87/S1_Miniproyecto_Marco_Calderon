// Mostrar mensajes en la interfaz.

export function mostrarMensaje(texto, tipo) {

    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = texto;
    mensaje.className = tipo;
}


// Mostrar incidencias mediante el método map.

export function mostrarTickets(tickets) {

    const lista = document.getElementById("listaTickets");

    lista.textContent = "";

    if (tickets.length === 0) {

        const fila = document.createElement("tr");
        const celda = document.createElement("td");

        celda.colSpan = 4;
        celda.textContent = "No hay incidencias para mostrar.";

        fila.appendChild(celda);
        lista.appendChild(fila);

        return;
    }

    const filas = tickets.map(ticket => {

        const fila = document.createElement("tr");

        const valores = [
            ticket.id,
            ticket.descripcion,
            ticket.prioridad,
            ticket.horas
        ];

        valores.forEach(valor => {

            const celda = document.createElement("td");

            celda.textContent = valor;

            fila.appendChild(celda);
        });

        return fila;
    });

    filas.forEach(fila => {
        lista.appendChild(fila);
    });
}


// Actualizar las estadísticas del panel.

export function actualizarResumen(resumen) {

    document.getElementById("totalTickets").textContent =
        resumen.total;

    document.getElementById("totalAlta").textContent =
        resumen.alta;

    document.getElementById("totalHoras").textContent =
        resumen.horas;
}