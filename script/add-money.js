// add money
document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault();

  const addMoney=getInputFieldValueById('amount-field');
  const pin=getInputFieldValueById('pin-field');

  if(isNaN(addMoney)){
    alert('Error');
    return;
  }
  // demo without database
  if(pin===2){
    const balance=getTextFieldValueById('balance');
    const newBalance=balance+addMoney;
    document.getElementById('balance').innerText=newBalance;

    const p=document.createElement('p');
    p.innerText=`Added: ${addMoney} Tk. New Balance: ${newBalance}`;

    document.getElementById('transaction-container').appendChild(p);
  }
  else{
    alert('Failed to add money');
  }
});