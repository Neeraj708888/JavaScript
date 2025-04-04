// Function based Prototype

function Animal (name){
    this.dogname = name;
};

Animal.prototype.category = function(){
    console.log(`This is ${this.dogname}.`);
    
};

function Dog(name, category){
    Animal.call(this, name);
    this.dogcategory = category;
};

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Method for Dog class
Dog.prototype.dogtype = function(){
    console.log(`${this.dogname} comes under this category ${this.dogcategory}`);
    
};

let dog = new Dog('Buddy', 'Zebronic');
dog.dogtype();
dog.category();