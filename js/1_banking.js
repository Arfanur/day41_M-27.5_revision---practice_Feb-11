function getInputField(inputId) {                           // input
    const inputField = document.getElementById(inputId);    // input element
    const amountValue = parseFloat(inputField.value);       // input parseFloat

    // clear deposit input field
    inputField.value = '';
    
    return amountValue;                                     // return: input parseFloat
}

function updateTotalField(totalFieldId, amount) {           // previous(h4), input
    const totalElement = document.getElementById(totalFieldId); // previous element
    const previousTotal = parseFloat(totalElement.innerText);   // previous parseFloat

    totalElement.innerText = previousTotal + amount;        // come back: current amount (previous amount(h4) + input amount)
}

function getCurrentBalance() {                              // previous balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    return previousBalanceTotal;                            // come back: previous balance parseFloat number
}

function updateBalance(amount, isAdd) {                     // input, boolean
    const balanceTotal = document.getElementById('balance-total');  // previous balance(h4) element
    const previousBalanceTotal = getCurrentBalance();       // come back: previous balance parseFloat number
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount; // previous + input
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount; // previous - input
    }


}

//   handle Deposit button
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputField('deposit-input');   // come back: input deposit parseFloat number
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);    // come back: current deposit amount (previous deposit + input deposit)
        updateBalance(depositAmount, true);                 // come back: current balance (previous(h4) balance + input balance)
    }
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputField('withdraw-input');     // come back: input withdraw parseFloat number
    const currentBalance = getCurrentBalance();              // previous balance parseFloat
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);      // come back: current withdraw amount (previous withdraw(h4) + input withdraw)
        updateBalance(withdrawAmount, false);                  // come back: current balance (previous(h4) balance - input balance)
    }
})
