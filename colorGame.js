
var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
            // if(this.textContent = "Easy"){
            //     numSquares = 3;
            // } else{
            //     numSquares = 6;
            // }
            // reset();
    
        });
    }
}

function setupSquares(){
    for(var i = 0; i <squares.length; i++){
        //add click listeners to squres
        squares[i].addEventListener("click", function(){
            //grab color of cliked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedcolor
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
    
        });
    }
}

function reset(){
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //Pick a new random color from array
    pickedColor = pickColor();
    //change color display to match display color
    colorDisplay.textContent =  pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //Change colors of squares
        for(var i = 0; i <squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            }else{
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "darkorange";

}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length ; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length ; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
//     }
// });

resetButton.addEventListener("click", function(){
    reset();
});


//Change color of all squares
function changeColor(color){
    //loop through all squares
    for(var i = 0; i < colors.length; i++){
        
        //change each color to match given order
        squares[i].style.backgroundColor = color;
    }

}
//Color Question
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];

    for(var i = 0; i < num; i++){
        //add num random colors to arraay
        arr.push(randomColor());
    }
    //retutn the array
    return arr;
}

function randomColor(){
    //red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //green from 0 -255
    var g = Math.floor(Math.random() * 256);
    //blue from 0 -255
    var b = Math.floor(Math.random() * 256);
    "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
