changeToggleDisplayValue("transaction_box", "none");

document
  .getElementById("cash_out_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const convertedPin = getInputValueById("cashout_pin_input");
    const number = document.getElementById("cashout_number_input").value;
    const convertedAmount = getInputValueById("cashout_amount_input");
    const convertedBalance = getInnerTextById("main_balance");

    if (number === "01960801362" && number.length === 11) {
      if (convertedAmount) {
        if (convertedAmount < convertedBalance) {
          if (convertedPin === 1234) {
            const sum = convertedBalance - convertedAmount;
            setInnerTextByIdAndValue("main_balance", sum);
            document.getElementById("cashout_number_input").value = "";
            document.getElementById("cashout_amount_input").value = "";
            document.getElementById("cashout_pin_input").value = "";
            alert(`${convertedAmount}$ cashout done from your account.`);
            document.getElementById("transaction_card");
            document.getElementById("left_tran_content");
            const transactionDetails = document.getElementById(
              "transaction_details"
            );

            const h2 = document.createElement("h2");
            h2.innerText = `${convertedAmount}$ Cashout`;
            h2.classList = "text-lg font-bold text-black";
            const p = document.createElement("p");
            p.innerText = new Date();
            p.classList = "text-xs";
            transactionDetails.appendChild(h2);
            transactionDetails.appendChild(p);
            changeToggleDisplayValue("transaction_box", "flex");
            
          } else if (!convertedPin) {
            alert("Please enter your PIN");
          } else {
            alert("Your PIN is incorrect");
          }
        } else {
          alert("Your balance is insufficient");
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
