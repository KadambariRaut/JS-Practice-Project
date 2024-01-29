function calculateTip() {
    var billAmountInput = document.getElementById("billAmount");
    var percentageTipInput = document.getElementById("percentageTip");
    var tipAmountInput = document.getElementById("tipAmount");
    var totalAmountInput = document.getElementById("totalAmount");
    var errorMessageElement = document.getElementById("errorMessage");

    var billAmount = parseFloat(billAmountInput.value);
    var percentageTip = parseFloat(percentageTipInput.value);

    if (isNaN(billAmount) || isNaN(percentageTip)) {
        errorMessageElement.textContent = "Please enter valid Input.";
        return;
    }

    if (billAmount <= 0 || percentageTip < 0) {
        errorMessageElement.textContent = "Please enter positive values.";
        return;
    }

    errorMessageElement.textContent = ""; 
    var calculatedTip = (percentageTip / 100) * billAmount;
    var totalAmount = billAmount + calculatedTip;

    tipAmountInput.value = calculatedTip.toFixed(2);
    totalAmountInput.value = totalAmount.toFixed(2);
}