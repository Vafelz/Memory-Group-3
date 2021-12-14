"use strict";

$(document).ready(() => {
    $('#player_name').focus()
    
    let settings = gamesApp.settings
    let scores = gamesApp.scores
    let cards = gamesApp.cards

    $("#tabs").tabs()

    let name = ""
    let numberOfCards = ""

    document.getElementById("high_score").innerHTML = localStorage.getItem("highScore")


    name = settings.getPlayerName()
    numberOfCards = settings.getNumberOfImages()

    $("#player_name").val(name)
    $("#num_cards").val(parseInt(numberOfCards) * 2)

    $("#save_settings").click(() => {
        const playerName = $("#player_name").val()
        const numberOfImages = $("#num_cards").val()

        settings.setPlayerName(playerName);
        settings.setNumOfImages(numberOfImages / 2)
        window.location.reload()
    })
    $("ul[role='tablist'] li").click(function() {
        if ($(this).find('a').text() == 'Play Game') {
            $('#player').html(name + '<br/>' + numberOfCards)
        }
    })
    var CheckImages = []
    $(document).on('click', '.back', function() {
        $(this).addClass('selected')
        var SelectFlip = $(this).siblings().attr('src')
        CheckImages.push(SelectFlip)
        if ($('.selected').length == 2) {
            if (CheckImages[0] === CheckImages[1]) {

                var getScore = $('#correct').text();

                if (getScore == '') {
                    $('#correct').text(scores.score(0))
                } else {
                    $('#correct').html(scores.score(parseInt(getScore)))
                }
                if (settings.getNumberOfImages() == parseInt($('#correct').text())) {
                    alert('Congratulations! You win!')
                    var HighScore = $('#correct').text()
                    HighScore = HighScore / numberOfCards
                    HighScore = HighScore * 100
                    localStorage.setItem('highScore', HighScore)
                    document.getElementById("high_score").innerHTML = localStorage.getItem("highScore")
                }
                setTimeout(() => {
                    $('.selected').parents().addClass('matched')
                }, 400)
                $('.selected').parents().addClass('hide');
                setTimeout(() => {
                    $('.selected').removeClass('selected')
                }, 500)

                CheckImages = []
            } else {
                setTimeout(() => {
                    $('.selected').removeClass('selected')
                }, 500)
                CheckImages = []
            }
        }
    })
})