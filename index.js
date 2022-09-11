const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer")
const fs = require("fs");

// TODO: CODE GOES HERE
inquirer
.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your employee ID?",
        name:"id"
    },
    {
        type: "input",
        message: "Whatg is your email address?",
        name:"email"
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "number"
    },
    {
        type: "list",
        message: "Which type of member would you like to add to your team?",
        choices: ["Engineer", "Intern", "I am finished adding my team"],
        name: "team",
    }
])
.then((response) =>{
    const manager = new Manager;

  manager.call();
})