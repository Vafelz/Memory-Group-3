"use strict";

var myapp = myapp || {};

myapp.Card=function(a) {
    a=$(a);
    this.img=$(a.find("img")[0]);
    this.aId=a.attr("id");
    };

    myapp.Card.prototype.isBlankOrRevealed=function() {

        return this.aId===imageToCompare.aId;
    };
    
