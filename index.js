const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = ({title, description, install, usage, contributing, test, license, github, email}) => 
`
# Table of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [Contributing](#contribute)
- [Tests](#tests)
- [License](#license)
- [Github](#github)
- [Questions](#questions)

# ${title} {#title}

### Description {#description}
${description}

### Installation {#install}
\`\`\`
${install}
\`\`\`

### Usage {#usage}
${usage}

### Contributing {#contribute}
${contributing}

## Tests {#tests}
=== Running the application ===
\`\`\`
${test}
\`\`\`

### License {#license}
${license}

### Github {#github}
- [Github](${github})

### Entitled Questions {#questions}

- Why did you make this?: This is for a project for bootcamp
- Can I customize it however I like?: Yes, go ahead. You can delete these questions from your readme if you choose to.

##### How to contact me with any further questions
${email}

`


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description: '
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter project installation: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter project usage: '
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter project contributions: '
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter project test instructions: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose project license: ',
        choices: [
        "MIT: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
        "ISC: [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", 
        "Unlicense: [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter project github usename url: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter project email: '
    },
]).then((answers) => {
    //console.log(answers.license);
    readme = generateReadMe(answers);

    fs.writeFile('README.md', readme, (error) => {
        error ? console.log(error) : console.log("Success!");
    });
})
.catch((error) => {
    if (error.isTtyError) {
      console.log("couldn't be rendered in the current environment");
    } 
    else {
      console.log("something else went wrong");
      console.log(error);
    }
});
