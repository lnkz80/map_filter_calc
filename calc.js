const numbers = [1,2,3,4,5,6,7,8,9, '.',0, '%'];
const operators = ['/' ,'*', '-', '+', '='];
const screen = document.getElementById("calc-screen");
const btnBlockDiv = document.getElementById("btn-block");
let numberButtonsHTML = '';
let result;
let screenShow;
// let c =  eval(1 + operators[0] + 2);

screen.textContent = "123456789";

numbers.map(el =>{
    numberButtonsHTML += `<button class='calc-num-button'>${el}</button>`;    
});
btnBlockDiv.innerHTML = numberButtonsHTML;

function addNumAtScreen(num){
    screen.textContent = num;
    // console.log(num);
    
}
const nB = document.querySelectorAll(".calc-num-button");

// console.log(nB);

nB.forEach(item=>{
    item.addEventListener('click', ()=>addNumAtScreen(item.textContent));
});





// const btn = document.getElementById("clk");

// btn.addEventListener('click', ()=>el.classList.add("red"));

