// function cambio(){
//     let mensaje = document.getElementById('mensaje');
//     mensaje.innerHTML="";
//     let valor = document.getElementById('suma').value;
//     try {
//         if(valor =="") throw 'vacio';
//         if(isNaN(valor)) throw 'ingrese un numero';
//         valor = Number(valor);
//         valor <10 && valor >5 ? mensaje.innerHTML='dentro de rango':
//         mensaje.innerHTML='fuera de rango';
//     } catch (e) {
//         mensaje.innerHTML = e
//     }
//     finally{
//         document.getElementById('suma').value="";
//     }
// }

// class Car{
//     constructor(brand){
//         this.brand = brand;
//     }
//     present(){
//         return `I have a ${this.brand}`;
//     }
// }

// class Model extends Car{
//     constructor(brand,mod){
//         super(brand);
//         this.mod = mod;
//     }

//     show(){
//         return `${this.present()}, it is a ${this.mod}`;
//     }
// }

// let myCar = new Model('Ford','Mustang');
// document.write(myCar.show());

const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn_agregar');

//propagacion de eventos kiere decir si pongo un evento al contenedor, los hijos tambien lo tienen
lista.addEventListener('click',(e) => {
    if (e.target && e.target.tagName ===' A') {//para que el contenedor no tenga la clase activo
    e.target.classList.toggle('activo');   
    }
})

btnAgregar.addEventListener('click',()=>{
    const elemento=`
    <a href="#">
        Elemento<i class="bi bi-check-square-fill"></i>
    </a>
    `
    lista.innerHTML += elemento;
});