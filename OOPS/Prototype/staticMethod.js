class Animal {
    constructor(name){
        this.name = name;
    }
    dog(){
        return `The Dog name is :  ${this.name}`
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() +  name.substring(1)
    }
}

let result = new Animal('jack');
console.log(result.dog());
console.log(Animal.capitalize('jack'));