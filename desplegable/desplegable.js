let boton = document.querySelector('.btn_toggle');
let seccion = document.querySelector('.seccionToggleNuevo');

boton.addEventListener('click',(e)=>{
    if (seccion.classList[1]=='seccionToggleNuevo') {
        seccion.classList.toggle('seccionToggleNuevo');
        seccion.classList.toggle('seccionToggle');
        boton.innerHTML='CERRAR';
        
    }else {
        seccion.classList.toggle('seccionToggleNuevo');
        seccion.classList.toggle('seccionToggle');
        boton.innerHTML='ABRIR';
    }
})