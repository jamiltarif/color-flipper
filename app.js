const colors = ["red", "green", "blue", "rgb(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 

    // for(let i=0;i<colors.length;i++){

    // }
    
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}