
// Closure para almacenar las incidencias
// y generar identificadores independientes.

export function crearGestorTickets() {

    const tickets = [];
    let siguienteId = 1;

    return {

        agregar(datos) {

            const nuevoTicket = {
                id: siguienteId++,
                descripcion: datos.descripcion,
                prioridad: datos.prioridad,
                horas: datos.horas
            };

            tickets.push(nuevoTicket);

            return nuevoTicket;
        },

        obtenerTodos() {
            return tickets.map(ticket => ({ ...ticket }));
        }

    };
}


// Validación de los datos del formulario.

export function validarTicket(datos) {

    const descripcion = datos.descripcion.trim();
    const horas = Number(datos.horas);

    if (descripcion.length < 3) {
        throw new Error(
            "Debe ingresar una descripcion valida."
        );
    }

    if (!["Alta", "Media", "Baja"].includes(datos.prioridad)) {
        throw new Error(
            "Debe seleccionar una prioridad."
        );
    }

    if (
        datos.horas.trim() === "" ||
        !Number.isInteger(horas) ||
        horas < 1 ||
        horas > 24
    ) {
        throw new Error(
            "Ingrese una cantidad de horas entre 1 y 24."
        );
    }

    return {
        descripcion: descripcion,
        prioridad: datos.prioridad,
        horas: horas
    };
}


// Método filter para seleccionar incidencias.

export function filtrarTickets(tickets, prioridad) {

    if (prioridad === "Todas") {
        return tickets;
    }

    return tickets.filter(
        ticket => ticket.prioridad === prioridad
    );
}


// Cálculo de estadísticas mediante filter y reduce.

export function calcularResumen(tickets) {

    const total = tickets.length;

    const alta = tickets.filter(
        ticket => ticket.prioridad === "Alta"
    ).length;

    const horas = tickets.reduce(
        (acumulador, ticket) => acumulador + ticket.horas,
        0
    );

    return {
        total: total,
        alta: alta,
        horas: horas
    };
}