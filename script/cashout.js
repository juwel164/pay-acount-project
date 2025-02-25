document
  .getElementById("cash_out_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("cashout_pin_input").value;
    const convertedPin = parseInt(pin);
    const number = document.getElementById("cashout_number_input").value;
    const amount = document.getElementById("cashout_amount_input").value;
    const convertedAmount = parseFloat(amount);
    const balance = document.getElementById("main_balance").innerText;
    const convertedBalance = parseFloat(balance);

    if (number === "01960801362" && number.length === 11) {
        if (convertedAmount) {
          if(convertedAmount < convertedBalance){
            if (convertedPin === 1234) {
              const sum = convertedBalance - convertedAmount;
              document.getElementById("main_balance").innerText = sum;
              document.getElementById("cashout_number_input").value = "";
              document.getElementById("cashout_amount_input").value = "";
              document.getElementById("cashout_pin_input").value = "";
              alert(`${convertedAmount}$ cashout done from your account.`);
            } else if (!convertedPin) {
              alert("Please enter your PIN");
            } else {
              alert("Your PIN is incorrect");
            }
          }else{
            alert('Your balance is insufficient')
          }
        } else {
          alert("Please enter your amount");
        }
    } else if (number === "") {
      alert("Please enter your number");
    } else {
      alert("Your number is incorrect");
    }
  });
