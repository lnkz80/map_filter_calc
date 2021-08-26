const Data = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "C"],
  operators: ["/", "*", "-", "+", "="],
  btnBlockNumbersDiv: document.getElementById("btn-block-numbers"),
  btnBlockOpsDiv: document.getElementById("btn-block-operations"),
};

class Calculator {
  constructor({ numbers, operators, btnBlockNumbersDiv, btnBlockOpsDiv }) {
    this.screen = document.getElementById("calc-screen");
    this.screen.textContent = "0";
    this.opFlag = false;
    this.expr = "";
    //RenderButtons
    this.renderButtons(numbers, btnBlockNumbersDiv);
    this.renderButtons(operators, btnBlockOpsDiv);
    this.addListenersOnButtons(btnBlockNumbersDiv, true);
    this.addListenersOnButtons(btnBlockOpsDiv, false);
  }

  renderButtons(arrNodes, innerNode) {
    let html = "";
    arrNodes.map((el) => {
      el == "=" ? (this.bgColor = "bg-blue") : (this.bgColor = "");
      html += `<button class='calc-ops-button ${this.bgColor}'>${el}</button>`;
    });
    innerNode.innerHTML = html;
  }

  addListenersOnButtons(divBlockId, bType) {
    divBlockId.children.forEach((el) => {
      el.addEventListener("click", () => {
        //nums - true; ops - false
        if (bType) {
          if (el.textContent == "C") {
            this.opFlag = false;
            this.expr = "";
            this.setScreenData("0");
          } else {
            this.setScreenData(el.textContent);
          }
          this.opFlag = true;
        } else {
          this.expr += this.getScreenData() + el.textContent;
          this.opFlag = false;
          //   console.log(this.expr);
          if (el.textContent == "=") {
            this.expr = this.expr.slice(0, -1);
            console.log(this.expr);
            this.calcExpr(this.expr);
          }
        }
      });
    });
  }

  getScreenData() {
    return this.screen.textContent;
  }

  setScreenData(num) {
    if (!this.opFlag) {
      this.screen.textContent = num;
    } else {
      this.screen.textContent == 0
        ? (this.screen.textContent = num)
        : (this.screen.textContent += num);
    }
  }

  calcExpr(expr) {
    //!Проверить математику!!!!
    this.setScreenData(math.evaluate(expr));
  }
}

const Calc = new Calculator(Data);
