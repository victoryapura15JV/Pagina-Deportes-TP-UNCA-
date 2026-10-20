document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos ejercico 1 y 2
    const formulario = document.querySelector("form");
    const inputDni = document.getElementById("dni");
    const inputFecha = document.getElementById("fechaNacimi");

    // Elementos ejercicio 5
    const inputCantidad = document.getElementById("cantidadParticipantes");
    const btnGenerar = document.getElementById("btnGenerar");
    const contenedor = document.getElementById("contenedorParticipantes");



    // EJERCICIOS 1 y 2:

    formulario.addEventListener("submit", function(event) {
        
        // EJERCICIO 1:
        if (inputFecha && inputFecha.value) {
            let fechaIngresada = new Date(inputFecha.value + 'T00:00:00');
            let fechaActual = new Date();
            fechaActual.setHours(0, 0, 0, 0);

            if (fechaIngresada > fechaActual) {
                event.preventDefault();
                alert("La fecha de nacimiento no puede ser posterior a la fecha actual");
                return;
            }
        }

        // EJERCICIO 2:
        if (inputDni) {
            let valorDni = inputDni.value;
            if (valorDni.length !== 8 || isNaN(valorDni)) {
                event.preventDefault();
                alert("El DNI debe contener 8 dígitos");
                return;
            }
        }
    });

    // EJERCICIO 5:
    btnGenerar.addEventListener("click", function() {

        contenedor.innerHTML = "";
        
        let cantidad = parseInt(inputCantidad.value);
        
        if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
            alert("Por favor, ingrese un número válido entre 1 y 10.");
            return;
        }

        for (let i = 1; i <= cantidad; i++) {
            const bloqueInfo = document.createElement("div");
            bloqueInfo.classList.add("border", "p-3", "mb-3", "bg-light", "rounded");
            
            bloqueInfo.innerHTML = `
                <h5 class="text-primary fw-bold">Participante Adicional ${i}</h5>
                
                <label for="apeynom-${i}" class="form-label">Apellido y Nombre:</label>
                <input id="apeynom-${i}" type="text" name="apeynom-${i}" class="form-control mb-2" required>
                
                <label for="dni-${i}" class="form-label">DNI:</label>
                <input id="dni-${i}" type="text" name="dni-${i}" class="form-control mb-2" required>
                
                <label for="fechaNacimi-${i}" class="form-label">Fecha de nacimiento:</label>
                <input id="fechaNacimi-${i}" type="date" name="fechaNacimi-${i}" class="form-control mb-3" required>
                
                <label class="form-label d-block">Sexo:</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="femenino-${i}" name="sexo-${i}" value="Femenino" required>
                    <label class="form-check-label" for="femenino-${i}">Femenino</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="masculino-${i}" name="sexo-${i}" value="Masculino">
                    <label class="form-check-label" for="masculino-${i}">Masculino</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="radio" id="noBinario-${i}" name="sexo-${i}" value="No Binario">
                    <label class="form-check-label" for="noBinario-${i}">No Binario</label>
                </div>
                <br>
                
                <label for="nivel-${i}" class="form-label">Nivel:</label>
                <select id="nivel-${i}" name="nivel-${i}" class="form-select mb-2" required>
                    <option value="inicial">Inicial</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="avanzado">Avanzado</option>
                </select>
            `;

            contenedor.appendChild(bloqueInfo);
        }
    });

});