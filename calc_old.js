const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "C"];
const operators = ["/", "*", "-", "+", "="];
const screen = document.getElementById("calc-screen");
const btnBlockNumbersDiv = document.getElementById("btn-block-numbers");
const btnBlockOpsDiv = document.getElementById("btn-block-operations");
let numberButtonsHTML = "";
let opsButtonsHTML = "";
let result = [];
screen.textContent = "0";
let exprRes;

//Render buttons with Numbers
numbers.map((el) => {
  numberButtonsHTML += `<button class='calc-num-button'>${el}</button>`;
});
btnBlockNumbersDiv.innerHTML = numberButtonsHTML;

//Render buttons with Operators
operators.map((el) => {
  el === "=" ? (bgColor = "bg-blue") : (bgColor = "");
  opsButtonsHTML += `<button class='calc-ops-button ${bgColor}'>${el}</button>`;
});
btnBlockOpsDiv.innerHTML = opsButtonsHTML;

const nB = document.querySelectorAll(".calc-num-button");
const oB = document.querySelectorAll(".calc-ops-button");
const allButtons = [...nB, ...oB];

//Add Event Listeners on Number Button
nB.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "C") {
      screen.textContent = "0";
      result.length = 0;
    } else {
      if (result.length == 0) {
        screen.textContent == 0
          ? (screen.textContent = item.textContent)
          : (screen.textContent += item.textContent);
      } else {
        if (result[0]) {
          screen.textContent = item.textContent;
          result[0] = false;
        } else {
          screen.textContent += item.textContent;
        }
      }
    }
  });
});

//Add Event Listeners on Operation Button
oB.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "=") {
      executeExpr();
    } else {
      result.length == 0 ? result.push(true) : (result[0] = true);
      result.push(screen.textContent, item.textContent);
    }
  });
});

function operations() {}

function executeExpr() {
  // //!Неверно считает
  // result.push(screen.textContent);
  // console.log(result);
  // result.shift();
  // exprRes = math.evaluate(result.join(""));
  // screen.textContent = exprRes;
  // console.log(result);
  // result.length = 0;
  // result.unshift(true);
  // result.push(exprRes);
  // console.log(result);
}

//!Чужая функция распарсивания строки из массива с выражением (только + и -)
// function addbits(s) {
//     return (s.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || [])
//     .reduce(function(sum, value) {

//         return parseFloat(sum) + parseFloat(value);

//     });
//   }
//   addbits(exprString);
// console.log(Object.keys(screen));
