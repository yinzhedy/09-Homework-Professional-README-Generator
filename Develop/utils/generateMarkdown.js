function generateMarkdown(answers) {
  return  `## ${answers.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Instructions](#instructions)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  ## Description
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
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

}

module.exports = generateMarkdown;
