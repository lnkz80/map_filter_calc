const numbers = [1,2,3,4,5,6,7,8,9, '.',0, '%'];
const operators = ['/' ,'*', '-', '+', '='];
const screen = document.getElementById("calc-screen");
const btnBlockDiv = document.getElementById("btn-block");
let numberButtonsHTML = '';
let result = ['8','8','+','2','-','5.5'];
let screenShow;
// let c =  eval(1 + operators[0] + 2);
let i='';
const res = result.map(elem=>{
    i+=elem;
});

//!Чужая функция распарсивания массива с выражением
function addbits(s) {
    return (s.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || [])
    .reduce(function(sum, value) {
        return parseFloat(sum) + parseFloat(value);
    });
  }


console.log(addbits(i));



screen.textContent = "0";

numbers.map(el =>{
    numberButtonsHTML += `<button class='calc-num-button'>${el}</button>`;    
});
btnBlockDiv.innerHTML = numberButtonsHTML;


function addNumAtScreen(num){
    
    // result += eval(num);
    screen.textContent = eval(result);
    console.log(result);    
}
const nB = document.querySelectorAll(".calc-num-button");

// console.log(nB);

nB.forEach(item=>{
    item.addEventListener('click', ()=>addNumAtScreen(item.textContent));
});





// const btn = document.getElementById("clk");

// btn.addEventListener('click', ()=>el.classList.add("red"));

