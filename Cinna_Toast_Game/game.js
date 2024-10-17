
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
    var pop = new Audio('popg.mp3');
    var buzz = new Audio('buzzer.mp3');
    let Nscor;
    let Bscor;
    let fnum;
    let Snum;
    const ntoast = document.getElementById("toast");
    const btoast = document.getElementById("toast_burnt");

function Gscore(){
    pop.play();
 Nscor = Number(document.getElementById("Ns").textContent);
 Nscor++;
 document.getElementById("Ns").textContent = Nscor;
}
function Bscore(){
    buzz.play();
 Bscor = Number(document.getElementById("Bs").textContent)
 Bscor++;
 document.getElementById("Bs").textContent = Bscor;
}

function start(){
    fnum = getRandomInt(1000);
    Snum = getRandomInt(1000);
    let eqa  = `${fnum} + ${Snum} = ?`;
    document.getElementById("prob").textContent = eqa;
}

document.getElementById("begin").onclick = function(){
    document.getElementById("begin").hidden = true
    document.getElementById("abox").hidden = false
    document.getElementById("prob").hidden = false
    start();
}

document.getElementById("abox").addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
    let answer = Number(document.getElementById("abox").value);
    if(answer === fnum + Snum){
      ntoast.classList.add("toasta");
        ntoast.addEventListener('animationend', () => {
            ntoast.classList.remove('toasta');
            start();
      }, { once: true });
      Gscore();
    }
    else{
      btoast.classList.add("toasta");
        btoast.addEventListener('animationend', () => {
            btoast.classList.remove('toasta');
            start();
      }, { once: true });
    Bscore();
    }
  }
});
