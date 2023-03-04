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

const teamArray = [];

function runProgramme() {
    generateManager();
    function generateManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager name?"
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is the managers employee ID?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the managers Email?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the managers employee office number?'
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
                message: "What is the engineers name?"
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'What is the engineers employee ID?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineers Email?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the engineers GitHub username?'
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
                message: "What is the interns name?"
            },
            {
                type: 'input',
                name: 'internID',
                message: 'What is the interns employee ID?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the interns Email?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the interns school?'
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

function buildHTML() {
    fse.outputFile('output/team.html', render(teamArray));

}

runProgramme();



// TODO: Write Code to gather information about the development team members, and render the HTML file.

// finalise

// 1 - write code to ensure correct entries are made for inquirer inputs . i.e. no blank entries / numbers when relevant etc. 
// 2 - ensure file outputs correctly / curently overwrites file if already there, can this be improved and possibly write new file? -
// also add success and error messages and file writing message
// 3 - clean up CSS/ maybe write style to the new document itself or write a seperate css file that is loaded
