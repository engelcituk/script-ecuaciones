function getValueHomogenea(){
    $("#ecuacion").html(''); 

    d = document.getElementById("ecHomogenea").value;
    if (!isNaN(d)) {
        var par = document.getElementById('ecuacion');
        var img = document.createElement('img');
        img.src = 'img/ecuaciones/'+d+'.png';
        par.appendChild(img);
        solucionEcuacion(d);
    }else {
        $("#ecuacion").html('<span class="badge badge-danger">Elija ecuacion</span>'); 
        $("#solucion").html(''); 
        $("#grafica").html(''); 
    }
}

function getValueNoHomogenea(){
    $("#ecuacion").html(''); 

    d = document.getElementById("ecNoHomogenea").value;
    if (!isNaN(d)) {
        var par = document.getElementById('ecuacion');
        var img = document.createElement('img');
        img.src = 'img/ecuaciones/'+d+'.png';
        par.appendChild(img);
        solucionEcuacion(d);
    }else {
        $("#ecuacion").html('<span class="badge badge-danger">Elija ecuacion</span>'); 
        $("#solucion").html(''); 
        $("#grafica").html(''); 
    }
}

function getValorInicial(){
    $("#ecuacion").html(''); 
    d = document.getElementById("ecValorInicial").value;
    if (!isNaN(d)) {
        var par = document.getElementById('ecuacion');
        var img = document.createElement('img');
        img.src = 'img/ecuaciones/'+d+'.png';
        par.appendChild(img);
        solucionEcuacion(d);
    }else {
        $("#ecuacion").html('<span class="badge badge-danger">Elija ecuacion</span>');
        $("#solucion").html(''); 
        $("#grafica").html(''); 


    }
}

function solucionEcuacion(valor){
    $("#solucion").html(''); 
    var par = document.getElementById('solucion');
    var img = document.createElement('img');
    img.src = 'img/soluciones/'+valor+'.png';
    par.appendChild(img);
   // graficaEcuacion(valor);
}

function graficaEcuacion(valor){
    $("#grafica").html(''); 
    var par = document.getElementById('grafica');
    var img = document.createElement('img');
    img.src = 'img/graficas/'+valor+'.png';
    par.appendChild(img);
}