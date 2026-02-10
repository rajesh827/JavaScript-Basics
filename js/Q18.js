function validateForm() {
  var uName = document.getElementById("username").value;
  var uAge = document.getElementById("age").value;
  var uPass = document.getElementById("password").value;

  if (!checkUsername(uName)) {
    return false;
  }

  if (!checkAge(uAge)) {
    return false;
  }

  if (!checkPassword(uPass)) {
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
}

function checkUsername(name) {
  if (name === "") {
    alert("Error: Username cannot be empty.");
    return false;
  }
  return true;
}

function checkAge(age) {
  if (age === "") {
    alert("Error: Age cannot be empty.");
    return false;
  }

  var ageNum = parseInt(age);

  if (ageNum < 8 || ageNum > 60) {
    alert("Error: Age must be between 8 and 60.");
    return false;
  }
  return true;
}

function checkPassword(pass) {
  if (pass === "") {
    alert("Error: Password cannot be empty.");
    return false;
  }

  if (pass.length < 6) {
    alert("Error: Password must be at least 6 characters long.");
    return false;
  }

  var startsWithLetter = /^[a-zA-Z]/.test(pass);
  if (!startsWithLetter) {
    alert("Error: Password must start with an alphabet (Letter).");
    return false;
  }

  var endsWithDigit = /\d$/.test(pass);
  if (!endsWithDigit) {
    alert("Error: Password must end with a digit (Number).");
    return false;
  }

  return true;
}
