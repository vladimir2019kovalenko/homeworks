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
         return parseCount(str);
        } catch(e) {
        return e;
        }
    }
    // Задача 2

    class Triangle {
        constructor (a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
            if ((a + b) < c, (b + c) < a, (a + c) < b) {
                throw new Error ("Треугольник с такими сторонами не существует");  
            } 
        }
         getPerimeter(perimeter) {
            perimeter = this.a + this.b + this.c;
            return perimeter;
        }
         getArea(area) {
            let semiPerimeter = this.getPerimeter() / 2;
            area = Math.sqrt(semiPerimeter * ((semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c)));
            let areaFix = +area.toFixed(3);
            return areaFix;
        }
    }
    
         function getTriangle(a, b, c) {
         try {
             return new Triangle(a, b, c);
          } catch(e) {
           return  e.triangle = {
              getArea:getArea("Ошибка! Треугольник не существует!"),
              getPerimeter:getPerimeter("Ошибка! Треугольник не существует!")
             }  
           }
    }
    const triangle = new Triangle(6,10,15);
    console.log(triangle.getPerimeter());
    console.log(triangle.getArea());