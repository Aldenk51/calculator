/**
 * Initialize
 */
let mode = "", input1 = 0, input2 = 0, hasDecimal = false;
let display = document.querySelector('#displayNumber');
display.textContent = 0;

/**
 * Initialize button eventListener
 */
document.querySelectorAll('button').forEach(button => {button.addEventListener('click', buttonPress)});
function buttonPress(e) {
  switch(e.target.classList[0]) {
    case 'numButton':
      if(e.target.classList[1] == 'number') {
        display.textContent[1] != '.' ? display.textContent = display.textContent.replace(/^0+?/, '') + e.target.textContent : display.textContent += e.target.textContent;
      } else if (e.target == plusMinus) {
        display.textContent[0] == '-' ? display.textContent = display.textContent.replace(/^-/, "") : display.textContent = '-' + display.textContent;
      } else if (!hasDecimal) {
        display.textContent += '.';
        hasDecimal = true;
      }
      break;

    case 'opButton':
      break;

    case 'delButton':
      if(e.target.id == 'clearAll') {
        clearAll();
      }
      break;
      
    default:
      break;
  }
}


/**
 * Takes two inputs and returns the sum
 * @param {Number} input1
 * @param {Number} input2 
 * @returns input1 + input2
 */
function add(input1, input2) {
  return input1+input2;
}


/**
 * Takes two inputs and returns the difference
 * @param {Number} input1 
 * @param {Number} input2 
 * @returns input1 - input2
 */
function subtract(input1, input2) {
  return input1-input2;
}


/**
 * Takes two inputs and returns the product
 * @param {Number} input1 
 * @param {Number} input2 
 * @returns input1 * input2
 */
function multiply(input1, input2) {
  return input1*input2;
}


/**
 * Takes two inputs and returns the quotient
 * @param {Number} input1 
 * @param {Number} input2 
 * @returns input1 / input2
 */
function divide(input1, input2) {
  return input1/input2;
}


/**
 * Reset calculator
 */
function clearAll() {
  mode = "";
  input1 = 0;
  input2 = 0;
  hasDecimal = false;
  display.textContent = 0;
}


/**
 * 
 */
function operate() {

}