// factory pattern
function createStudent(name, id, noOfProjects) {
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;

    user.getProjects = function () {
        return this.noOfProjects;
    };
    user.changeName = function (newName) {
        let preName = user.name;
        user.name = newName;
        return preName;
    };
    user.incrementProject = function () {
        user.noOfProjects += 1;
        return user.noOfProjects;
    };
    user.decrementProject = function () {
        user.noOfProjects -= 1;
        return user.noOfProjects;
    };
    return user;
}
// prototypal pattern
let userMethods = {
    getProjects() {
        return this.noOfProjects;
    },
    changeName(newName) {
        let preName = this.name;
        this.name = newName;
        return preName;
    },
    incrementProject() {
        this.noOfProjects += 1;
        return this.noOfProjects;
    },
    decrementProject() {
        this.noOfProjects -= 1;
        return this.noOfProjects;
    },
};

function createStudent(name, id, noOfProjects) {
    let user = Object.create(userMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
}

// pseudoclassical pattern
function CreateStudent(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;

}
CreateStudent.prototype = {
    getProjects() {
        return this.noOfProjects;
    },
    changeName(newName) {
        let preName = this.name;
        this.name = newName;
        return preName;
    },
    incrementProject() {
        this.noOfProjects += 1;
        return this.noOfProjects;
    },
    decrementProject() {
        this.noOfProjects -= 1;
        return this.noOfProjects;
    },
};

//class organize
class Student {
    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects() {
        return this.noOfProjects;
    }
    changeName(newName) {
        let preName = this.name;
        this.name = newName;
        return preName;
    }
    incrementProject() {
        this.noOfProjects += 1;
        return this.noOfProjects;
    }
    decrementProject() {
        this.noOfProjects -= 1;
        return this.noOfProjects;
    }
}
//  test function
let aman = createStudent("aman", 101, 10);
let priya = createStudent("priya", 116, 17);
let miraj = new CreateStudent( "miraj pandey", 114,30);
let raj = new Student("raj",111,25);

console.group("Aman");
console.log(aman.name);
console.log(aman.id);
console.log(aman.incrementProject());
console.log(aman.decrementProject());
console.log(aman.changeName("David"));
console.log(aman.name);
console.groupEnd();

console.group("priya");
console.log(priya.name);
console.log(priya.id);
console.log(priya.incrementProject());
console.log(priya.decrementProject());
console.log(priya.changeName("David"));
console.log(priya.name);
console.groupEnd();
