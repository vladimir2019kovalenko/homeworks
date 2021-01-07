
function calculfateTotalMortgage(percent, contribution, amount, date) {
    let S = amount - contribution; 
    console.log(S);
    let n = date;
    console.log(n);
    let P = ((percent/100) / 12) ;
    console.log(P);
    let monthlyPayment = S * (P + P / (Math.pow((1 + P), n) - 1));
    console.log(monthlyPayment);
    let totalAmount = (monthlyPayment * n).toFixed(2);
    console.log(totalAmount);
         return totalAmount;
    }

function getGreeting(name) {
let myName = name;
let greeting = (`Привет, мир! Меня зовут ${name || "Аноним"}`);
    return greeting;
}