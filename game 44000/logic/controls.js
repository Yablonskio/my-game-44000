let field = document.getElementById('field')
let delay = 0;
var oldmode;


function coloredBorderField() {
    if (delay !== 1) {
        delay = 1;
        let fieldColorBorder = $(field).css('border-color');
        $(field).css('border-color', 'white')
        setTimeout(() => {
            $(field).css('border-color', fieldColorBorder)
            delay = 0;
        }, 100)
    }
}
function checkEat() {
    if (coordinatesDiv.x === coordinatesOrb.x &&
        coordinatesDiv.y === coordinatesOrb.y) {
        eat()

    }
}
document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        // лево
        case 37:
        case 65:
            if (coordinatesDiv.x !== 0) {
                coordinatesDiv.x = coordinatesDiv.x - 60
                $(div).css('left', coordinatesDiv.x)
                checkEat()
            } else {
              coloredBorderField()
            }
            break
        // право
        case 39:
        case 68:
            if (coordinatesDiv.x !== 720) {
                coordinatesDiv.x = coordinatesDiv.x + 60
                $(div).css('left', coordinatesDiv.x)
                checkEat()
            } else {
                coloredBorderField()
            }

            break
        // верх
        case 38:
        case 87:
            if (coordinatesDiv.y !== 0) {
                coordinatesDiv.y = coordinatesDiv.y - 60
                $(div).css('top', coordinatesDiv.y)
                checkEat()
            } else {
                    coloredBorderField()
            }

            break
        // низ
        case 40:
        case 83:
            if (coordinatesDiv.y !== 600) {
                coordinatesDiv.y = coordinatesDiv.y + 60
                $(div).css('top', coordinatesDiv.y)
                checkEat()
            } else {
                coloredBorderField()
            }

            break
        // enter
        case 13:
            if (mode !== 2) {
                oldmode = mode;
                mode = 2;
                checkMode()
            }

            break
    }
    localStorage.setItem('coordinatesDivX', coordinatesDiv.x)
    localStorage.setItem('coordinatesDivY', coordinatesDiv.y)
});
