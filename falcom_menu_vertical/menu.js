// let productos = document.querySelector('.productos');
let redes = document.querySelector('.redes')
let menu = document.querySelector('.menu')
// productos.addEventListener('click',(e)=>{
//     e.preventDefault();
//     productos.classList.toggle('activado')
//     console.log(productos.classList.contains('activado'))
// }
// )

for (let i = 0; i < menu.children.length; i++) {
    if(menu.children[i].children[1]){
        menu.children[1].addEventListener('click',function(){
            this.classList.toggle('activado');
            }
    )
        }
}
