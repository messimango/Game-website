var jumper = document.getElementById("jumper");
var hurdles = document.getElementById("hurdles");


function jump(){
        if(jumper.classList !="up"){
        jumper.classList.add("up");
    }
    setTimeout(function(){
        jumper.classList.remove("up");
    },800);
}


var dead = setInterval(function() {
    var jumperTop = parseInt(window.getComputedStyle(jumper).getPropertyValue("top"));
    var hurdlesLeft = parseInt(window.getComputedStyle(hurdles).getPropertyValue("left"));

    if(hurdlesLeft<20 && hurdlesLeft>0 && jumperTop>= 395) {
        hurdles.style.animation = "none";
        hurdles.style.display = "none";
    }
}, 10);