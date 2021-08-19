class Calculator {
  constructor() {
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "C"];
    this.operators = ["/", "*", "-", "+", "="];
    this.btnBlockNumbersDiv = document.getElementById("btn-block-numbers");
    this.btnBlockOpsDiv = document.getElementById("btn-block-operations");
    this.screen = document.getElementById("calc-screen");
    this.screen.textContent = "0";
    //RenderButtons
    this.renderButtons(this.numbers, this.btnBlockNumbersDiv);
    this.renderButtons(this.operators, this.btnBlockOpsDiv);
  }

  renderButtons(arrNodes, innerNode) {
    let html = "";
    arrNodes.map((el) => {
      el === "=" ? (this.bgColor = "bg-blue") : (this.bgColor = "");
      html += `<button class='calc-ops-button ${this.bgColor}'>${el}</button>`;
    });
    innerNode.innerHTML = html;
  }
}

const coolCalc = new Calculator();
