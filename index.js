//alert("We are right on point");

var ourList = ["Ben", "Gideon", "Daniel", "Walex", "Jane", "Joanna"];

var randomNum1 = Math.floor(Math.random()*7);

var randomNum2 = Math.floor(Math.random()*7);

var randomNum3 = Math.floor(Math.random()*7);

var winnerOne = ourList[randomNum1];

var winnerTwo = ourList[randomNum2];

var winnerThree = ourList[randomNum3];

if(randomNum1 === randomNum2){
    randomNum1 = Math.floor(Math.random()*7);
    winnerOne = ourList[randomNum1];
}

if(randomNum1 === randomNum3){
    randomNum3 = Math.floor(Math.random()*7);
    winnerThree = ourList[randomNum3];
}

if(randomNum2 === randomNum3){
    randomNum2 = Math.floor(Math.random()*7);
    winnerTwo = ourList[randomNum2];
}



$(document).ready(function(){
$("button").on("click", function winnerList(){
    $(".winner1").text(winnerOne).css("text-align", "center");
    $(".winner2").text(winnerTwo).css("text-align", "center");
    $(".winner3").text(winnerThree).css("text-align", "center");
    
})

})

window.onload = winnerList();