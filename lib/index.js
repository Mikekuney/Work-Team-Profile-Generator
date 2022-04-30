const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./assets/js/manager.js");
const Engineer = require("./assets/js/engineer.js");
const Intern = require("./assets/js/intern.js");

const generateData = require("./assets/js/generateHTML.js"); 
// console.Console.log(generateData);

const internArray = [];
let manager;
let intern;

const managerPrompts =[
    {
        type: "input",
        name: "name",
        message: "What is the managers name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter managers name");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "id",
        message: "Enter Managers Employee ID",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter managers ID");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message: "Enter Managers Email",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter managers email");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter Managers Office Number",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter managers office number");
                return false;
            }
        },
    },
];

// function with a switch statement to determine what type of employee to create
function employeePrompts() {
    const employeeChoice = [
        {
            type: "list",
            name: "employee",
            message: "Please select an employee t0 add. Select 'I'm finished' to finish adding employees and generate organizational chart.",
            choices: ["Engineer", "Intern", "I'm finished"],
        },
    ];

    inquirer.prompt(employeeChoice).then((name) => {
        // const employee = new Engineer();
        const val = Object.values(name).shift().toString();

        // switch statement to handle employee choices
        switch (val) {
            case "Engineer":
                engineerPrompts();
                break;
            case "Intern":
                // console.log("Intern prompts");
                internPrompts();
                break;
            case "I'm finished":
                console.log("Writing HTML file...");
                generateHTML();
                break;
        }
    });
}
let engineer;
const engineerArray = [];
let engineerHTML = [];
let internHTML = [];
// function too add engineers
const engineerPrompts = () => {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the engineers name?",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter engineers name!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "Enter Engineers Employee ID",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter engineers ID!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Enter Engineers Email",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter engineers email!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "github",
            message: "Enter Engineers Github",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter engineers Github username!");
                    return false;
                }
            },
        },
    ];

    inquirer.prompt(questions).then(({ name, id, email, github}) => {
        engineer = new Engineer(name, id, email, github);
        // consol.log(engineer);
        engineerArray.push({ name, id, email, github });

        // console.log(engineerArray);
        engineerHTML = engineerArray.map(function (data) {
            return `
            <div class="column is-2">
                <div class="card">
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-4 has-background-link-dark has-text-link-light">${data.name}
                            <br>
                            <span class= "subtitle is-6 has-background-link-dark has-text-link-light">Engineer</span>
                            <br>
                            <span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M11.94 3C9.75 3.03 8 4.81 8 7C7.94 8.64 7.81 10.47 7.03 11.59C9.71 13.22 12 13 12 13C12 13 14.29 13.22 16.97 11.59C16.12 10.22 15.94 8.54 16 7C16 4.79 14.21 3 12 3H11.94M8.86 13.32C6 13.93 4 15.35 4 17V21H12L9 17H6.5M12 21L13.78 13.81C13.78 13.81 13 14 12 14C11 14 10.22 13.81 10.22 13.81M12 21H20V17C20 15.35 18 13.93 15.14 13.32L17.5 17H15Z" />
                            </svg></span>
                            </p>
                        </div>
                        <div class="content has-background-link-light has text-link-dark">
                            <p class="content">Employee Id: ${data.id}</p>
                            <p>Email: <a href="mailto:${data.email}"> ${data.email}</a></p>
                            <p>Github: <a href="https://github.com/$data.github">${data.github}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
        engineerHTML = engineerHTML.join(" ");

        if (
            engineer.name != "" &&
            engineer.id > 0 &&
            engineer.email != "" &&
            engineer.github != ""
        ) {
            employeePrompts();
        }
    });
};

// function to add internPrompts