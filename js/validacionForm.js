
function validarCampos() {

let inputNombre = document.querySelector(".input-nombre");
console.log(inputNombre);
let nombre = inputNombre.value;
let inputApellido = document.querySelector(".input-apellido")
let apellido = inputApellido.value;
let inputCorreo = document.querySelector(".input-correo")
let correo = inputCorreo.value;
let inputCantidad = document.querySelector(".input-cantidad")
let cantidad = inputCantidad.value;
let inputCategoria = document.querySelector(".input-select-categoria")
let divErrorNombre = document.querySelector(".error-nombre");
let divErrorApellido = document.querySelector(".error-apellido");
let divErrorCorreo = document.querySelector(".error-correo");
let divErrorCantidad = document.querySelector(".error-cantidad");


//Función para validar el campo nombre
function validarNombre(){
    if(nombre==""){
        inputNombre.classList.add('border-danger')
        let parrafoError = `<p class="text-danger text-center">Por favor, ingrese un nombre correcto</p>`
        divErrorNombre.innerHTML = parrafoError;
    } else{
        inputNombre.classList.remove('border-danger')
        divErrorNombre.innerHTML = ""

    }
}

//Función para validar el campo apellido
function validarApellido(){
    if(apellido==""){
        inputApellido.classList.add('border-danger')
        let parrafoError = `<p class="text-danger text-center">Por favor, ingrese un apellido correcto</p>`
        divErrorApellido.innerHTML = parrafoError;
    } else{
        inputApellido.classList.remove('border-danger')
        divErrorApellido.innerHTML = ""
    }
}

//Función para validar el campo correo
function validarCorreo(){
    if(correo==""){
        inputCorreo.classList.add('border-danger')
        let parrafoError = `<p class="text-danger text-center">Por favor, ingrese un correo correcto</p>`
        divErrorCorreo.innerHTML = parrafoError;
    } else{
        inputCorreo.classList.remove('border-danger')
        divErrorCorreo.innerHTML = ""
    }
}

//Función para validar el campo cantidad
function validarCantidad(){
    if(cantidad==""){
        inputCantidad.classList.add('border-danger')
        let parrafoError = `<p class="text-danger text-center">Por favor, ingrese una cantidad correcta</p>`
        divErrorCantidad.innerHTML = parrafoError;
    } else{
        inputCantidad.classList.remove('border-danger')
        divErrorCantidad.innerHTML = ""
    }
}


//Llamado a las funciones
    validarNombre();
    validarApellido();
    validarCorreo();
    validarCantidad();


}