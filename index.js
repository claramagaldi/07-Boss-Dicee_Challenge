
function dice() {
  return Math.floor(Math.random()*6) + 1;
}

function image(randomNumber) {
  return "images/dice" + randomNumber + ".png";
}

var randomNumber1 = dice();
document.querySelectorAll("img")[0].setAttribute("src", image(randomNumber1));
var randomNumber2 = dice();
document.querySelectorAll("img")[1].setAttribute("src", image(randomNumber2));

if(randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
