document.getElementById("cashout").style.display = "none";
document.getElementById("add_money_card").style.backgroundColor = "#e0f2fe";

document
  .getElementById("add_money_card")
  .addEventListener("click", function () {
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("add_money_card").style.backgroundColor = "#e0f2fe";
    document.getElementById("cash_out_card").style.backgroundColor = "#fff";
  });

document.getElementById("cash_out_card").addEventListener("click", function () {
  document.getElementById("cashout").style.display = "block";
  document.getElementById("addmoney").style.display = "none";
  document.getElementById("add_money_card").style.backgroundColor = "#fff";
  document.getElementById("cash_out_card").style.backgroundColor = "#e0f2fe";
});
