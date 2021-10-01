// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
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
           'Video',
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
    ]);
};


const generateREADME = (answers) =>
  `# ${answers.title}
  ## Description
  ${answers.description}
  ## Table of Contents
  ${answers.index.choices[0]}
  ${answers.index.choices[1]}
  ${answers.index.choices[2]}
  ${answers.index.choices[3]}
  ${answers.index.choices[4]}
  ${answers.index.choices[5]}
  ${answers.index.choices[6]}
  ${answers.index.choices[7]}
  ${answers.index.choices[8]}
  ${answers.index.choices[9]}
  ## Installation
  ${answers.installation}
  ## Credits
  ${answers.credits}
  ## License
  ${answers.license}
  ## Badges
  ${answers.badges}
  ## Features
  ${answers.features}
  ## How to Contribute
  ${answers.howToContribute}
  ## Tests
  ${answers.tests}`;


// TODO: Create a function to write README file
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('generatedREADME.md', generateREADME(answers)))
      .then(() => console.log('Successfully created generatedREADME.md!'))
      .catch((err) => console.error(err));
  };
  
  init();
