function getResult(a,b,c){
    // код для задачи №1 писать здесь
     a = 2;
     b = 4;
     c = 3;
    let x = [];
    let discriminant = `${Math.pow(b , 2) - 4 * a * c}`;
    
    
      if (discriminant = 0) {
        let mathRootFirst = `${(((- b) + Math.sqrt(discriminant).toFixed(2)) / (a * 2))}`;
        return x.push(mathRootFirst);
    } else if (discriminant > 0) {
        let mathRootSecond = `${(((- b) - Math.sqrt(discriminant).toFixed(2)) / (a * 2))}`;
        return x.push(mathRootFirst, mathRootSecond);
    } else {
        return x;
    }
}


function getAverageMark(marks){
    // код для задачи №2 писать здесь
    
    if(marks === []){
        return 0;
    } else  if(marks === ![]) {
        marks.splice(5);
        let sum = 0;
        for(let i = 0; i < marks.length; i++){
            sum += marks[i];
        }
        let averageMark = sum / marks.length;
        return averageMark;
    }
}


function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday;
    if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
}