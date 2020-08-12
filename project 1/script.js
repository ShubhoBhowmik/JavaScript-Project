const colorBtn=document.querySelector('.bgcolorBtn');
const bodyBcg=document.querySelector('body');

// array of random colors
var colors=['red','green','blue','yellow'];

colorBtn.addEventListener('click',changeColor);

// function for click event
// 1. click on the btn 
// 2. select the random color 
// 3. setting that color to body 

function changeColor(){
    //Math.random(): random numbers between 0 and 1

    var randomClr=Math.floor(Math.random()*colors.length);
    alert(randomClr);
    //randomClr will be a random number between 0 and 3
    bodyBcg.style.backgroundColor=colors[randomClr];
}



