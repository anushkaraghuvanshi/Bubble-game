var timer=60;
var score=0;
var hitrn=0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}

function makeBubble(){
    var clutter = "";

for(i=1;i<=133;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".pbtm").innerHTML = clutter;
}

function runtimer(){
    var timerInt= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML= `<h1>Game Over<h1>`;
        }
    },1000)
}

function hitButton(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent= hitrn;
}

document.querySelector(".pbtm").addEventListener("click", function(dets){
    var clickNumber=(Number(dets.target.textContent));
    if(clickNumber === hitrn){
        increaseScore();
        makeBubble();
        hitButton();
    }
})

hitButton();
runtimer();
makeBubble();