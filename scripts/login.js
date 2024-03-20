const OnSubmit = () => {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const mobilenumber = document.getElementById("mobilenumber").value;
  const alternatenumber = document.getElementById("alternate-number").value;

  const currentaddress = document.getElementById("currentaddress").value;
  if (!firstname) {
    alert(" First name missing");
  } else if (!lastname) {
    alert("last name missing");
  }
  else if (!age) {
    alert("age missing");
  }
  else if (!mobilenumber) {
    alert("mobile number missing");
  }
  else if (!email) {
    alert("email missing");
  } else if (!currentaddress) {
    alert("current address missing");
  }

  else if (age < 18) {
    alert("minimum age should be 18");
  } else if (mobilenumber.length != 10 || alternatenumber.length != 10) {
    alert("invalid mobile number");
  } else if (mobilenumber == alternatenumber) {
    alert("alerternate number and contact number should not be same");
  } else if (email.indexOf("@") < 0 || !email.includes(".com")) {
    alert("email not valid");
  } else {
    confirm("Details submitted successfully");
  }
};
function check() {
  const radio = document.getElementById("radio").checked;
  if (radio) {
    document.getElementById("Permanentaddress").value =
      document.getElementById("currentaddress").value;
  }
}
