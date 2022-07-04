function formatPrecision (valor){ return parseFloat(valor.toFixed(2)); }
function onClickCheckSplit(tip){
    const inputCheck = parseFloat(document.getElementById("check").value);
    const inputPeople = parseInt(document.getElementById("people").value);
    const tipByCheck = (inputCheck*tip)/100;
    document.getElementById("checkTipIncluded").innerText = formatPrecision(inputCheck+tipByCheck);
    document.getElementById("checkTip").innerText = formatPrecision(tipByCheck);
    document.getElementById("checkSplit").innerText = formatPrecision((inputCheck+tipByCheck)/inputPeople);
    document.getElementById("tipSplit").innerText = formatPrecision(tipByCheck/inputPeople);
/*   const checkTipIncluded = checkTipIncluded;
    const checkTip = checkTip;
    const checkSplit = checkSplit;
//    const tipSplit = tipSplit.innerText = ;*/
}