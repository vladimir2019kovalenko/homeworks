//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function () {
    let normalized = this.toLowerCase().match(/[а-я]/gi).reverse();
    return normalized.join('') === normalized.reverse().join('');
    }
    
   // Задание №2
function getAverageMark(marks) {
    if(marks.length === 0){
        return 0;
    } else {
        let sum = 0;
        for(let i = 0; i < marks.length; i++){
            sum += marks[i];
        }
        let averageMarks = sum / marks.length;
        let roundedAverage = Math.round(averageMarks);
        return roundedAverage;
    }
}


function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}