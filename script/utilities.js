function getInputValueById(id){
  const input = document.getElementById(id).value;
  const convertedInput = parseFloat(input);
  return convertedInput;

}


function getInnerTextById(id){
  const text = document.getElementById(id).innerText;
  const convertedText = parseFloat(text);
  return convertedText;
}


function setInnerTextByIdAndValue(id, value){
  document.getElementById(id).innerText = value;
}


function changeToggleDisplayValue(id, value){
  document.getElementById(id).style.display = value;
}

function changeToggleBGValue(id, value){
  document.getElementById(id).style.backgroundColor = value;

}