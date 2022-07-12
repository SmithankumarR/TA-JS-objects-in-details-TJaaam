function CreateAnimal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}
CreateAnimal.prototype = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    return (this.location = newLocation);
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs `;
  },
};

function Dog(location, numberOfLegs, name, color) {
    CreateAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.color = color;
}
Dog.prototype = {
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
Object.setPrototypeOf(Dog.prototype , CreateAnimal.prototype);

function Cat(location, numberOfLegs, name, colorOfEyes) {
    CreateAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}
Cat.prototype = {
    meow() {
        alert`I am ${this.name} and I can do mewo meow 😹 `;
    },
    changeName(newName) {
        return (this.name = newName);
    },
    changeColorOfEyes(newColor) {
        return (this.colorOfEyes = newColor);
    },
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow 😹`
    },
};
Object.setPrototypeOf(Cat.prototype , CreateAnimal.prototype);

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    return (this.location = newLocation);
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs `;
  }
}

class Dog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    // CreateAnimal.apply(this, [location, numberOfLegs]);
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert`I am ${this.name} and I can bark 🐶`;
  }
  changeName(newName) {
    return (this.name = newName);
  }
  changeColor(newColor) {
    return (this.color = newColor);
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

class Cat extends Animal {
  constructor(location, numberOfLegs, name, colorOfEyes) {
    // CreateAnimal.apply(this, [location, numberOfLegs]);
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    alert`I am ${this.name} and I can do mewo meow 😹 `;
  }
  changeName(newName) {
    return (this.name = newName);
  }
  changeColorOfEyes(newColor) {
    return (this.colorOfEyes = newColor);
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow 😹`;
  }
}
