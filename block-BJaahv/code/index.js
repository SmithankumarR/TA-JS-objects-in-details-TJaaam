// factory pattern
function student(name, id, noOfProjects) {
    return `Iam ${name} ,My id Number ${id} and i had completed ${noOfProjects} projects`;
}

function getProjects() {
    return this.noOfProjects;
}
function changeName(newName) {
    return (newName = this.name);
}
function incrementProject(Update) {
    return (Update = this.noOfProjects + Update);
}
function decrementProject(Update) {
    return (Update = this.noOfProjects + Update);
}

// prototypal pattern
let studentMethods = {
    getProjects() {
        return this.noOfProjects;
    },
    changeName(newName) {
        return (newName = student.name);
    },
    incrementProject(Update) {
        return (Update = student.noOfProjects + Update);
    },
    decrementProject(Update) {
        return (Update = student.noOfProjects + Update);
    },
};

function students(name, id, noOfProjects) {
    let student = Object.create(studentMethods);
    student.name = name;
    student.id = id;
    student.noOfProjects = noOfProjects;
    return student;
}
// pseudoclassical pattern
function students(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

students.prototype = {
    getProjects() {
        return this.noOfProjects;
    },
    changeName(newName) {
        return (newName = student.name);
    },
    incrementProject(Update) {
        return (Update = student.noOfProjects + Update);
    },
    decrementProject(Update) {
        return (Update = student.noOfProjects + Update);
    },
};
// oraganize using class pattern
class Students {
    construtor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects() {
        return this.noOfProjects;
    }
    changeName(newName) {
        return (this.name = newName);
    }
    incrementProject(Update) {
        return ( this.noOfProjects + Update);
    }
    decrementProject(Update) {
        return (this.noOfProjects + Update);
    }
};
//  test function
let user = new Students("Asha", 101, 10);
let user_1 = new Students("Priya", 104, 5);
let user_2 = new Students("Geetha", 108, 8);
console.group(user);
console.log(user.name);
console.log(user.id);
console.log(user.noOfProjects);
console.groupEnd(user);
