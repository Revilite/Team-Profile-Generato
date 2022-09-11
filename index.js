const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer")
const fs = require("fs");
const gen = require("./src/page-template.js");

// TODO: CODE GOES HERE

const init = ()=> {


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
])
.then((response) =>{
    loop();
})
}

const loop = () => {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Which type of member would you like to add to your team?",
            choices: ["Engineer", "Intern", "I am finished adding my team"],
            name: "team",
        }
    ])
    .then((response) => {
        if(response.team == "Engineer"){
            engineer();
        }
        else if(response.team == "Intern"){
            intern();
        }
        else{
            console.log("file has been made");
        }
    })

    
}



const engineer = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your engineers name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your engineers ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your engineers email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineers Github username?",
            name: "github",
        },
    ])
    .then((response) =>{
        console.log(response);
        loop()
    })
}

const intern = () =>{
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your interns name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your interns ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your interns email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What school does your intern go to?",
            name: "school",
        },

    ])
    .then((response) =>{
        console.log(response);
        loop();
    })
}







init();