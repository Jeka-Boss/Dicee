var random_first = Math.ceil(Math.random() * 6);
var random_second = Math.ceil(Math.random() * 6);

document.querySelector(".img1").setAttribute("src","images/dice" + random_first + ".png")
document.querySelector(".img2").setAttribute("src","images/dice" + random_second + ".png")

var result;
if(random_first > random_second){
result = "Player 1 wins!"
} else if(random_second > random_first){
    result = "Player 2 wins!";
}else{
    result = "Draw!"
}


 

document.querySelector("h1").textContent = result;

