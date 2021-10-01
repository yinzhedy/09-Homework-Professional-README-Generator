
function init () {

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateREADME = require('./utils/generateMarkdown.js');
const path = require('path');

const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of your project, this can include' +
        '-what was your motivation?' +
        '-why did you build this project?' +
        'what problem does it solve?' +
        'what did you learn?'
      },
      {
        type: 'input',
        name: 'usage',
        message: "Please include instructions and examples for the use of your project here:",
      },
      {
        type: 'confirm',
        name: 'screenshots',
        message: "This prompt is here to inform you that a screenshot section has been created in your README" +
        ", please manually add in any necessary files to your newly created README.md after it has been created",
      },
      {
        type: 'confirm',
        name: 'videos',
        message: "This prompt is here to inform you that a video section has been created in your README" +
        ", please manually add in any necessary files to your newly created README.md after it has been created",
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please list out any and all collaborators with links to their works/portfolios,' +
        'also include any third party assets/tutorials/etc. used as well as corresponding links. '
      },
      {
        type: 'input',
        name: 'license',
        message: 'Please identify a license for your project'
      },
      {
        type: 'input',
        name: 'badges',
        message: "Please include anything you'd like to include in your Badges section:",
      },
      {
        type: 'input',
        name: 'features',
        message: "Please list out and features you want noted in your README here:",
      },
      {
        type: 'input',
        name: 'howToContribute',
        message: "Please include instructions for other developers on how to contribute to your project here:",
      },
      {
        type: 'input',
        name: 'tests',
        message: "Please include any tests for your application here:",
      },
])

      .then((answers) => {
          writeFileAsync(path.join (process.cwd(), "README.md"), generateREADME(answers));
        })
        .then(() => console.log('Successfully created README.md!'))
        .catch((err) => console.error(err));
    

  
    }

  init();
