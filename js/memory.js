"use strict"

$(document).ready(() => {
	$('#player_name').focus()

	let settings = memGame.settings
	let scores = memGame.scores
	let cards = memGame.cards

	$("#tabs").tabs()

	let name = ""
	let numOfCards = ""

	$("high_score").innerHTML = localStorage.getItem("highScore")

	name = settings.getPlayerName()
	numOfCards = settings.getNumberOfImages()

	$("#player_name").val(name)
	$("#num_cards").val(parseInt(numOfCards) * 2)

	$("#save_settings").click(() => {
		const playerName = $("#player_name").val()
		const numOfImgs = $("#num_cards").val()

		settings.setPlayerName(playerName)
		window.location.reload()
	})

	$("ul[role='tablist'] li").click(function() {
		if ($(this).find('a').text() == 'Play Game') {
			$('#player').html(name)
		}
	})
	var checkImgs = []

	$(document).on('click', '.back', function() {
		$(this).addClass('selected')
		var selectFlip = $(this).siblings().attr('src')
		checkImgs.push(selectFlip)
		if ($('.selected').length == 2) {
			if (checkImgs[0] === checkImgs[1]) {
				var getScore = $('#correct').text()

				if (getScore == '') {
					$('#correct').text(scores.score(0))
				} else {
					$('#correct').html(scores.score(parseInt(getScore)))
				}

				if (settings.getNumberOfImages() == parseInt($('#correct').text())) {
					alert('Congratulations! You win!')
					var highScore = $('#correct').text()
					highScore = highScore / numOfCards
					highScore = highScore * 100
					localStorage.setItem('highScore', highScore)
					$("high_score").innerHTML = localStorage.getItem("highScore")
				}

				setTimeout(() => {
					$('.selected').parents().addClass('matched')
				}, 400)
				$('.selected').parents().addClass('hide')

				setTimeout(() => {
					$('.selected').removeClass('selected')
				}, 500)
				checkImgs = []

			} else {
				setTimeout(() => {
					$('.selected').removeClass('selected')
				}, 500)
				checkImgs = []
			}
		}
	})
})