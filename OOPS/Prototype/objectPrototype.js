// Object Based Prototype
let data = {
    name: "Neeraj Kumar",
    class: "MCA",
    username: function(){
        return this.name + " is a " + this.class + " student";
    }
}
// console.log(Object);

let user = {
    age: 25,
    __proto__: data,
    userdetails: function(){
        return this.name;
    }
}
console.log(user.username());



