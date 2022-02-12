function getInputValue(inputId){
     const inputField=document.getElementById(inputId);
     const inputAmount=parseFloat(inputField.value);
     inputField.value="";
     return inputAmount;
}

function updateTotalField(totalFieldId,depositeAmount){
     const totalElement=document.getElementById(totalFieldId);
     const currentAmount=parseFloat(totalElement.innerText);
     const newAmount=currentAmount + depositeAmount;
     totalElement.innerText=newAmount;
}
function getCurrentBalance()
{
  const balanceTotal=document.getElementById("balance-total");
  const previousBalanceTotal=parseFloat(balanceTotal.innerText);
  return previousBalanceTotal;
}

function balanceUpdate(amount,isAdd){
  const balanceTotal=document.getElementById("balance-total");
  const previousBalanceTotal=getCurrentBalance();
  if(isAdd){
    balanceTotal.innerText=previousBalanceTotal + amount;
  }
  else{
    balanceTotal.innerText=previousBalanceTotal - amount;
  }
  // balanceTotal.innerText=newBalanceTotal;
}
document.getElementById("deposite-button").addEventListener("click",function(){
    // Get deposite
    //  const depositeInput=document.getElementById("deposite-input");
    //  const depositeAmount=parseFloat(depositeInput.value);
    const depositeAmount=getInputValue("deposite-input");
    if(depositeAmount>0)
    {
      updateTotalField("deposite-total",depositeAmount);
      balanceUpdate(depositeAmount,true);
    }
     
    //  const depositeTotal=document.getElementById("deposite-total");
    //  const currentDepositeAmount=parseFloat(depositeTotal.innerText);
    //  const newDepositeAmount=currentDepositeAmount + depositeAmount;
    //  depositeTotal.innerText=newDepositeAmount;
    
    //Balance
    // const balanceTotal=document.getElementById("balance-total");
    // const previousBalanceTotal=parseFloat(balanceTotal.innerText);
    // const newBalanceTotal=previousBalanceTotal + depositeAmount;
    // balanceTotal.innerText=newBalanceTotal;
   



});

// withdraw
document.getElementById("withdraw-button").addEventListener("click",function(){
//   const withdrawInput=document.getElementById("withdraw-input");
//   const withdrawAmount=parseFloat(withdrawInput.value);
  const withdrawAmount=getInputValue("withdraw-input");

//   const withdrawTotal= document.getElementById("withdraw-total");
//   const previousWithdrawTotal=parseFloat(withdrawTotal.innerText);

//   const newWithdrawAmount=previousWithdrawTotal + withdrawAmount;

//   withdrawTotal.innerText=newWithdrawAmount;
const curretBalance=getCurrentBalance();
if(withdrawAmount>0 && withdrawAmount<curretBalance)
{
  updateTotalField("withdraw-total",withdrawAmount);
  balanceUpdate(withdrawAmount,false);
}


  // const balanceTotal=document.getElementById("balance-total");
  // const previousBalanceTotal=parseFloat(balanceTotal.innerText);
  // const newBalanceTotal=previousBalanceTotal - withdrawAmount;

  // balanceTotal.innerText=newBalanceTotal;
 

//   withdrawInput.value="";

});