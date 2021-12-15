console.log(`script.js is linked into index.html!`);

var calcButton = document.getElementById("calcButton");

var tipCalculateEvent = function()
{
    var mealCost = document.getElementById("mealCost").value;
    var tipPercent = document.getElementById("tipPercent").value / 100;
    var billPayers = document.getElementById("billPayers").value;

    var tipAmount = Number(mealCost) * Number(tipPercent);
    var totalCost = Number(mealCost) + tipAmount;

    var solution = totalCost / billPayers;

    document.getElementById("Solution").innerText = "Each person owes: " + solution.toFixed(2) + " with a tip total of: " + tipAmount.toFixed(2);
};

calcButton.addEventListener("click", tipCalculateEvent);