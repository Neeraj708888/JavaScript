
// Parent class
class Student{
    constructor(name, age, classname){
        this.name = name;
        this.age = age;
        this.classname = classname;
    }
    bio_data(){
        return `Name: ${this.name}, Age: ${this.age}, Class: ${this.classname}`
    }
}

// sub-class - child class

class Player extends Student{
    constructor(name, age, classname, game){
        // use super keyword to access parent class properties
        super(name, age, classname);
        this.game = game;
    }
    player(){
        return `${super.bio_data()} play game is ${this.game}`
    }
}

// sub-class - child class of Player
class Cricket extends Player{
    constructor(name, age, classname, game, team){
        super(name, age, classname, game);
        this.team = team;
    }
    team_player(){
        return `${super.player()} Team is ${this.team}`
    }
}

// let obj = new Student('Neeraj', 26, 'MCA');
// let obj = new Player('Neeraj', 26, 'MCA', 'Football');
let obj = new Cricket('Neeraj', 26, 'MCA', 'Football', 'Cricket Team');
console.log(obj.team_player());