function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    
let S = amount - contribution; 
console.log(S);

let n = date;
console.log(n);
let P = (percent*100) / 12;
let monthlyPayment = S*(P+P/(((1+P)^n)-1)).toFixed(0);
let totalAmount = (monthlyPayment * n).toFixed(2);
console.log(totalAmount);
     return totalAmount;
}


function getGreeting(name) {
    // код для задачи №2 писать здесь
    let myName = name;
    let greeting = `Привет, мир! Меня зовут ${myName}.`;
    if(myName = " "){
        myName === "Аноним";
    } else {

    }
    
     return greeting;
}