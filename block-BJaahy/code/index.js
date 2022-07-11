
// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
class Square {
 constructor(side){
     this.width = side;
     this.height = side;
     this.numberOfTimes = 0;
 }
// - Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`
    description(){
        alert `The square is ${this.width} x ${this.height}`
    }
 // - Create another method named `calcArea` that will return the area of the square.
    calcArea(){
        return this.width * this.height ;
    }   
 // - Create a getter method named `area` that will return area of the square.
    get area(){
        this.numberOfTimes++;
        if(this.numberOfTimes >= 4){
            alert `Upper limit reached`;;;
        } else{
            return this.width * this.height ;
        }

    }
 // - Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))
    set area(value) {
      let side =  Math.sqrt(value);
      this.width =side;
      this.height = side;
    }
    // - Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)
    static isEqual(a,b){
        return( a.width * a.height) === (b.width * b.height);;
    }
}

// - Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
let square1 = new Square(200);
let square2 = new Square(100);
// - Check the `area` getter method on both square.
square2.area = 40000;
// - Check the `isEqual` method and pass the two instance you created above.
Square.isEqual(square1,square2);

// - Create a class named `User` that accepts `firstName` and `lastName` property
class User {
    constructor(firstname , lastNamee){
        this.fn = firstname;
        this.ln = lastNamee;
    }
  // - Create a getter method named `fullName` that will return the full name of the person.
  get fullName(){
    return `${this.fn} ${this.ln}`
  }
  // - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input.(Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)
  set fullName(name){
    if(name.length < 5){
        alert (`Full name should be ore than 5 characters`);
    } else{
        let firstName = name.split(' ')[0];
        let lastName = name.split(' ')[1];
        this.fn = firstName;
        this.ln = lastName;
    }
  }
    // - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
    nameContains(str){
        return  `${this.fn} ${this.ln}`.includes(str);
    }
}
// - Create two instance of the `User` class
let user = new User('john' , 'stark');
// - Check by using the `fullName` setter method with name bigger than 5 characters.
user.fullName
// - Check by using the `fullName` setter method with name less than 5 characters.
user.fullName = "Aray Stark";
// - Check the `fullName` using getter
user.fullName
// - Check the `nameContains` method
user.nameContains("sr")