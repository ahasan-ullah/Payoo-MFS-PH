// add money
document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault();
  const amount=document.getElementById('amount-field').value;
  const pin=document.getElementById('pin-field').value;
  // demo without database
  if(pin==='2'){
    const balance=document.getElementById('balance').innerText;
    const newBalance=parseFloat(balance)+parseFloat(amount);
    document.getElementById('balance').innerText=newBalance;
  }
  else{
    alert('Failed to add money');
  }
});


// cash out
document.getElementById('btn-cash-out').addEventListener('click',function(event){
  event.preventDefault();
  const cashOut=document.getElementById('input-cash-out').value;
  const pin=document.getElementById('cash-out-pin-field').value;

  const balance=document.getElementById('balance').innerText;
  // demo without database
  if(pin==='2' && cashOut<balance){
    const newBalance=parseFloat(balance)-parseFloat(cashOut);
    document.getElementById('balance').innerText=newBalance;
  }
  else{
    alert('Failed to cash out');
  }
});




document.getElementById('show-cash-out').addEventListener('click',function(event){
  document.getElementById('cash-out-form').classList.remove('hidden');
  document.getElementById('add-money-form').classList.add('hidden');
});

document.getElementById('show-add-money').addEventListener('click',function(event){
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('add-money-form').classList.remove('hidden');
});