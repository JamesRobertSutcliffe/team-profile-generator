// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, gitHub) {
        super(name, id, email)

        this.gitHub = gitHub;

    }

    getGithub() { return this.gitHub };

    getRole() { return "Engineer" };
}

// let chips = new Engineer("James", 123, "doo@lala.com", "JRS");

// console.log(chips.getGithub())
// console.log(chips.getName())
// console.log(chips.getRole())

// console.log(chips)

module.exports = Engineer;