


let wrp = document.getElementById('wrp')
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    wrp.textContent = (hrs > 9 ? hrs : "0" + hrs)
        + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
let b = () => {
    div.classList.remove('black');
    div.classList.add('green');
}
function timer() {
    t = setTimeout(add, 1000);
}

start.onclick = function () {
    timer();
    b();
}

let div = document.getElementById('grs')
stop.onclick = function () {
    clearTimeout(t);
    div.classList.remove('green');
    div.classList.add('red');
}
reset.onclick = function () {
    wrp.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
    div.classList.remove('red');
    div.classList.add('silver');
}