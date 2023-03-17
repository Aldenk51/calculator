/**
 * Initialize
 */
let mode = "", input1 = 0, input2 = 0, hasDecimal = false, hasNegative = false;
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
        hasNegative = !hasNegative;
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
        hasNegative = false;
        display.textContent = '';
        setTimeout(() => { updateDisplay() }, 50);
      } else if(temp.slice(-1) == '.'){
        temp = temp.slice(0, -1);
        if(temp.length == 1) {
          temp = '0';
          hasNegative = false;
        } else {
          temp = temp.slice(0, -1);
        }
        hasDecimal = false;
        updateDisplay();
      } else if(temp.length > 1) {
        temp = temp.slice(0, -1);
        updateDisplay();
      } else {
        temp = '0'
        hasNegative = false;
        updateDisplay();
      }
      console.log("Length: " + temp.length + " display: " + temp + " hasNegative: " + hasNegative+ " hasDecimal: " + hasDecimal);
      break;

    default:
      break;
  }
}


/**
 * Updates the display
 */
  function updateDisplay() {
    display.textContent = temp;
  if (!hasDecimal) {
    display.textContent += '.';
  }
  if (hasNegative) {
    display.textContent = '-' + display.textContent;
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