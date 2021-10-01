function tableOfContents(answers) {
  const choices = answers.index
  // const usage = answers[2].choices[1]
  // const screenshots = answers[2].choices[2]
  // const demo = answers[2].choices[3]
  // const credits = answers[2].choices[4]
  // const license = answers[2].choices[5]
  // const badges = answers[2].choices[6]
  // const features = answers[2].choices[7]
  // const howToContribute = answers[2].choices[8]
  // const tests = answers[2].choices[9]
  let text = " ";
  console.log(choices)
  for (let i = 0; i < choices.length; i++) {
    console.log(choices[i])
  if (choices[i]) {
    console.log(text)
    text = text.concat(choices[i]) 
    break;
  };
  };
  console.log(text)
  return text;
};


function generateMarkdown(answers) {
  return  `# ${answers.title}
  ## Description
  ${answers.description}
  ## Table of Contents
  ${tableOfContents(answers)}
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
