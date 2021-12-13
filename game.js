"use strict";
$(document).ready(() => {
  let settings = myapp.settings;
  let scores = myapp.scores;
  let cards = myapp.cards;

  $("#tabs").tabs();
var name,percent,lastCard,isFirst=true;
$("#cards").html(cards.createCardsHtml());
       
  name = settings.getPlayerName();
  $("#player_name").val(name);
  $("#num_cards").val(settings.getNumberOfImages()*2);
if(name!=""){
  $("#player").text("Player:"+name);
}
$("#high_score").text(scores.displayHighScore(name));
$("#cards").find("a").each(function() {
  $(this).click(function(evt){
    evt.preventDefault=new myapp.Card(this);
    if(currentCard.isBlankOrRevealed()) {return;}
    cards.fadeCardFlip(currentCard.img, currentCard.aId, 500);
    if(isfirst) {
      lastCard=currentCard;
      isfirst=false;
      }
      else {scores.incrementTurn();
      if(currentCard.equals(lastCard)){
        scores.incrementCorrectTurn();
setTimeout(function(){
  cards.slideCardFlip(currentCard.img,cards.blankSrc,500);
  cards.slideCardFlip(lastCard.img, cards.blankSrc,500);
}, 1000);

if(scores.allCardsRemoved(cards.imageCount)){
  setTimeout(function(){
    percent=scores.calculatePercent();
    $("#correct").text("Correct:" + percent + "%");
    name=settings.getPlayerName();
    scores.compareScores(name,percent);
    $("#high_score").text(scores.displayHighScore(name));
  },1500);
  }
  } else {
    setTimeout(function(){
  cards.slideCardFlip(currentCard.img,cards.blankSrc,500);
  cards.slideCardFlip(lastCard.img, cards.defaultSrc,500);
}, 2000);
}
isfirst=true;
}
});
});
$("#save_settings").click(function() {
settings.setPlayerName($("#player_name").val());
settings.setNumberOfImages(parseInt($("#num_cards").val()) /2 );
location.reload();
});
});  




 






