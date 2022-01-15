// 1.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radiusCircle() {
        return this.radius;
    }

    set radiusCircle(radius) {
        return this.radius = radius;
    }

    get diameterCircle() {
        return 2 * this.radius;
    }

    squareCircle() {
        return 3.1415 * (this.radius * this.radius);
    }

    lengthCircle() {
        return (3.1415 * 3.1415) * this.radius;
    }
}

let circle = new Circle(14);
circle.radiusCircle = 14;

console.log(circle.radius);

console.log(circle.radiusCircle);

console.log(circle.diameterCircle);

let square = circle.squareCircle();
console.log(square);

console.log(circle.lengthCircle());


// 3.

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        document.write("<table border = \"18\"><tr>");
        for (let i = 0; i < employees.length; i++) {
            document.write("<tr>");
            Object.values(employees[i]).forEach(v => {
                document.write("<td>" + v + "</td>");
            });
            document.write("</tr>");
        }
        document.write("</table>");
    }
}

const employees = [new Employee('Anna', 41,), new Employee('Olga', 18,)];
const empTable = new EmpTable(employees);
empTable.getHtml();