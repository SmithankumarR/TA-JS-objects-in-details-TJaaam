let animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    return (this.location = newLocation);
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOflegs} legs`},
};

function Animal(location, numberOflegs) {
  let pet = Object.create(animalMethods);
  pet.location = location;
  pet.numberOflegs = numberOflegs;

  return pet;
}

let dogMethods = {
    bark() {
        alert`I am ${this.name} and I can bark 🐶`;
    },
    changeName(newName) {
        return (this.name = newName);
    },
    changeColor(newColor) {
        return (this.color = newColor);
    },
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    },
};
Object.setPrototypeOf(dogMethods,animalMethods);

function Dog(location, numberOflegs,name, color) {
    let pet_1 = Animal(location,numberOflegs);
    Object.setPrototypeOf(pet_1 , dogMethods);
    pet_1.name = name;
    pet_1.color = color;
    
    return pet_1;
}

let catMethods = {
    meow() {
        alert`I am ${this.name} and I can mewo meow 😹 `;
    },
    changeName(newName) {
        return (this.name = newName);
    },
    changeColorOfEyes(newColor) {
        return (this.color = newColor);
    },
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow  😹`},
};
Object.setPrototypeOf(catMethods,animalMethods);

function Cat(location,numberOflegs,name, colorOfEyes) {
    let pet_2 = Animal(location,numberOflegs,);
    Object.setPrototypeOf(pet_2, catMethods);
    pet_2.name = name;
    pet_2.colorOfEyes = colorOfEyes;
    
    return pet_2;
}


