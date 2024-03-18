const OnSubmit = () => {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const mobilenumber = document.getElementById("mobilenumber").value;
  const alternatenumber = document.getElementById("alternate-number").value;

  const currentaddress = document.getElementById("currentaddress").value;
  const Permanentaddress = document.getElementById("Permanentaddress").value;
  if (
    !lastname ||
    !firstname ||
    !age ||
    !mobilenumber ||
    !email ||
    !currentaddress
  ) {
    alert("details missing");
  } else if (age < 18) {
    alert("minimum age should be 18");
  } else if (mobilenumber.length != 10 && alternatenumber.length != 10) {
    alert("invalid mobile number");
  } else if (mobilenumber == alternatenumber) {
    alert("alertnumber and contactnumber should not same");
  } else if (email.indexOf("@") < 0 || !email.includes(".com")) {
    alert("email not valid");
  } else {
    confirm("Details submitted successfully");
  }
};
console.log("hi");
