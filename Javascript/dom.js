// Income Calculation Function Start ==========
function incomeCalculate(){
    // Food =====

    let food = document.getElementById("food-input");
    let foodValue = food.value;
    let foodIntValue = parseFloat(foodValue);

    // Rent =====
    let rent = document.getElementById("rent-input");
    let rentValue = rent.value
    let rentIntValue = parseFloat(rentValue);

    // Clothes =====
    let clothes = document.getElementById("cloth-input");
    let clothesValue = clothes.value;
    let clothIntValue = parseFloat(clothesValue);

    // Call Income inful field =========== 
    let incomeInputField = document.getElementById("income-input");
    let incomeInputValue = incomeInputField.value;
    let incomeValueNum = parseFloat(incomeInputValue);

    // Error Handling ===========
    if ( foodIntValue > 0 && rentIntValue > 0 && clothIntValue > 0 && incomeInputValue > 0 ) {
        let total = (foodIntValue + rentIntValue + clothIntValue);
        let totalValue =  total;
        // Call Total Expenses ===================
        let totalExpenses = document.getElementById("total-expenses");
        let totalCost = totalExpenses.innerText = totalValue;
       
        let remaining = incomeValueNum - total;

         // Call TotalBalance field =========== 
        let TotalBalance = document.getElementById("totalBalance");
        let BalanceText = TotalBalance.innerText;
        let remainingBalance =  TotalBalance.innerText = remaining;
    } else {
        alert("Please Enter Valid number")
    }

    // Emty all input field
    food.value= " ";
    rent.value= " ";
    clothes.value= " ";
    incomeInputField.value= " ";
}

// Saving Calculate Function Start =================
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

    // Final Balance Calculate ==================
    let finalRemainingBalance = BalanceTextNumber - totalSavingAmount;

    let remainingBalance = document.getElementById("remaining-balance");
    let remainingBalanceValue = remainingBalance.innerText;
    let finalBlance = remainingBalance.innerText = finalRemainingBalance;
    //  Call Remaining Balance ==================
    let remainingBalanceValueNumber = parseFloat(finalBlance);
    // Clear Save Input field =====================
    saveParsant.value = " ";
    income.value = " ";
}

