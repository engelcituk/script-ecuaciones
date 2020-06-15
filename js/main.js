function getValueHomogenea(){
    $("#ecuacion").html(''); 

    d = document.getElementById("ecHomogenea").value;
    if (!isNaN(d)) {
        var par = document.getElementById('ecuacion');
        var img = document.createElement('img');
        img.src = 'img/ecuaciones/'+d+'.png';
        par.appendChild(img);
    }else {
        $("#ecuacion").html('<span class="badge badge-danger">Elija ecuacion</span>'); 
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
    }else {
        $("#ecuacion").html('<span class="badge badge-danger">Elija ecuacion</span>'); 
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
    }else {
        $("#ecuacion").html('<span class="badge badge-danger">Elija ecuacion</span>'); 
    }
}

function solucionEcuacion(valor){
    
}