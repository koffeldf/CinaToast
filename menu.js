var audio = new Audio('Start.mp3');

document.getElementById("SB").onclick = function(){
    audio.play();
    audio.onended = function() {
        window.location.replace("game.html");
    };
}

