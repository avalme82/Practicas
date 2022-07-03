function onClickCheckSplit(tip){
    const inputCheck = parseFloat(document.getElementById("check").value);
    const inputPeople = parseInt(document.getElementById("people").value);
    const tipByCheck = (inputCheck*tip)/100;
    const checkTipIncluded = document.getElementById("checkTipIncluded");
    checkTipIncluded.innerText = inputCheck+tipByCheck;
    const checkTip = document.getElementById("checkTip");
    checkTip.innerText = tipByCheck;
    const checkSplit = document.getElementById("checkSplit");
    checkSplit.innerText = (inputCheck+tipByCheck)/inputPeople;
    const tipSplit = document.getElementById("tipSplit");
    tipSplit.innerText = tipByCheck/inputPeople;
}