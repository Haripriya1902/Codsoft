let result = document.getElementById("result");

function display(value) {
  result.value += value;
}

function calculate() {
  let expression = result.value;
  let answer = eval(expression);
  result.value = answer;
}

function clearScreen() {
  result.value = "";
}
