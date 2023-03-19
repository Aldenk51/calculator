/**
 * Initialize
 */
let mode = "", input1 = 0, result = 0, hasDecimal = false, hasNegative = false, opFlag = false, calcFlag = false, errorFlag = false;
let display = document.querySelector('#displayNumber'), temp = '0';
display.textContent = '0.';


/**
 * Initialize button eventListener
 */
document.querySelectorAll('button').forEach(button => { button.addEventListener('click', buttonPress) });
function buttonPress(e) {
  if(!errorFlag) {
    switch (e.target.classList[0]) {
      case 'numButton':
        calcFlag = true;
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
      if(e.target.id != 'equal') {
        mode = e.target.id;
      }
      console.log (temp + " " + mode + " "  +  input1 + " " + result + " " + opFlag + " " + calcFlag + " " + errorFlag);
      if(!opFlag) {
          input1 = temp;
          temp = '0';
          opFlag = true;
      } else if(calcFlag) {
        if(!result) {
          operate();
        } else {
          input1 = result;
          console.log (temp + " " + mode + " "  +  input1 + " " + result + " " + opFlag + " " + calcFlag + " " + errorFlag);
          operate();
        }
        if(!errorFlag) {
          opFlag = false;
          calcFlag = false;
          display.textContent = result;
        } else {
          display.textContent = "ERROR";
        }
        temp = '0';
      }
      console.log (temp + " " + mode + " "  +  input1 + " " + result + " " + opFlag + " " + calcFlag + " " + errorFlag);
      break;

    case 'delButton':
      if (e.target.id == 'clearAll') {
        mode = "";
        input1 = 0;
        result = 0;
        opFlag = false;
        temp = '0'
        hasDecimal = false;
        hasNegative = false;
        display.textContent = '';
        setTimeout(() => { updateDisplay() }, 50);     

      } else if(opFlag && temp == '0') {

      } else if(temp.slice(-1) == '.') {
        temp = temp.slice(0, -1);
        if (temp.length == 1) {
          temp = '0';
          hasNegative = false;
        } else {
          temp = temp.slice(0, -1);
        }
        hasDecimal = false;
        updateDisplay();
      } else if (temp.length > 1) {
        temp = temp.slice(0, -1);
        updateDisplay();
      } else {
        temp = '0'
        hasNegative = false;
        updateDisplay();
      }
      break;

    default:
      break;
  }
}
}

/**
 * 
 */
function operate() {
  switch (mode) {
    case 'divide':
      if(temp == 0) {
        errorFlag = true;
      } else {
        result = +input1 / +temp;
      }
      break;

    case 'times':
      result = +input1 * +temp;
      break;

    case 'minus':
      result = +input1 - +temp;
      break;

    case 'plus':
      result = +input1 + +temp;
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