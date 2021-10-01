// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generate = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([
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
        type: 'checkbox',
        name: 'index',
        message: "Please check all components you'd like to include in your README",
        choices: [
            'Installation',
            'Usage',
            'Screenshots',
            'Demo',
            'Credits',
            'License',
            'Badges',
            'Features',
            'How to Contribute',
            'Tests'
        ],

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

// const installation = questions[2].choices[0]
// const usage = questions[2].choices[1]
// const screenshots = questions[2].choices[2]
// const demo = questions[2].choices[3]
// const credits = questions[2].choices[4]
// const license = questions[2].choices[5]
// const badges = questions[2].choices[6]
// const features = questions[2].choices[7]
// const howToContribute = questions[2].choices[8]
// const tests = questions[2].choices[9]

// TODO: Create a function to write README file
const init = () => {
    promptUser()
      .then((answers) => fs.writeFileAsync(path.join (process.cwd(), "generatedREADME.md"), generateREADME(answers)))
      .then(() => console.log('Successfully created generatedREADME.md!'))
      .catch((err) => console.error(err));
  };
  
  init();
