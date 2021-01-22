//Задание 1
function getSolutions( a, b, c ) {
    let D = Math.pow(b , 2) - 4 * a * c;
    if (D = 0) {
        let x1 = (- b + Math.sqrt(D)) / (a * 2);
        return {D : D, roots : x1};
    } else if (D > 0) {
        let x1 = (- b + Math.sqrt(D)) / (a * 2);
        let x2 = (- b - Math.sqrt(D)) / (a * 2);
        return { D:D, roots: [x1, x2]};
    } else {
        return {D:D, roots: []};
    }
}

function showSolutionsMessage( a, b, c ){
    let result = getSolutions;
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`),
    console.log(`Значение дискриминанта: ${result['D'] = Math.pow(b , 2) - 4 * a * c }`);
  if( getSolutions.D === 0){
  console.log(`Уравнение имеет один корень X₁ = ${result['x1'] = (- b + Math.sqrt(getSolutions.D)) / (a * 2)} `);
  } else if(getSolutions.D > 0){
  console.log(`Уравнение имеет два корня. X₁ = ${result['x1'] = (- b + Math.sqrt(getSolutions.D)) / (a * 2)}, X₂ = ${result['x2'] = (- b - Math.sqrt(getSolutions.D)) / (a * 2)}`);
  } else {
  console.log(`Уравнение не имеет вещественных корней`);
  }
}
showSolutionsMessage( 1, 2, 3 );
showSolutionsMessage( 7, 20, -3 );
showSolutionsMessage( 2, 4, 2 );

//Задание 2



     function getAverageScore(data){
        data = { algebra : [2, 4, 5, 2, 3, 4],
            geometry : [2, 4, 5],
            russian : [3, 3, 4, 5],
            physics : [5, 5],
            music : [2, 2, 6],
            english : [4, 4, 3],
            poetry : [5, 3, 4],
            chemistry : [2],
            french : [4, 4]
        };
        
         
        let countElementsData = Object.keys(data).length;
         console.log(countElementsData);
         
        for (let prop in data) {
         let value = data[ prop ];
         let averageMark = getAverageMark(value);
         console.log({ [ prop ] : averageMark });
         }
         
         }
         
        
        function getAverageMark(marks){
            if(marks.length === 0){
                return 0;
            } else {
                let sum = 0;
                for(let i = 0; i < marks.length; i++){
                    sum += marks[i];
                }
                let averageMarks = sum / marks.length;
                 
                return averageMarks;
            }
        }
        
        
        console.log(getAverageScore({
           algebra : [2, 4, 5, 2, 3, 4],
            geometry : [2, 4, 5],
            russian : [3, 3, 4, 5],
            physics : [5, 5],
            music : [2, 2, 6],
            english : [4, 4, 3],
            poetry : [5, 3, 4],
            chemistry : [2],
            french : [4, 4]
         }));