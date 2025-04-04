// using class based inheritance or prototype

class UserData {
    constructor(name, age){
        this.username = name;
        this.userage = age;
    }

    data() {
        console.log(`My name is ${this.username} and i am ${this.userage} years old.`);
        
    }
}

class User extends UserData {
    constructor(name, age, classname){
        super(name, age);
        this.classname = classname;
    }

    personal(){
        console.log(`My name is ${this.username} and i am ${this.userage} years and I am in ${this.classname}`);
    }
}
// const details = new UserData('Neeraj', 27);
const result = new User('Neeraj', 27, 'MCA');
result.data();
result.personal();
