var secNeed = 0;
var secToRespawn = 0;
var secondRec = 15;
var pointsTake = Number(localStorage.getItem('TakeRecordPoint')) || 0;
let pointA = points + 5;
function eat() {
    plusCoordinates(mode)
    if (mode === 0) {
        $(plus1).slideDown(120)
        points++;
        $(pointH).text(points)
        localStorage.setItem('points', points)
    } else if (mode === 1) {
        $(plus1).slideDown(200)
        $(plus2).slideDown(300)
        $(plus3).slideDown(400)
        $(plus4).slideDown(550)
        $(plus5).slideDown(700)
        pointA = points + 5;
        let intervalCalculatePoints = setInterval(() => {
            if (points === pointA) {
                localStorage.setItem('points', points)
                clearInterval(intervalCalculatePoints);
            } else {
                if (points <= 3) {
                    points++;
                    $(pointH).text(points)
                } else {
                    let delayPoints = setTimeout(() => {
                        points++;
                        $(pointH).text(points)
                    }, 50)
                }
            }
        }, 100)
    } else if (mode === 2) {
        $(plus1).slideDown(120)
        pointsRec++;
        $(pointH).text(pointsRec)
    }
    spawn()
    secToRespawn = secNeed;
    $(plus).delay(120).fadeOut(80)
}


function spawn() {
    $(orb).text('')
    let oldCoordinatesOrb = {x: coordinatesOrb.x, y: coordinatesOrb.y}
    coordinatesOrb.x = Math.floor(Math.random() * 13) * 60;
    coordinatesOrb.y = Math.floor(Math.random() * 10) * 60;
    if (coordinatesDiv.x === coordinatesOrb.x &&
        coordinatesDiv.y === coordinatesOrb.y) {
        spawn()
    } else if (oldCoordinatesOrb.x === coordinatesOrb.x &&
        oldCoordinatesOrb.y === coordinatesOrb.y) {
        spawn()
    }
    $(orb).css('left', coordinatesOrb.x).css('top', coordinatesOrb.y);
}

function respawn() {
    setInterval(() => {
        if (mode === 0) {
            if (secToRespawn === 0) {
                secNeed = 2
                secToRespawn = secNeed;

                spawn()
            } else {
                secToRespawn--;
                $(orb).text(secToRespawn + 1)

            }


        } else if (mode === 1) {
            if (secToRespawn === 0) {
                secNeed = 1
                secToRespawn = secNeed;

                spawn()
            } else {
                secToRespawn--;
                $(orb).text(secToRespawn + 1)

            }
        } else if (mode === 2) {
            if (secondRec !== 0) {

                secondRec--;
                $(extraH).text('Время: ' + secondRec)
            } else {
                if (pointsRec > pointsTake) {
                    $('#confetti').slideDown(400).delay(3000).fadeOut(400)
                    pointsTake = pointsRec;
                    $(recordH).text(pointsTake)
                    localStorage.setItem('TakeRecordPoint', pointsTake)
                }
                $(extraH).text('Набрано: ' + pointsRec)
                $(pointH).text(points)
                mode = oldmode
                checkMode()
            }
        }
    }, 1000)
}



