// Scene
var pointH = document.getElementById('pointH');
var recordH = document.getElementById('recordH');
var extraH = document.getElementById('extraH');
var plus = document.getElementsByClassName('plus');
var mode0 = document.getElementById('mode0');
var mode1 = document.getElementById('mode1');

var plus1 = document.getElementById('plus1');
var plus2 = document.getElementById('plus2');
var plus3 = document.getElementById('plus3');
var plus4 = document.getElementById('plus4');
var plus5 = document.getElementById('plus5');
// Scene


var div = document.getElementById('div');
var orb = document.getElementById('orb');
var coordinatesDiv = {x: Number(localStorage.getItem('coordinatesDivX')), y: Number(localStorage.getItem('coordinatesDivY'))} || {x: 360, y: 300};
var coordinatesOrb = {x: 720, y: 600};
var points = Number(localStorage.getItem('points'));
if (localStorage.getItem('points') === null) {
    points = 750;
    localStorage.setItem('points', points)
}
var pointsRec = 0;
var mode = 0; // 0 - 2sec, 1 - 1sec, 2 - record, 3 - 0sec

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
