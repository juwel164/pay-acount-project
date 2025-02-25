changeToggleDisplayValue("cashout", "none");
changeToggleDisplayValue("addmoney", "none");
changeToggleBGValue("transaction_card", "#e0f2fe");


document
  .getElementById("add_money_card")
  .addEventListener("click", function () {
    changeToggleDisplayValue("cashout", "none");
  changeToggleDisplayValue("transaction","none");
    changeToggleDisplayValue("addmoney", "block");
    changeToggleBGValue("add_money_card", "#e0f2fe");
    changeToggleBGValue("cash_out_card", "#fff");
    changeToggleBGValue("transaction_card", "#fff");
  });

document.getElementById("cash_out_card").addEventListener("click", function () {
  changeToggleDisplayValue("addmoney","none");
  changeToggleDisplayValue("transaction","none");
  changeToggleDisplayValue("cashout", "block");
  changeToggleBGValue("add_money_card", "#fff");
  changeToggleBGValue("cash_out_card", "#e0f2fe");
  changeToggleBGValue("transaction_card", "#fff");

});


document.getElementById('transaction_card').addEventListener('click', function(){
  changeToggleDisplayValue("addmoney","none");
  changeToggleDisplayValue("transaction","block");
  changeToggleDisplayValue("cashout", "none");
  changeToggleBGValue("add_money_card", "#fff");
  changeToggleBGValue("cash_out_card", "#fff");
  changeToggleBGValue("transaction_card", "#e0f2fe");
})