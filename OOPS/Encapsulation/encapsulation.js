
// -------->>>>>>> 1st Approach <<<<<------------
class Employee{
    constructor(){
        var name;
        var marks;
    }
    // defining the setter method
    setName(name){
        this.name = name;
    }
    setMarks(marks){
        this.marks = marks;
    }

    // defining the getter method
    getName(){
        return this.name;
    }

    getMarks(){
        return this.marks;
    }
}

let emp = new Employee();
emp.setName('Neeraj');
emp.setMarks(78);
console.log(emp.getName(), emp.getMarks());

// ----------------->>>>>   2nd Approach  <<<<<<------------
class Employee2 {
    // PRIVATE FIELDS
    #name;
    #marks;
    // we don't need make the constructor it's a default use
    constructor(name, marks) {
        this.#name = name;
        this.#marks = marks;
      }

    setName(name) {
        this.#name = name;
    }

    setMarks(marks) {
        this.#marks = marks;
    }

    getName() {
        return this.#name;
    }

    getMarks() {
        return this.#marks;
    }
}

let emp1 = new Employee2();
emp1.setName('Neeraj');
emp1.setMarks(78);
console.log(emp1.getName(), emp1.getMarks()); // Neeraj 78

// -------->>>>> Prototype-based Approach on functions <<<<<<----------
// Encapsulation using Closure + Prototype

function Employee3 (name, marks) {
    // private variables
    let _name = name;
    let _marks = marks;

    // public set methods to set values
    this.setName = function (newName){
        _name = newName;
    }   
    this.setMarks = function(newMarks){
        _marks= newMarks;
    }
    // public get method to get values
    this.getName = function () {
        return _name;
    }
    this.getMarks = function () {  
        return _marks;
    }
}
// usage
let emp3 = new Employee3('Neeraj', 78);
console.log(emp3.getName(), emp3.getMarks());
emp3.setName("Aarti");
emp3.setMarks(84);
console.log(emp3.getName(), emp3.getMarks());

console.log(emp3._name); // undefined

// ----->>>>>>> Using Prototype <<<<<<<<---------
function Employee4 (name, marks) {
    // private variables using closure
    let _name = name;
    let _marks = marks;

    // public methods exposed via instance (not prototype)
    this.getName = function () {
        return _name;
    };

    this.getMarks = function () {
        return _marks;
    };

    this.setName = function (newName) {
        _name = newName;
    };

    this.setMarks = function (newMarks) {
        _marks = newMarks;
    };
}

// Usage
let emp4 = new Employee4('Neeraj', '90');
console.log(emp4.getName(), emp4.getMarks());
emp4.setName('Aarti');
emp4.setMarks(92);
console.log(emp4.getName(), emp4.getMarks()); // ✅ Aarti 92

// ----->>>>> Encapsulation Prototype +  WeakMap <<<<<<--------
 const _private = new WeakMap();

 function Employee5 (name, marks) {
    // set private data for each instances
    _private.set(this, {
        name: name,
        marks: marks
    });

    // set the values
    Employee5.prototype.setName = function (newName) { 
        _private.get(this).name = newName;
     }
     Employee5.prototype.setMarks = function (newMarks) {
        _private.get(this).marks = newMarks;
     }

     // get the values
     Employee5.prototype.getName = function () {
        return _private.get(this).name;
     }
     Employee5.prototype.getMarks = function () {
        return _private.get(this).marks;
     }
 }

 let emp5 = new Employee5('Neeraj', 89);
 console.log(emp5.getName(),emp5.getMarks());
 emp5.setName('Aarti');
 emp5.setMarks(93);
 console.log(emp5.getName(),emp5.getMarks());