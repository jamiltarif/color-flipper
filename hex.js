const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let colorHex = "#" ;
    for(i=0; i<6; i++){
         colorHex += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = colorHex;
    color.textContent = colorHex;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}