
function plusCoordinates(modes) {
    if (mode === 0 || modes === 0) {
        if (points >= 9 && points <= 98) {
            $(plus).css('left', '22%')
        } else if (points >= 99 && points <= 998) {
            $(plus).css('left', '25%')
        } else if (points >= 999 && points <= 1000) {
            $(plus).css('left', '28%')
        }

    } else if (mode === 1) {
        if (points >= 5 && points <= 94) {
            $(plus).css('left', '22%')
        } else if (points >= 95 && points <= 994) {
            $(plus).css('left', '25%')
        } else if (points >= 995 && points <= 9994) {
            $(plus).css('left', '28%')
        }
    } else if (mode === 2) {
        if (pointsRec < 9) {
            $(plus).css('left', '19%')
        } else if (pointsRec >= 9 && pointsRec <= 98) {
            $(plus).css('left', '22%')
        } else if (pointsRec >= 99 && pointsRec <= 998) {
            $(plus).css('left', '25%')
        } else if (pointsRec >= 999 && pointsRec <= 1000) {
            $(plus).css('left', '28%')
        }
    } else if (mode === 3) {
        plusCoordinates(0)
    }
}

function checkMode() {
    if (mode === 0) {
        $(pointH).text(points)
        $(orb).css('background-color', 'red')
        $(extraH).text('Набрано: ' + pointsRec)
    } else if (mode === 1) {
        $(pointH).text(points)
        $(orb).css('background-color', 'darkred')
        $(extraH).text('Набрано: ' + pointsRec)
    } else if (mode === 2) {
        $(orb).css('background-color', 'red')
        $(extraH).text('Набрано' + pointsRec)
        $(extraH).text('Время: ' + secondRec)
        secondRec = 15
        $(orb).text('')
        if ($('#field>text:last-child').css('display') === 'none') {
            $('#field>text:last-child').slideDown(200).delay(200).fadeOut(200)
        }
    }

}
