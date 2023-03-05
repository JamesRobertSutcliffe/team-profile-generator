const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { type } = require("os");
const { default: Choices } = require("inquirer/lib/objects/choices");


//Array of objects that holds built team
const teamArray = [];


//Functions boots programme and builds team
function runProgramme() {
    generateManager();

    function generateManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager name?",
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character."
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is the managers employee ID?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character."
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the managers Email?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character."
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the managers employee office number?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character."
                    } else {
                        return true;
                    }
                }
            }
        ]).then((answer) => {
            const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber);
            teamArray.push(manager)
            chooseEmployee();
        });
    };

    function generateEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineers name?",
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character"
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'What is the engineers employee ID?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character"
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineers Email?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character"
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the engineers GitHub username?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character"
                    } else {
                        return true;
                    }
                }
            }
        ]).then((answer) => {
            const engineer = new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerGithub);
            teamArray.push(engineer)
            chooseEmployee();
        });
    }

    function generateIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the interns name?",
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character"
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: 'What is the interns employee ID?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character"
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the interns Email?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character"
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the interns school?',
                validate: answer => {
                    if (answer == "") {
                        return "Please enter at least 1 character"
                    } else {
                        return true;
                    }
                }
            }
        ]).then((answer) => {
            const intern = new Intern(answer.internName, answer.internID, answer.internEmail, answer.internSchool);
            teamArray.push(intern);
            chooseEmployee();
        });
    }

    function chooseEmployee() {
        inquirer.prompt([
            {
                type: "list",
                name: "employeeChoice",
                message: "Which employee type would you like to add?",
                choices: ["Engineer", "Intern", "I am finished building the team."]
            },
        ]).then((answer) => {
            if (answer.employeeChoice === "Engineer")
                generateEngineer()
            else if (answer.employeeChoice === "Intern")
                generateIntern()
            else
                buildHTML()
        });
    }
};


// Function creates output and html file then renders built team onto the html page
function buildHTML() {
    fse.outputFile('output/team.html', render(teamArray));
    console.log("Success! you have built your HTML page!")
}

runProgramme();
