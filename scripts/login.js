const OnSubmit = () => {
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
  if (!username) {
    alert("username missing");
  } else if (!password) {
    alert("password missing");
  } else if (username.length < 6) {
    alert("username too short");
  } else if (password.length < 8) {
    alert("password length too short");
  } else if (!specialCharacters.test(password)) {
    alert("password should include a special character");
  } else {
    confirm("Login successful");
  }
};
