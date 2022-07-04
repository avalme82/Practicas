function formatPrecision (valor){ return parseFloat(valor.toFixed(2)); }
function onClickCheckSplit(tip){
    const inputCheck = parseFloat(document.getElementById("check").value);
    const inputPeople = parseInt(document.getElementById("people").value);
    const tipByCheck = (inputCheck*tip)/100;
    const checkTipIncluded = document.getElementById("checkTipIncluded");
    checkTipIncluded.innerText = formatPrecision(inputCheck+tipByCheck);
    const checkTip = document.getElementById("checkTip");
    checkTip.innerText = formatPrecision(tipByCheck);
    const checkSplit = document.getElementById("checkSplit");
    checkSplit.innerText = formatPrecision((inputCheck+tipByCheck)/inputPeople);
    const tipSplit = document.getElementById("tipSplit");
    tipSplit.innerText = formatPrecision(tipByCheck/inputPeople);
}