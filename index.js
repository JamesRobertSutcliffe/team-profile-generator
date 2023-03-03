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
    manager();


    function manager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager name?"
            },
            {
                type: 'input',
                name: 'Manager Employee ID',
                message: 'What is your managers employee ID?'
            }
        ]);
    };
};

runProgramme();

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Psuedo --

// 1 - create array for team
// 2 - use inquirer.prompt() to created questions and answers for Manager - take these anwers and create new manager using prebuilt class
// 3 - run a function called choose / this function asks user what they want to build . then if user wants enginerr run engineer function . then run choose /
// if intern run intern function then choose (intern and engineer functions also create objects using subclasses and push this to the team array)
// 4 - once user selects none we return and run the buildHTML function which creates output directory and writes file there with the data as generateTeam(teamArray)
