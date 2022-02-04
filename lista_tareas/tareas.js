(function(){
    let lista = document.querySelector('.lista');
    let tareaInput = document.querySelector('.tareaInput');
    let boton = document.querySelector('.boton');

    const agregarTarea = function(){
        let tarea = tareaInput.value;
        let nuevo = document.createElement('li');
        let enlace = document.createElement('a');
        let contenido = document.createTextNode(tarea);
        if(tarea === ''){
            tareaInput.setAttribute('placeholder','Agrega una tarea valida');//validacion
            tareaInput.className = 'error';
            return false;
        }
        enlace.appendChild(contenido);
        enlace.setAttribute('href','#');
        nuevo.appendChild(enlace);
        lista.appendChild(nuevo);
        tareaInput.value = '';
        for (let i = 0; i < lista.children.length; i++) {
            lista.children[i].addEventListener('click',function(){
                this.parentNode.removeChild(this);
            });
        }
    };
    const comprobarInput = function(){
        tareaInput.className='';
        tareaInput.setAttribute('placeholder','Agrega tu tarea');
    };
    const eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    boton.addEventListener('click',agregarTarea);
    tareaInput.addEventListener('click',comprobarInput);
    for (let i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener('click',eliminarTarea);
    }
}())

