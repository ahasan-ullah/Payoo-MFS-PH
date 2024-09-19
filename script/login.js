document.getElementById('login-btn').addEventListener('click',function(event){
  event.preventDefault();

  const phoneNumber=document.getElementById('phn-field').value;
  const pin=document.getElementById('pin-field').value;

  // temp
  if(phoneNumber==='5' && pin==='2'){
    window.location.href='/home.html'
  }
  else{
    alert('Wrong pin or pass');
  }
})