export function useCalc(calc, keys) {
  return [...keys].reduce(function showDisplay(display, key) {
    var ret = String(calc(key));
    return display + (ret != "" && key == "=" ? "=" : "") + ret;
  }, "");
}
export function calculator() {
  var result, lastNumber, lastOperator;
  resetCalc();
  function resetCalc() {
    result = 0;
    lastNumber = "";
    lastOperator = "+";
  }
  const equal = "=";
  var operator = {
    "+": () => result + lastNumber,
    "-": () => result - lastNumber,
    "/": () => result / lastNumber,
    "*": () => result * lastNumber,
    "=": () => {
      if (lastNumber != "") {
        result = lastNumber;
      }
      return result;
    },
  };
  function operate() {
    return (result = operator[lastOperator]());
  }
  return function pressKey(character) {
    if (/\d/.test(character)) {
      lastNumber = Number(String(lastNumber) + character);
    }
    if (character in operator) {
      operate();
      lastOperator = character;
      lastNumber = "";
    }
    if (character == equal) {
      return formatTotal(result);
    }
    return character;
  };
}

function formatTotal(display) {
  if (Number.isFinite(display)) {
    // constrain display to max 11 chars
    let maxDigits = 11;
    // reserve space for "e+" notation?
    if (Math.abs(display) > 99999999999) {
      maxDigits -= 6;
    }
    // reserve space for "-"?
    if (display < 0) {
      maxDigits--;
    }
    // whole number?
    if (Number.isInteger(display)) {
      display = display.toPrecision(maxDigits).replace(/\.0+$/, "");
    }
    // decimal
    else {
      // reserve space for "."
      maxDigits--;
      // reserve space for leading "0"?
      if (Math.abs(display) >= 0 && Math.abs(display) < 1) {
        maxDigits--;
      }
      display = display.toPrecision(maxDigits).replace(/0+$/, "");
    }
  } else {
    display = "ERR";
  }
  return display;
}
