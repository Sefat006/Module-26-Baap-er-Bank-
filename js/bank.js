document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //step-3: get the current deposit total
    //for non-input(element other than input, textarea) use innerText to get the text;
    const depositTotalElement = document.getElementById('deposit-total');

    //
    const previousDepositTotalString = depositTotalElement.innerText;

    //making the deposit into float number;
    const previousDepositTotal=parseFloat(previousDepositTotalString);

    //step-4: add numbers to set the total deposit;
    const currentDepositTotal = previousDepositTotal+newDepositAmount;
    //set the balance total
    depositTotalElement.innerText = currentDepositTotal;

    //step-5: get balance current;
    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balace;
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total;
    balanceTotalElement.innerText = currentBalanceTotal;
    


    depositField.value='';

})