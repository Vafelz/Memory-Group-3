"use strict"

let funcs = memGame.settings

const images = [
	'../img/card_1.png',
	'../img/card_2.png',
	'../img/card_3.png',
	'../img/card_4.png',
	'../img/card_5.png',
	'../img/card_6.png',
	'../img/card_7.png',
	'../img/card_8.png',
	'../img/card_9.png',
	'../img/card_10.png',
	'../img/card_11.png',
	'../img/card_12.png',
	'../img/card_13.png',
	'../img/card_14.png',
	'../img/card_15.png',
	'../img/card_16.png',
	'../img/card_17.png',
	'../img/card_18.png',
	'../img/card_19.png',
	'../img/card_20.png',
	'../img/card_21.png',
	'../img/card_22.png',
	'../img/card_23.png',
	'../img/card_24.png',
]

if(funcs.getNumOfImgs()){
	$('#player').append(funcs.getPlayerName())
	let shuffledImgs  = funcs.shuffleArray(images,funcs.getNumOfImgs())
	funcs.startGame(shuffledImgs)
}