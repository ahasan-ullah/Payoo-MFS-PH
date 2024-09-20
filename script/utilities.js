function getInputFieldValueById(id){
  const inputValue=document.getElementById(id).value;
  return parseFloat(inputValue);
}

function getTextFieldValueById(id){
  const text=document.getElementById(id).innerText;
  return parseFloat(text);
}

function showSectionById(id){
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('transaction-form').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}