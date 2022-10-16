function calcularTotalAPagar() {

const precio = 200;
let totalAPagar = 0;

let formComprarTickets = document.querySelector('.form-comprar-tickets')
let spanTotalAPagar = document.querySelector('.span-total-a-pagar')
let botonBorrar = document.querySelector('.boton-borrar')

formComprarTickets.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(e)



    //obtención de la cantidad
    let inputCantidad = document.querySelector('.input-cantidad')
    let cantidad = inputCantidad.value;
    console.log(cantidad);

    //obtención de la categoría
    let inputCategoria = document.querySelector('.input-select-categoria')
    let categoria = inputCategoria.value;
    console.log(categoria);

    //validar los campos

    validarCampos();

    //cálculo del total a pagar

    if(categoria=="estudiante"){
        totalAPagar = (cantidad * precio) * 0.20
    } else if(categoria=="trainee"){
        totalAPagar = (cantidad * precio) * 0.50
    } else {
        totalAPagar = (cantidad * precio) * 0.85
    }

    console.log(totalAPagar);
    
    spanTotalAPagar.innerText = totalAPagar;
    return totalAPagar;

})

botonBorrar.addEventListener("click", () =>{
    totalAPagar = "";
    spanTotalAPagar.innerText = totalAPagar;
})

}
