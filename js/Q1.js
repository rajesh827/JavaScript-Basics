function calculate(operation) {
        const val1 = parseFloat(document.getElementById("operand1").value);
        const val2 = parseFloat(document.getElementById("operand2").value);
        const resultBox = document.getElementById("result");

        if (isNaN(val1) || isNaN(val2)) {
          resultBox.value = "Invalid Input";
          return;
        }

        let result = 0;
        switch (operation) {
          case "add":
            result = val1 + val2;
            break;
          case "subtract":
            result = val1 - val2;
            break;
          case "multiply":
            result = val1 * val2;
            break;
          case "divide":
            if (val2 === 0) {
              resultBox.value = "Cannot divide by zero";
              return;
            }
            result = val1 / val2;
            break;
          case "modulo":
            if (val2 === 0) {
              resultBox.value = "Cannot modulo by zero";
              return;
            }
            result = val1 % val2;
            break;
        }
        resultBox.value = result;
      }