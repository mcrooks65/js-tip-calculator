console.log(`script.js is linked into index.html!`);

var calcButton = document.getElementById("calcButton")

var tipCalculateEvent = function()
{
    document.getElementById("Solution").innerText = "Click event works!"

};

calcButton.addEventListener("click", tipCalculateEvent);