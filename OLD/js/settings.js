"use strict";

var gamesApp = gamesApp || {};

gamesApp.settings = {
    getPlayerName: function() {
       return sessionStorage.playerName || "";
    },

    setPlayerName: function(name) {
        console.log(name, sessionStorage)
        sessionStorage.playerName = name;
    },

    getNumberOfImages: function() {
        return parseInt(sessionStorage.numImages) || 24;
    },

    setNumOfImages: function(number) {
        sessionStorage.numImages = number || 24
    },

    shuffleArray: function(array,num){
        console.log(num)
        var y = []
        var x = []
        for (let i = 0; i < num; i++) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            y.push(temp);
            if(i==(num-1)){
                for (let k = 0; k < y.length; k++) {
                    var j = Math.floor(Math.random() * (k + 1));
                    var temp = array[k];
                    array[k] = array[j];
                    array[j] = temp;
                    x.push(temp);
                }
            }
        }
        return [y,x]
    },
    startGame: function(array){
        for (var i = 0; i < array.length; i++) {
            var img = document.createElement("img");
            var placeholderImage = document.createElement("img");
            var placeholder = document.createElement('div');
            placeholderImage.src = './img/back.png';
            placeholderImage.classList.add('back')
            img.src = './images/' + array[i];
            placeholder.append(placeholderImage,img)
            $('#demo').append(placeholder);
        }
    }
}