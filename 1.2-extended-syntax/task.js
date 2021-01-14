function getResult(a,b,c){
    // код для задачи №1 писать здесь
     
    let x = [];
    let discriminant = Math.pow(b , 2) - 4 * a * c;
    if (discriminant === 0) {
        x.push((- b + Math.sqrt(discriminant)) / (a * 2));
        return x;
    } else if (discriminant > 0) {
        x.push((- b + Math.sqrt(discriminant)) / (a * 2), (- b - Math.sqrt(discriminant)) / (a * 2) );
        return x;
    } 
    {
        return x;
    }
}


function getAverageMark(marks){
    if(marks.length === 0){
        return 0;
    } else {
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
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    console.log(age);
    if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
}