(function(){
    const actualizarHora = function () {
        let fecha = new Date();
        let horas = fecha.getHours();
        let ampm;
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let diaSemana = fecha.getDay();
        let dia = fecha.getDate();
        let mes = fecha.getMonth();
        let year = fecha.getFullYear();

        let pHoras = document.querySelector('.horas');
        let pAMPM = document.querySelector('.ampm');
        let pMinutos = document.querySelector('.minutos');
        let pSegundos = document.querySelector('.segundos');
        let pDiaSemana = document.querySelector('.diaSemana');
        let pDia = document.querySelector('.dia');
        let pMes = document.querySelector('.mes');
        let pYear = document.querySelector('.year');

        let semana = ['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
        let meses = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pYear.textContent = year;
        if(horas >= 12){
            horas = horas-12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        }
        if(horas == 0){
            horas = 12;
        }
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        if(minutos<10){
            minutos = '0'+minutos;
        }
        if(segundos<10){
            segundos = '0'+segundos;
        }
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };
    actualizarHora();
    const intervalo = setInterval(actualizarHora,1000);
}())