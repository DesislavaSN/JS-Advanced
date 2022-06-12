//7.	Form Validation
// 77 /100 points

function validate() {
  const incorrectValues = [];
  const checkbox = document
    .getElementById("company")
    .addEventListener("change", onChange);
  const companyInfo = document.getElementById("companyInfo");

  // onChnage function - the checkbox
  function onChange(event) {
    // console.log('changed');
    if (event.target.checked) {
      companyInfo.style.display = "inline";
    } else {
      companyInfo.style.display = "none";
    }
  }

  const submitBtn = document
    .getElementById("submit")
    .addEventListener("click", onClick);
  const compNumRegExp = /^[0-9]{4}$/gm;
  const compNumInput = document.getElementById("companyNumber");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");
  const email = document.getElementById("email");
  const validField = document.getElementById("valid");

  // onClick function
  function onClick(event) {
    event.preventDefault();

    // Company information field
    if (compNumRegExp.test(compNumInput.value) == false) {
      incorrectValues.push(compNumInput);
    }

    // Username
    const usernameRegExp = /^[A-Za-z0-9]{3,20}$/gm;
    if (usernameRegExp.test(username.value) == false) {
      incorrectValues.push(username);
    }

    // Password & Confirm Password
    const passwordRegExp = /^\w{5,15}$/gm;
    if (
      passwordRegExp.test(password.value) == false ||
      confirmPass.value !== password.value
    ) {
      incorrectValues.push(password);
      incorrectValues.push(confirmPass);
    }

    // Email
    const emailRegExp = /^.+@.+\.\w{2,3}$/gm;
    if (emailRegExp.test(email.value) == false) {
      incorrectValues.push(email);
    }

    // apply border style - red
    incorrectValues.forEach((el) => (el.style.borderColor = "red"));

    // display valid field
    if (!incorrectValues.length) {
        validField.style.display = "block";
    } else {
        validField.style.display = "none";
    }
  }
}
