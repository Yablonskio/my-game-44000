let divShop = document.getElementsByClassName('div')

$(divShop).click(function () {

    if (points >= 150 && this.style.backgroundColor !== div.style.background) {
        points = points - 150;
        localStorage.setItem('points', points)
        $(pointH).text(points)
        $(div).fadeOut(50)
            .fadeIn(50).css('background', $(this).css('background'));
        localStorage.setItem('background', $(this).css('background'));
    } else {
        if ($(this).children('text').css('display') === 'none') {
            $(this).children('text').fadeIn(150).fadeOut(350);
        }
    }
});


$('#theme>div').click(function () {
    if (points >= 500) {
        if ($('body').css('background-color') !== $(this).css('background-color')) {
            points -= 500;
            localStorage.setItem('points', points)
            $(pointH).text(points);

            switch (this.id) {
                case 'dark':
                    $('body').css('background-color', '#111111');
                    $('#headerShop').css('background', 'linear-gradient(#111111 10%, #d7d7d7 )');
                    $('#field').css('border-color', '#212121');
                    $('#result').css('background-color', '#171717');
                    $('#result').css('color', '#c5c5c5');
                    $('#colors').css('background-color', '#171717');
                    $('#theme').css('background-color', '#171717');
                    $('#mode').css('background-color', '#171717');
                    $('#mode').css('color', 'white');
                    break
                case 'grey':
                    $('body').css('background-color', '#212121');
                    $('#headerShop').css('background', 'linear-gradient(#212121 10%, #d7d7d7 )');
                    $('#field').css('border-color', '#d7d7d7');
                    $('#result').css('background-color', '#333333');
                    $('#result').css('color', '#c5c5c5');
                    $('#colors').css('background-color', '#333333');
                    $('#theme').css('background-color', '#333333');
                    $('#mode').css('background-color', '#333333');
                    $('#mode').css('color', '#c5c5c5');
                    break
                case 'white':
                    $('body').css('background-color', '#d7d7d7');
                    $('#headerShop').css('background', 'linear-gradient(#d7d7d7 10%, #212121 )');
                    $('#field').css('border-color', '#2f2f2f');
                    $('#result').css('background-color', '#cbcbcb');
                    $('#result').css('color', '#171717');
                    $('#colors').css('background-color', '#cbcbcb');
                    $('#theme').css('background-color', '#cbcbcb');
                    $('#mode').css('background-color', '#cbcbcb');
                    $('#mode').css('color', '#171717');
                    break
            }
        }
        localStorage.setItem('colorBody', this.id)
    } else {
        if ($(this).children('text:first-child').css('display') === 'flex') {
            $(this).children('text:first-child').fadeOut(100).css('display', 'none');
            $(this).children('text:last-child').delay(100).fadeIn(200).fadeOut(200);
            $(this).children('text:first-child').delay(500).fadeIn(200, function () {
                $(this).children('text:first-child').css('display', 'flex');
            });
        }
    }
});

$(mode0).click(() => {
    mode = 0;
    checkMode()
})
$(mode1).click(() => {
    if (pointsTake >= 12) {
        mode = 1;
        checkMode()
    }
})
