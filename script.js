var timer = 60;
var score = 0;
var rnum = 0;

function makebubble() {
    var bubble = "";

for (i = 1; i <= 85; i++){
    var rn = Math.floor(Math.random() * 10);
    bubble += `<div class="buble">${rn}</div>`
}

document.querySelector(".panel-bottom").innerHTML = bubble;
}

function runtimer() {
    var timestop = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timerval").textContent = timer;
        }
        else {
            clearInterval(timestop);
            document.querySelector(".panel-bottom").innerHTML = `<h1>GAME OVER</h1>`
        }
    }, 1000);
}

function getNewHit() {
    rnum = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rnum;
}

function yourscore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".panel-bottom").addEventListener("click", function (dets) {
    var clickednum = (Number(dets.target.textContent));
    if (clickednum === rnum) {
        yourscore();
        getNewHit();
        makebubble();
    }
});


getNewHit();

runtimer();

makebubble();