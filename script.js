

    document.getElementById("input").addEventListener("change",()=>{
    if(document.body.className.indexOf("dark")===-1) {
        document.body.classList.add("dark");
        var tarjetas = document.getElementsByClassName("card");
        for(var i = 0; i < tarjetas.length; i++)
        tarjetas[i].className += " dark";
        var acordeon = document.getElementsByClassName("accordion-body");
        for(var i = 0; i < acordeon.length; i++)
        acordeon[i].className += " dark";
        
    }
    else {
        document.body.classList.remove("dark");
        var tarjetas = document.getElementsByClassName("card");
        for(var i = 0; i < tarjetas.length; i++)
        tarjetas[i].className -= " dark";
        var acordeon = document.getElementsByClassName("accordion-body");
        for(var i = 0; i < acordeon.length; i++)
        acordeon[i].className -= " dark";
        
    }

    // Guardamos el modo en localStorage.

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
    var acordeon = document.getElementsByClassName("accordion-body");
    for(var i = 0; i < acordeon.length; i++)
    acordeon[i].className += " dark";

    document.getElementById('input').checked=true;

}   else {
    document.body.classList.remove("dark");
    var tarjetas = document.getElementsByClassName("card");
    for(var i = 0; i < tarjetas.length; i++)
    tarjetas[i].className -= " dark";
    var acordeon = document.getElementsByClassName("accordion-body");
    for(var i = 0; i < acordeon.length; i++)
    acordeon[i].className -= " dark";

    document.getElementById('input').checked=false;
}


