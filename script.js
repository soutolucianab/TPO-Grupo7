

    document.getElementById("input").addEventListener("change",()=>{
    if(document.body.className.indexOf("dark")===-1) {
        document.body.classList.add("dark");
        var tarjetas = document.getElementsByClassName("card");
        for(var i = 0; i < tarjetas.length; i++)
        tarjetas[i].className += " dark";
    }
    else {
        document.body.classList.remove("dark");
        var tarjetas = document.getElementsByClassName("card");
        for(var i = 0; i < tarjetas.length; i++)
        tarjetas[i].className -= " dark";
        
    }

    // Guardamos el modo en localstorage.

    if (document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});

//Obtener el modo actual

if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    var tarjetas = document.getElementsByClassName("card");
    for(var i = 0; i < tarjetas.length; i++)
    tarjetas[i].className += " dark";
    document.getElementById('input').checked=true;

}   else {
    document.body.classList.remove("dark");
    var tarjetas = document.getElementsByClassName("card");
    for(var i = 0; i < tarjetas.length; i++)
    tarjetas[i].className -= " dark";
    document.getElementById('input').checked=false;
}


