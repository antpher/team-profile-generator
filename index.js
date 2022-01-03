const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/page-template.js');

const teamArray = [];
const idArray = [];

function teamProfileGenerator() {

    function manager() {
        console.log('Team Profile Generator!');
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the manager's id?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email?"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the manager's office number?"
            }
        ])
            .then(data => {
                const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
                teamArray.push(manager);
                idArray.push(data.managerId);
                createTeam();
            });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'Who would you like to add next?',
                choices: [
                    'Engineer',
                    'Intern',
                    'End generator.'
                ]
            }
        ])
        then(function (data) {
            if (data.memberChoice === "Engineer") {
                engineer();
            } else if (data.memberChoice === "Intern") {
                intern();
            } else (completeTeam());
        });
    }

    function engineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's ID?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub?"
            }
        ])
        .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            teamArray.push(engineer);
            idArray.push(data.engineerId);
            createTeam();
        });
    }

    function intern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's ID?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's school"
            }
        ])
        .then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            teamArray.push(intern);
            idArray.push(data.internId);
            createTeam();
        });
    }
}