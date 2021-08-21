
let operation = "";
const calcOperation = document.querySelector('#calcOperation');
const resultToDisplay = document.querySelector('#resultToDisplay');

function calcMath(value) {
    operation += value;
    calcOperation.value = operation;
} 

function execCalcMah() {
    if(operation.length == 0 || operation == "") {
        alert("Precisa inserir um valor");
        return;
    } try {
       let calcOperation = eval(operation);
        resultToDisplay.value = calcOperation;
    } catch (err) {
        alert("Input invalido !");
    }
} 

function cleanNumber() {
    operation == operation.substring(0, operation.length - 1);
    calcOperation.value = operation;
}

function reset() {
    calcOperation.value = "";
    resultToDisplay.value = "";
    operation = "";
}

