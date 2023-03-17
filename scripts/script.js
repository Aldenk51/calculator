/**
 * Initialize
 */
let mode = "", input1 = 0, input2 = 0;
let display = document.querySelector('#displayNumber');
display.textContent = 0;

/**
 * Initialize button eventListener
 */
document.querySelectorAll('button').forEach(button => {button.addEventListener('click', buttonPress)});
function buttonPress(e) {
  switch(e.target.className) {
    case 'numButton':
      if(e.target == decimal) {
        display.textContent += '.';
        this.removeEventListener('click', buttonPress);
      } else if(e.target == plusMinus) {
        input1 *= -1;
        display.textContent = parseInt(input1);
      } else {
        input1 += e.target.textContent;
        display.textContent = parseInt(input1);
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
  display.textContent = 0;
}


/**
 * 
 */
function operate() {

}