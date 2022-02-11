document.getElementById("deposite-button").addEventListener("click",function(){
    // Get deposite
     const depositeInput=document.getElementById("deposite-input");
     const depositeAmount=parseFloat(depositeInput.value);
     
     const depositeTotal=document.getElementById("deposite-total");
     const currentDepositeAmount=parseFloat(depositeTotal.innerText);
     const newDepositeAmount=currentDepositeAmount + depositeAmount;
     depositeTotal.innerText=newDepositeAmount;
   
    //Balance
    const balanceTotal=document.getElementById("balance-total");
    const previousBalanceTotal=parseFloat(balanceTotal.innerText);
    const newBalanceTotal=previousBalanceTotal + depositeAmount;

    balanceTotal.innerText=newBalanceTotal;

     depositeInput.value="";

});

// withdraw
document.getElementById("withdraw-button").addEventListener("click",function(){
  const withdrawInput=document.getElementById("withdraw-input");
  const withdrawAmount=parseFloat(withdrawInput.value);

  const withdrawTotal= document.getElementById("withdraw-total");
  const previousWithdrawTotal=parseFloat(withdrawTotal.innerText);

  const newWithdrawAmount=previousWithdrawTotal + withdrawAmount;

  withdrawTotal.innerText=newWithdrawAmount;

  const balanceTotal=document.getElementById("balance-total");
  const previousBalanceTotal=parseFloat(balanceTotal.innerText);
  const newBalanceTotal=previousBalanceTotal - withdrawAmount;

  balanceTotal.innerText=newBalanceTotal;

  withdrawInput.value="";

});