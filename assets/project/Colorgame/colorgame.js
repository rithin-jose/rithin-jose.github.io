var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector(".easyBtn")
// var hardBtn = document.querySelector(".hardBtn")
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i<modeButtons.length; i++){
  modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
    reset();
  });
}
// easyBtn.addEventListener("click",function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = randomColor();
//
//   for(var i = 0;i < squares.length;i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click",function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6
//   colors = generateRandomColors(numSquares);
//   pickedColor = randomColor();
//
//   for(var i = 0;i < squares.length;i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function(){
    reset();
});

for(var i = 0;i < squares.length; i++){

  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?"
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
      resetButton.textContent="new colors";
    }
  });
}

colorDisplay.textContent = pickedColor;

function changeColor(color){
  for(var i = 0;i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function randomColor(){
  var ran = Math.floor(Math.random() * colors.length);
  return colors[ran];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0;i < num; i++){
    arr.push(rgbColor());
  }
  return arr;
}

function rgbColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = randomColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0;i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New color"
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
}
