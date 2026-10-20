// EJERCICIO 3.1:
function Actividad(nombre, lugar, dia, horario, cupo, estado) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;
}

// EJERCICIO 3.2:
class SistemaDeportes {
    constructor() {
        this.actividades = [];
    }

    agregarActividad(nuevaActividad) {
        this.actividades.push(nuevaActividad);
    }

    listarActividades() {
        return this.actividades;
    }
}

// EJERCICIO 3.3:
const sistema = new SistemaDeportes();

sistema.agregarActividad(new Actividad("Fútbol", "Cancha Universitaria", "Lunes", "18:00-20:00", 20, "Disponible"));
sistema.agregarActividad(new Actividad("Básquet", "Cancha Techada", "Martes", "17:00-19:00", 15, "Disponible"));
sistema.agregarActividad(new Actividad("Vóley", "Cancha Techada", "Miércoles", "18:00-20:00", 12, "Completo"));
sistema.agregarActividad(new Actividad("Atletismo", "Pista de Atletismo", "Jueves", "16:00-18:00", 25, "Disponible"));

// EJERCICIO 4:
document.addEventListener('DOMContentLoaded', function() {
    
    const cuerpoTabla = document.getElementById("cuerpoTabla");

    const arrayActividades = sistema.listarActividades();

    arrayActividades.forEach(function(actividad) {
        
        const fila = document.createElement("tr");

        const celdaActividad = document.createElement("td");
        celdaActividad.textContent = actividad.nombre;

        const celdaLugar = document.createElement("td");
        celdaLugar.textContent = actividad.lugar;

        const celdaDia = document.createElement("td");
        celdaDia.textContent = actividad.dia;

        const celdaHorario = document.createElement("td");
        celdaHorario.textContent = actividad.horario;

        const celdaCupos = document.createElement("td");
        celdaCupos.textContent = actividad.cupo;

        const celdaEstado = document.createElement("td");
        celdaEstado.textContent = actividad.estado;

        fila.appendChild(celdaActividad);
        fila.appendChild(celdaLugar);
        fila.appendChild(celdaDia);
        fila.appendChild(celdaHorario);
        fila.appendChild(celdaCupos);
        fila.appendChild(celdaEstado);

        cuerpoTabla.appendChild(fila);
    });
});