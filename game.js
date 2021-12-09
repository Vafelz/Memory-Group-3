"use strict";

$(document).ready(() => {
  let settings = gamesApp.settings;
  let scores = gamesApp.scores;
  let cards = gamesApp.cards;

  $("#tabs").tabs();

  let name = "",
    numberOfCards = "";
    
  //display player name and number of cards
  name = settings.getPlayerName();
  numberOfCards = settings.getNumofImages();

  $("#player_name").val(name);
  $("#num_cards").val(parseInt(numberOfCards) * 2);

  $("#save_settings").click(() => {
    const playerName = $("#player_name").val();
    const numberOfImages =  $("#num_cards").val();

    // save settings
    settings.setPlayerName(playerName);
    settings.setNumOfImages(numberOfImages/2);

    window.location.reload();
  });
});