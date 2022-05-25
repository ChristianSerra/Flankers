const logoElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

logoElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});

        const almacenDatos = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    inscripto: "",
    comentario: "",
    modalidad: "",
}

const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputEmail = document.getElementById("inputEmail")
const inputTelefono = document.getElementById("inputTelefono")
const inputInscripto = document.getElementById("inputInscripto")
const inputComentario = document.getElementById("inputComentario")
const inputModalidad = document.getElementById("inputModalidad")

const submitForm = document.getElementById("btnEnviarFormulario")
submitForm.addEventListener("click",handleClick)

inputNombre.addEventListener("input",handleChange)
inputApellido.addEventListener("input",handleChange)
inputEmail.addEventListener("input",handleChange)
inputTelefono.addEventListener("input",handleChange)
inputInscripto.addEventListener("input",handleChange)
inputComentario.addEventListener("input",handleChange)
inputModalidad.addEventListener("input",handleChange)



function handleChange(event){
    if(event.target.id === "inputNombre"){
        almacenDatos.nombre = event.target.value
    }
    if(event.target.id === "inputApellido"){
        almacenDatos.apellido = event.target.value
    }
    if(event.target.id === "inputEmail"){
        almacenDatos.email = event.target.value
    }
    if(event.target.id === "inputTelefono"){
        almacenDatos.telefono = event.target.value
    }
    if(event.target.id === "inputInscripto"){
        almacenDatos.inscripto = event.target.value
    }
    if(event.target.id === "inputComentario"){
        almacenDatos.comentario = event.target.value
    }
    if(event.target.id === "inputModalidad"){
        almacenDatos.modalidad = event.target.value
    }
}

function handleClick(event){
    for (const key in almacenDatos){
        if(!almacenDatos[key]){
            alert(`Debes rellenar ${key}`)
        }
    }

    const $form = document.querySelector("#form")
    const $buttonMailto = document.querySelector("#envio")
    
    $form.addEventListener("submit", handleSubmit)
    
    function handleSubmit(event){
        event.preventDefault();
        const form = new FormData(this);
        console.log(form.get("inputNombre"))
        $buttonMailto.setAttribute('href', `mailto:suministros@flankers.com.ar?subject= Cotización solicitada por: ${form.get('inputNombre')} - Correo:${form.get('inputEmail')} - Telefono: ${form.get('inputTelefono')}&body= Información de la mercadería a cotizar: ${form.get('inputComentario')} - La modalidad seleccionada para la cotización es vía: ${form.get('inputModalidad')}`)
        $buttonMailto.click()
        $form.reset();
    }

}
