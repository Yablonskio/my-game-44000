// Scene
let pointH = document.getElementById('pointH');
let recordH = document.getElementById('recordH');
let extraH = document.getElementById('extraH');
let plus = document.getElementsByClassName('plus');
let mode0 = document.getElementById('mode0');
let mode1 = document.getElementById('mode1');

let plus1 = document.getElementById('plus1');
let plus2 = document.getElementById('plus2');
let plus3 = document.getElementById('plus3');
let plus4 = document.getElementById('plus4');
let plus5 = document.getElementById('plus5');
// Scelet

let div = document.getElementById('div');
let orb = document.getElementById('orb');
let coordinatesDiv = {x: Number(localStorage.getItem('coordinatesDivX')), y: Number(localStorage.getItem('coordinatesDivY'))} || {x: 360, y: 300};
let coordinatesOrb = {x: 720, y: 600};
let points = Number(localStorage.getItem('points'));
if (localStorage.getItem('points') === null) {
    points = 750;
    localStorage.setItem('points', points)
}
let pointsRec = 0;
let mode = 0; // 0 - 2sec, 1 - 1sec, 2 - record, 3 - 0sec


// по сути не нужный listener пусть будет :)
window.addEventListener('load', function () {
    alert('Управление стрелочки ли wasd; Игра на рекорд - enter ')
    $(div).css('left', coordinatesDiv.x).css('top', coordinatesDiv.y)
    $(div).css('background', localStorage.getItem('background'))


    checkMode()
    plusCoordinates()
    $(pointH).text(points)
    $(recordH).text(pointsTake)
    $(div).css('display', 'flex')
    $('#game').css('display', 'grid')
    $('#shop').css('display', 'flex')
    spawn()
    respawn()
});
