class Person {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log (`${this.name} is  going to eat  will you join`);
    }
    sleep(){
        console.log(` i will have 8 hours sleep daily`)
    }
    walk(){
        console.log(` ${this.name} walks 2 km daily from his house `)
    }
}

class Player extends Person {
    constructor(sportsName){
        super(name,age,gender)
        this.sportsName = sportsName;
    }
    play(){
        alert `${this.name} is the best player in ${this.sportsName} `;
    }
}
class Cricketer extends Player{
    constructor(teamName){
        super(this.sportsName)
        this.teamName = teamName;
    }
    playCricket(){
        alert ` i love ${this.teamName} in ${this.sportsName}`
    }

}
class Teacher extends Person {
      constructor(instituteName){
        super(this.name,this.age,this.gender)
        this.instituteName = instituteName;
    }
    teach(){
        alert `${this.name} is the best Teacher in ${this.instituteName} `;
    }
}
class Artist extends Person {
    constructor(Kind){
      super(this.name,this.age,this.gender)
      this.Kind = Kind;
  }
  createArt(){
      alert `${this.name}  is ${this.kind} and the best Artist in these city.`;
  }
}


let virat = new Player("cricket")
let kalam = new Teacher("ISRO")
let Hrithick = new Artist("Honest")
// let team = new Cricketer("INDIA")