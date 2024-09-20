// cash out
document.getElementById('btn-cash-out').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut=getInputFieldValueById('input-cash-out');
  const pin=getInputFieldValueById('cash-out-pin-field');

  if(isNaN(cashOut)){
    alert('Error');
    return;
  }

  const balance=getTextFieldValueById('balance');
  // demo without database
  if(pin===2){
    if(cashOut<balance){
      alert('Failed to cash out');
    }
    const newBalance=balance-cashOut;
    document.getElementById('balance').innerText=newBalance;
  }
  else{
    alert('Failed to cash out');
  }
});