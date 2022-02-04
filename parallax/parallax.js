let cuerpo = document.querySelector('body');

window.addEventListener('scroll',()=>{
    let barra = (cuerpo.scrollTop|| document.documentElement.scrollTop);
    let posicion = barra* 0.10;
    cuerpo.style.backgroundPosition = `0 -${posicion}px`;//si le kietas el menos la direccion cambia
})
