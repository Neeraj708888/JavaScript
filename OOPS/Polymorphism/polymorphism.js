class Animal {
    speak () {
        console.log('Animal can make a sounds');
    }
}

class Dog extends  Animal {
    speak () {
        console.log('Dog barks..');
    }
}

class Cat extends Animal {
    speak () {
        console.log('cats meows...');
        
    }
}
// 1st approach
// const animals = [new Dog(), new Cat()];
// animals.forEach(animal => animal.speak());

const dogs = new Dog();
const cats = new Cat();
dogs.speak();
cats.speak();