let tela = document.getElementsByTagName("canvas")[0].getContext("2d");

let circle = {
    x: 50,
    y: 50,
    raio: 50,
    beginning: 0,
    ending: 2 * Math.PI
}
function drawCircle(c) {

    tela.beginPath();
    tela.rect(0, 0, 500, 500);
    tela.fillStyle = "white";
    tela.fill();

    tela.beginPath();
    tela.arc(c.x, c.y, c.raio, c.beginning, c.ending);
    tela.strokeStyle = "red";
    tela.fillStyle = "blue";
    tela.fill();
    tela.stroke();
}
let a = 0;
let b = 1;
let c = 0;
let d = 1;
setInterval(function () {
    drawCircle(circle);
    if (a > 450) {
        b = -2;
    }
    if (a < 50) {
        b = 3;
    }
    a += b;
    if (c > 450) {
        d = -1;
    }
    if (c < 50) {
        d = 2;
    }
    c += d;
    circle.x = a;
    circle.y = c;
})

