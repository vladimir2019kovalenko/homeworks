// Задача 1
function parseCount(text) {
    let parse = Number.parseInt(text);
    if (isNaN(parse)) {
      throw new Error ('Невалидное значение');
    }
        return parse;
    }
    
    function validateCount(str) {
        try {
          parseCount(str);
        } catch(e) {
        return e;
        }
        return parseCount(str);
        }
    // Задача 2

    class Triangle {
        constructor (a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
            if ((a + b) < c) {
                throw new Error ("Треугольник с такими сторонами не существует");  
            } else if ((b + c) < a) {
                throw new Error ("Треугольник с такими сторонами не существует"); 
            } else if ((a + c) < b) {
                throw new Error ("Треугольник с такими сторонами не существует");
            }
        }
        getPerimeter(perimeter) {
            perimeter = this.a + this.b + this.c;
            return perimeter;
        }
        getArea(aria) {
            let semiPerimeter  = this.getPerimeter / 2;
            aria = `Math.sqrt(${semiPerimeter} * ((${semiPerimeter} - ${this.a}) * (${semiPerimeter} - ${this.b}) * (${semiPerimeter} - ${this.c})))`;
            let ariaFix = +aria.Fixed(3);
            console.log(ariaFix);
            return ariaFix;
        }

    }
       function getTriangle (a, b, c) {
         try {
             return new Triangle();
          } catch {
            const obj = new Obj(getArea, getPerimeter)
             return "Ошибка! Треугольник не существует";
          }
    }