/**
 * Initialize
 */
let mode = "", input1 = 0, input2 = 0, hasDecimal = false;
let display = document.querySelector('#displayNumber'), temp = '0';
display.textContent = '0.';

/**
 * Initialize button eventListener
 */
document.querySelectorAll('button').forEach(button => { button.addEventListener('click', buttonPress) });
function buttonPress(e) {
  switch (e.target.classList[0]) {
    case 'numButton':
      if (e.target.classList[1] == 'number') {
        temp[1] != '.' ? temp = temp.replace(/^0+?/, '') + e.target.textContent : temp += e.target.textContent;
      } else if (e.target == plusMinus) {
        temp[0] == '-' ? temp = display.textContent.replace(/^-/, "") : temp = '-' + display.textContent;
      } else if (!hasDecimal) {
        temp += '.';
        hasDecimal = true;
      }
      updateDisplay();
      break;

    case 'opButton':
      break;

    case 'delButton':
      if (e.target.id == 'clearAll') {
        mode = "";
        input1 = 0;
        input2 = 0;
        temp = '0'
        hasDecimal = false;
        display.textContent = '';
        setTimeout(() => { updateDisplay() }, 50);
      } else if(temp.slice(-1) == '.'){
        temp = temp.slice(0, -2);
        hasDecimal = false;
        updateDisplay();
      } else {
        temp = temp.slice(0, -1);
        updateDisplay();
      }
      break;

    default:
      break;
  }
}


/**
 * Updates the display
 */
function updateDisplay() {
  if (hasDecimal) {
    display.textContent = temp;
  } else {
    display.textContent = temp + '.';
  }
}


/**
 * Takes two inputs and returns the sum
 * @param {Number} input1
 * @param {Number} input2 
 * @returns input1 + input2
 */
function add(input1, input2) {
  return input1 + input2;
}


/**
 * Takes two inputs and returns the difference
 * @param {Number} input1 
 * @param {Number} input2 
 * @returns input1 - input2
 */
function subtract(input1, input2) {
  return input1 - input2;
}


/**
 * Takes two inputs and returns the product
 * @param {Number} input1 
 * @param {Number} input2 
 * @returns input1 * input2
 */
function multiply(input1, input2) {
  return input1 * input2;
}


/**
 * Takes two inputs and returns the quotient
 * @param {Number} input1 
 * @param {Number} input2 
 * @returns input1 / input2
 */
function divide(input1, input2) {
  return input1 / input2;
}



/**
 * 
 */
function operate() {

}