const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { type } = require("os");

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

    function chooseEmployee() {
        console.log(teamArray);
    }
};

runProgramme();


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Psuedo --

// 1 - create array for team
// 2 - use inquirer.prompt() to created questions and answers for Manager - take these anwers and create new manager using prebuilt class
// 3 - run a function called choose / this function asks user what they want to build . then if user wants enginerr run engineer function . then run choose /
// if intern run intern function then choose (intern and engineer functions also create objects using subclasses and push this to the team array)
// 4 - once user selects none we return and run the buildHTML function which creates output directory and writes file there with the data as generateTeam(teamArray)
