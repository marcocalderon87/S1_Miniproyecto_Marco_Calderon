// Simulación de un servicio que recibe incidencias.

export function guardarTicket(datos, simularError) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (simularError) {

                reject(
                    new Error(
                        "No se pudo conectar con el servicio."
                    )
                );

            } else {

                resolve(datos);

            }

        }, 1000);

    });

}