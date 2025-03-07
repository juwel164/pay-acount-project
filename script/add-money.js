changeToggleDisplayValue("transaction_box", "none");

document
  .getElementById("add_money_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const convertedPin = getInputValueById("pin_input");
    const number = document.getElementById("number_input").value;
    const bankOption = document.getElementById("bank").value;
    const convertedAmount = getInputValueById("amount_input");
    const convertedBalance = getInnerTextById("main_balance");
    if(bankOption !== 'Select Bank'){
      if (number.length === 11) {
        if (convertedAmount) {
          if (convertedPin === 1234) {
            const sum = convertedAmount + convertedBalance;
            setInnerTextByIdAndValue("main_balance", sum);
            document.getElementById("number_input").value = "";
            document.getElementById("pin_input").value = "";
            document.getElementById("amount_input").value = "";
            alert(`${convertedAmount}$ added to your account.`);
            document.getElementById("transaction_card");
            document.getElementById("left_tran_content");
            const transactionDetails = document.getElementById(
              "transaction_details"
            );
            const h2 = document.createElement("h2");
            h2.innerText = `${convertedAmount}$ Add Money from ${bankOption}`;
            h2.classList = "text-lg font-bold text-black";
            const p = document.createElement("p");
            p.innerText = new Date();
            p.classList = "text-xs mb-5";
            transactionDetails.appendChild(h2);
            transactionDetails.appendChild(p);
            changeToggleDisplayValue("transaction_box", "flex");
          } else if (!convertedPin) {
            alert("Please enter your PIN");
          } else {
            alert("Your PIN is incorrect");
          }
        } else {
          alert("Please enter your amount");
        }
      } else if (number === "") {
        alert("Please enter your number");
      } else {
        alert("Your number is incorrect");
      }
    }else{
      alert('Please select a bank');
    }
  });
