document
  .getElementById("login_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const numberInput = document.getElementById("number_input").value;
    const convertedPin = getInputValueById('pin_input');
    // const pinInput = document.getElementById("pin_input").value;
    // const convertedPin = parseInt(pinInput);

    if (numberInput.length === 11 && numberInput === "01960801362") {
      if (convertedPin === 1234) {
        window.location = "main.html";
      } else if (pinInput === "") {
        alert("Please enter your PIN");
      } else {
        alert("Your PIN is incorrect");
      }
    } else if (numberInput === "" && pinInput === "") {
      alert("Please enter your number and PIN");
    } else if (numberInput === "") {
      alert("Please enter your number");
    } else if (numberInput !== "01960801362" && convertedPin !== 1234) {
      alert("Your number and PIN is incorrect");
    } else {
      alert("Your number is incorrect");
    }
  });
