const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "C"];
const operators = ["/", "*", "-", "+", "="];
const screen = document.getElementById("calc-screen");
const btnBlockNumbersDiv = document.getElementById("btn-block-numbers");
const btnBlockOpsDiv = document.getElementById("btn-block-operations");
let numberButtonsHTML = "";
let opsButtonsHTML = "";
let result = [];
screen.textContent = "0";
let screenShow;

let exprRes;
// let c =  eval(1 + operators[0] + 2);

// console.log([...numbers,...operators]);
// console.log(math.evaluate(exprString));

// const expr = "6/2(2+1)";
// console.log(math.evaluate(expr));

numbers.map((el) => {
  numberButtonsHTML += `<button class='calc-num-button'>${el}</button>`;
});
btnBlockNumbersDiv.innerHTML = numberButtonsHTML;

operators.map((el) => {
  el === "=" ? (bgColor = "bg-blue") : (bgColor = "");
  opsButtonsHTML += `<button class='calc-ops-button ${bgColor}'>${el}</button>`;
});
btnBlockOpsDiv.innerHTML = opsButtonsHTML;

function addNumAtScreen(num) {
  screen.textContent == 0
    ? (screen.textContent = num)
    : (screen.textContent += num);
}

const nB = document.querySelectorAll(".calc-num-button");
const oB = document.querySelectorAll(".calc-ops-button");

const allButtons = [...nB, ...oB];
// console.log(allButtons);

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

oB.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "=") {
      executeExpr();
    } else {
      result.length == 0 ? result.push(true) : (result[0] = true);
      result.push(screen.textContent, item.textContent);
    }
  });
  console.log(result);
});

function operations() {}

function executeExpr() {
  result.push(screen.textContent);
  result.shift();
  exprRes = math.evaluate(result.join(""));
  screen.textContent = exprRes;

  console.log(result);

  result.length = 0;
  //!Неверно считает
  result.unshift(true);
  result.push(exprRes);

  console.log(result);
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
