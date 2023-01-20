// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  <kbd>license</kbd><kbd>${data.projectLicence}</kbd>
  ## Description
  ${data.projectDescription}
  ## Table of Contents
  - [Instalation](#instalation)
  - [Usage](#usage)
  - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

## Instalation

To install necessary dependecies, run the following command:

\`\`\`bash
${data.dependeciesCommand}
\`\`\`

## Usage

${data.information}

## License

This project is licensed under the ${data.projectLicence} license.

## Contributing

${data.contribution}

## Tests

To run tests, run the following command:

\`\`\`bash
${data.testCommand}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at <${data.email}>.
You can find more of my work at [${data.userName}](https://github.com/${data.userName}).
`;
}

module.exports = generateMarkdown;
