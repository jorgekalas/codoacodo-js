let comprarTicketsMenu= document.querySelector(".comprar-tickets-menu");
let comprarTicketsBoton = document.querySelector(".comprar-tickets-boton")
let sectionComprarTickets = document.querySelector("#comprar-tickets");

let template = `
<div class="container-fluid w-50">
    <hr>
    <div class="row text-center">
        <div class="col div-estudiante border border-primary me-2 pb-4 pt-4 ps-0 pe-0">
            <h4>Estudiante</h4>
            <p>Tienen un descuento</p>
            <p class="fw-bold">80%</p>
            <p class="text-secondary">* presentar documentación</p>
        </div>
        <div class="col div-trainee border border-success me-2 me-2 pb-4 pt-4 ps-0 pe-0">
            <h4>Trainee</h4>
            <p>Tienen un descuento</p>
            <p class="fw-bold">50%</p>
            <p class="text-secondary">* presentar documentación</p>
        </div>
        <div class="col div-junior border border-warning me-2 pb-4 pt-4 ps-0 pe-0">
            <h4>Junior</h4>
            <p>Tienen un descuento</p>
            <p class="fw-bold">15%</p>
            <p class="text-secondary">* presentar documentación</p>
        </div>
    </div>
    <div class="container-fluid ">
        <div class="tituloCardGroup d-flex flex-column align-items-center p-4">
            <p class="lh-1 text-center">VENTA</p>
            <p class="lh-1 fs-2 text-center">VALOR DE TICKET $200</p>
        </div>
        <form class="form-comprar-tickets">
            <div class="mb-3">
                <div class="nombre-y-apellido row">
                    <div class="div-nombre col-6">
                        <input type="text" class="form-control input-nombre" id="nombre" placeholder="Nombre" data-tipo="nombre">
                        <div class="error-nombre"></div>
                    </div>
                    <div class="nombre col-6">
                        <input type="text" class="form-control input-apellido" id="apellido" placeholder="Apellido" data-tipo="apellido">
                        <div class="error-apellido"></div>
                    </div>
                </div>
                <div class="correo pt-3">
                    <input type="email" class="form-control input-correo" id="email" placeholder="Correo" data-tipo="correo">
                    <div class="error-correo"></div>
                </div>
                <div class="cantidad cantidad-categoria row pt-3">
                    <div class="col-6">
                        <label for="" class="form-label col-6">Cantidad</label>
                        <input type="number" id="cantidad" class="form-control input-cantidad" placeholder="cantidad" data-tipo="cantidad">
                        <div class="error-cantidad"></div>
                    </div>
                    <div class="col-6">
                        <label for="categoria" class="form-label col-6 a">Categoria</label>
                        <select class=" form-select input-select-categoria" data-tipo="categoria">
                            <option value="estudiante" selected>Estudiante</option>
                            <option value="trainee">Trainee</option>
                            <option value="junior">Junior</option>
                        </select>
                        <div class="error-select"></div>
                    </div>
                </div>
                <div class="total-a-pagar mt-3 container-fluid d-flex justify-content-center">
                    <button type="button" class="btn btn-primary text-start p-3 w-75" disabled>Total a pagar: $
                        <span class="span-total-a-pagar"></span></button>
                </div>
                <div class="buttons pt-3 d-flex justify-content-center">
                    <button type="reset" class="boton-borrar col-4 btn btn-success text-light mb-4 me-1">Borrar</button>
                    <button type="submit" class=" col-4 btn btn-success   text-light mb-4 ms-1">Resumen</button>
                </div>
            </div>
        </form>
    </div>
`

comprarTicketsMenu.addEventListener("click", () => {
    sectionComprarTickets.innerHTML = template;
})

comprarTicketsBoton.addEventListener("click", () => {
    sectionComprarTickets.innerHTML = template;
    calcularTotalAPagar() 
})
