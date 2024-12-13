class Animal {
  brain = true;
  legs = 0;
  name = "unknown name";

  // method
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Human extends Animal {
  legs = 4;
  eyesCount = 2;
  name = "Leo"; // override atau di timpa
}

class Pet extends Animal {
  legs = 4;
  fleas = 0;
}

class Cat extends Pet {
  fleas = 4;
}

class Dog extends Pet {
  fleas = 8;
}

const kitty = new Cat();
console.log(kitty.brain);

const breno = new Dog();
breno.name = "Breno";
console.log(breno.name);

// const unknownAnimal = new Animal();
// console.log(unknownAnimal.legs);

// const leo = new Human();
// const paste = new Human();
// // console.log(leo.brain);
// paste.sleep();
