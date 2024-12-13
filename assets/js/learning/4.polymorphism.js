class Animal {
  speak() {
    console.log("Please define either 'Duck' or 'Cat' to speak!");
  }
}

class Duck extends Animal {
  speak() {
    console.log("Qwack!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Miaw!");
  }
}

const duck = new Duck();
duck.speak();

const cat = new Cat();
cat.speak();
