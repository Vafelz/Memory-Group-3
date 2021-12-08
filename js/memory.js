"use strict"

let row1 = document.querySelector('#row1');
let row2 = document.querySelector('#row2');
let row3 = document.querySelector('#row3');
let row4 = document.querySelector('#row4');
let row5 = document.querySelector('#row5');


let cards = document.querySelector('#cards');
let tab = document.querySelector('#tabs-1');


let no_of_cards = document.querySelector('#num_cards');


let settings = document.querySelector('#save_settings');

settings.addEventListener('click', () => {
    let anchors = [];
    let currentNoOfCards = no_of_cards.options[no_of_cards.selectedIndex].text;
    for (let i = 1; i <= currentNoOfCards; i++) {
        let a = document.createElement('a');
        a.href = '#';
        a.id = `images/card_${i}.png`;
        let img = document.createElement('img');
        img.src = 'images/back.png';
        img.width = 100;
        img.height = 100;
        a.appendChild(img);

        anchors.push(a);
    }

    row1.innerHTML = "";
    row2.innerHTML = "";
    row3.innerHTML = "";
    row4.innerHTML = "";
    row5.innerHTML = "";

    for (let index = 0; index < anchors.length; index++) {

        if (index < 8) {
            row1.appendChild(anchors[index]);
        } else if (index >= 8 && index < 16) {
            row2.appendChild(anchors[index]);
        } else if (index >= 16 && index < 24) {
            row3.appendChild(anchors[index]);
        } else if (index >= 24 && index < 32) {
            row4.appendChild(anchors[index]);
        } else if (index >= 32 && index < 40) {
            row5.appendChild(anchors[index]);
        } else {
            row6.appendChild(anchors[index]);
        }
    }

    cards.appendChild(row1);
    cards.appendChild(row2);
    cards.appendChild(row3);
    cards.appendChild(row4);
    cards.appendChild(row5);

    tab.appendChild(cards);



});