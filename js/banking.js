// document.getElementById('deposit-button').addEventListener('click',function(){
//     const depositInput = document.getElementById('deposit-input');
//     const depositValue = parseFloat(depositInput.value);
    
//     const depositTotal = document.getElementById(c);
//     const previousValueDeposit = parseFloat(depositTotal.innerText);
//     const newDepositValue = previousValueDeposit + depositValue;

//     depositTotal.innerText = newDepositValue;

//     depositInput.value = '';
// });


function takeInput(id1,id2){
    const input = document.getElementById(id1);
    const inputValue = parseFloat(input.value);

    const amount = document.getElementById(id2);
    const amountValue  = parseFloat(amount.innerText);

    const totalValue = inputValue + amountValue;
    input.value = '';
    return totalValue;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = document.getElementById('deposit-total');
    amount.innerText = takeInput('deposit-input','deposit-total');
});


document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = document.getElementById('withdraw-total');
    amount.innerText = takeInput('withdraw-input','withdraw-total');
});
