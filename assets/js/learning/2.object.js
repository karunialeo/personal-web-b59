class Dog {
  constructor(
    name = "No Dog Name",
    color = "white",
    eyeColor = "black",
    height = 0,
    length = 0,
    weight = 0,
    ownerName = "No Name"
  ) {
    this.name = name;
    this.color = color;
    this.eyeColor = eyeColor;
    this.height = height;
    this.length = length;
    this.weight = weight;
    this.ownerName = ownerName;
  }

  // methods
  sit() {
    console.log(`${this.name} is sitting`);
  }

  layDown() {
    console.log(`${this.name} is laying down`);
  }

  shake() {
    console.log(`${this.name} is shaking hands with ${this.ownerName}`);
  }

  come() {
    console.log(`${this.name} is coming`);
  }

  info() {
    console.log(`${this.name} has height : ${this.height}`);
  }
}

let breno = new Dog("Breno");
breno.color = "Black";
console.log(breno.color);
// breno.shake();
