// using functional 
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function division (a, b) {
    return a / b;
}

function calculate (a, b, operator) {
    switch (operator) {
        case 'add': return add (a,b);
        case 'subtract': return subtract (a,b);
        case 'multiply': return multiply (a,b);
        case 'division': return division (a,b);
        default: throw new Error('Invelid Operator');
    }
}

const result = calculate (6,3, 'add');
console.log(result);


// using constructor

function Calculator (a, b, operator) {
    this.a = a;
    this.b = b;
    this.operator = operator;
    this.calculate = function () {
        switch (this.operator) {
            case 'add': return this.a + this.b;
            case 'subtract': return this.a - this.b;
            case 'multiply': return this.a * this.b;
            case 'division': return this.a / this.b;
            default: throw new Error('Invelid Operator');
        }
    }
    
    }
    
const calc = new Calculator (6,3, 'multiply');
console.log(calc.calculate());


function Calculator1() {}

// Defining the method on prototype (shared across instances)
Calculator1.prototype.calculate = function(a, b, operator) {
    switch (operator) {
        case 'add':
            return this.add(a, b);
        case 'subtract':
            return this.subtract(a, b);
        case 'multiply':
            return this.multiply(a, b);
        case 'division':
            return this.division(a, b);
        default:
            throw new Error('Invalid Operator');
    }
};

// Internal operations as methods on prototype
Calculator1.prototype.add = function(a, b) {
    return a + b;
};

Calculator1.prototype.subtract = function(a, b) {
    return a - b;
};

Calculator1.prototype.multiply = function(a, b) {
    return a * b;
};

Calculator1.prototype.division = function(a, b) {
    return a / b;
};

// Usage
let cal = new Calculator1();
console.log(cal.calculate(10, 5, 'add'));       // 15
console.log(cal.calculate(10, 5, 'multiply'));  // 50

// Using class  with private properties
class Calculators {
    // constructor function
    calculated (a, b, operator) {
        switch (operator) {
            case 'add': return this.#add (a, b);
            case 'subtract': return this.#subtract (a, b);
            case 'multiply': return this.#multiply (a, b);
            case 'division': return this.#division (a, b);
            default: throw new Error('Invalid Input');
        }
    }

    // Private Methods
    #add (a, b) {
        return a +  b;
    }
    #subtract (a, b) {
        return a +  b;
    }
    #multiply (a, b) {
        return a +  b;
    }
    #division (a, b) {
        return a +  b;
    }
}

let calValues = new Calculator();
console.log(cal.calculate(10, 3, 'add'));       // 15
console.log(cal.calculate(10, 6, 'multiply'));  // 50

