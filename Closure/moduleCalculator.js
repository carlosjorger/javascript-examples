export var moduleCalulator = (function defineCalculator() {
  var result = 0;
  var lastNumber = "";
  var lastOperator = "+";
  var operators = {
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
  function operate(operator) {
    result = operators[lastOperator]();
    lastOperator = operator;
    lastNumber = "";
    return operator;
  }
  function plus() {
    return operate("+");
  }
  function minus() {
    return operate("-");
  }
  function mult() {
    return operate("*");
  }
  function div() {
    return operate("/");
  }
  function eq() {
    operate("=");
    return formatTotal(result);
  }
  function number(number) {
    lastNumber = Number(String(lastNumber) + number);
    return number;
  }
  var publicAPI = {
    number,
    plus,
    minus,
    mult,
    div,
    eq,
  };
  return publicAPI;
})();

export function useCalc(calc, keys) {
  var keyMappings = {
    "+": "plus",
    "-": "minus",
    "*": "mult",
    "/": "div",
    "=": "eq",
  };
  return [...keys].reduce(function showDisplay(display, key) {
    var fn = keyMappings[key] || "number";
    var ret = String(calc[fn](key));
    return display + (ret != "" && key == "=" ? "=" : "") + ret;
  }, "");
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
