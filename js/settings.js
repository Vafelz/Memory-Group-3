"use strict"

var memGame = memGame || {}

memGame.settings = {
	// Get and set player name
	getPlayerName: function() {
		return sessionStorage.playerName || ''
	},
	setPlayerName: function(name) {
		console.log(name, sessionStorage)
		sessionStorage.setPlayerName = name
	},

	// Get and set number of images
	getNumOfImgs: function() {
		return parseInt(sessionStorage.numImgs) || 24
	},
	setPlayerName: function(name) {
		sessionStorage.numImgs = number || 24
	},

	// Shuffles cards
	shuffleArray: function(array, num) {
		console.log(num)
		var x = []
		var y = []

		for (let i = 0; i < num; i++) {
			var j = Math.floor(Math.random() * (i + 1))
			var temp = array[i]
			array[i] = array[j]
			array[j] = temp
			y.push(temp)

			if (i == (num - 1)) {
				for (let k = 0; k < y.length; k++) {
					var j = Math.floor(Math.random() * (k + 1))
					var temp = array[k]
					array[k] = array[j]
					x.push(temp)
				}
			}
		}
		// for (let i = 0; i < num.length * 2; i++) {
		//	var rand = Math.floor(Math.random() * num.length)
		//	$('#cards' + i).attr('src', arr[rand])
		//	console.log(rand)
		// }
		return [y, x]
	},

	startGame: function(array) {
		for (let i = 0; i < array.length; i++) {
			var img = document.createElement('img')
			var placeholderImg = document.createElement('img')
			var placeholder = document.createElement('div')
			placeholderImg.src = './img/back.png'
			placeholderImg.classList.add('back')
			img.src = './img/' + array[i]
			placeholder.append(placeholderImg, img)
			$('#demo').append(placeholder)
		}
	}
}