function incomeCalculate(){
    let food = document.getElementById("food-input");
    let foodValue = food.value;
    let foodIntValue = parseFloat(foodValue);
   
    let rent = document.getElementById("rent-input");
    let rentValue = rent.value
    let rentIntValue = parseFloat(rentValue);

    let clothes = document.getElementById("cloth-input");
    let clothesValue = clothes.value;
    let clothIntValue = parseFloat(clothesValue);
   
    let total = (foodIntValue + rentIntValue + clothIntValue);
    let totalValue =  total;
    
    let totalExpenses = document.getElementById("total-expenses");
    let totalCost = totalExpenses.innerText = totalValue;

    /* ================================================================= */
    let incomeInputField = document.getElementById("income-input");
    let incomeInputValue = incomeInputField.value;
    let incomeValueNum = parseFloat(incomeInputValue);


     let remaining = incomeValueNum - total;

    let TotalBalance = document.getElementById("totalBalance");
    let BalanceText = TotalBalance.innerText;
    let remainingBalance =  TotalBalance.innerText = remaining;
 food.value= " ";
 rent.value= " ";
 clothes.value= " ";
 incomeInputField.value= " ";
}

function savingCalculate() {
    // Saving Amount
    let savingAmount = document.getElementById("saving-amount");
    let savingAmountValue = savingAmount.innerText;
    let savingAmountValueNumber = parseFloat(savingAmountValue);
// total balance
    let TotalBalance = document.getElementById("totalBalance");
    let BalanceText = TotalBalance.innerText;
    let BalanceTextNumber = parseFloat(BalanceText);
// save parsent
    let saveParsant = document.getElementById("save-parsant");
    let saveParsantValue = saveParsant.value;
    let saveParsantValueNumber = parseFloat(saveParsantValue);
// Parsentage calculate
    let parsantCalculate = (BalanceTextNumber / 100) * saveParsantValueNumber;
    console.log(parsantCalculate);
    totalSavingAmount = savingAmount.innerText = parsantCalculate;


   let finalRemainingBalance = BalanceTextNumber - totalSavingAmount;
   console.log( "This is final amount" + finalRemainingBalance);

    let remainingBalance = document.getElementById("remaining-balance");
    let remainingBalanceValue = remainingBalance.innerText;
    remainingBalance.innerText = finalRemainingBalance;
    // let remainingBalanceValueNumber = parseFloat(remainingBalanceValue);













    saveParsant.value = " ";
    income.value = " ";


}