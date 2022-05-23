const logoElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

logoElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});

(function(){

    const formulario = document.getElementById("formulario")[0],
    elementos = formulario.elements,
    boton = document.getElementById("btnEnviarFormulario");

    const validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Complete su nombre");
            e.preventDefault();
        }
    };

    const validarApellido = function(e){
        if (formulario.apellido.value == 0){
            alert("Complete su apellido");
            e.preventDefault();
        }
    };

    const validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Complete su email");
            e.preventDefault();
        }
    };

    const validarTelefono = function(e){
        if (formulario.telefono.value == 0){
            alert("Complete su teléfono");
            e.preventDefault();
        }
    };

    const validarInscripto = function(e){
        if (formulario.inscripto.value == 0){
            alert("Seleccione una opción");
            e.preventDefault();
        }
    };
    
    const validarComentario = function(e){
        if (formulario.comentario.value == 0){
            alert("Agregue una descripción válida");
            e.preventDefault();
        }
    };

    const validarRadio = function(e){
        if (formulario.modalidad[0].checked == true ||
            formulario.modalidad[1].checked == true ||
            formulario.modalidad[2].checked == true){
        } else{
            alert("Indique la modalidad requerida");
            e.preventDefault();
        }
    };

    const validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarEmail(e);
        validarTelefono(e);
        validarInscripto(e);
        validarComentario(e);
        validarRadio(e);
    };

    formulario.addEventListener("submit", validar);
}())
